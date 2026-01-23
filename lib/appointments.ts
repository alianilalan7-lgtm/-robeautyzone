import { supabase } from './supabase'
import { z } from 'zod'
import { addMinutes, isBefore, isAfter, parse, format, getDay } from 'date-fns'
import { sendWhatsAppNotification, generateAppointmentMessage } from './whatsapp'

export const AppointmentSchema = z.object({
    serviceId: z.string(),
    customerName: z.string().min(2),
    customerPhone: z.string().min(10),
    customerEmail: z.string().email().optional().or(z.literal('')),
    date: z.string(), // YYYY-MM-DD
    time: z.string(), // HH:mm
    kvkkConsent: z.boolean().refine(val => val === true, "KVKK onayı gereklidir")
})

export type CreateAppointmentInput = z.infer<typeof AppointmentSchema>

export async function checkAvailability(date: string, time: string, durationMin: number) {
    const startAt = new Date(`${date}T${time}`)
    const endAt = addMinutes(startAt, durationMin)

    // 1. Check Business Hours
    const dayOfWeek = format(startAt, 'EEEE').toUpperCase() as "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY"
    const { data: businessHours, error: bhError } = await supabase
        .from('business_hours')
        .select('*')
        .eq('dayOfWeek', dayOfWeek)
        .single()

    if (bhError || !businessHours?.isOpen) {
        return { available: false, reason: 'İş yeri kapalı' }
    }

    // Convert "09:00" to comparison mechanism
    const openTime = parse(`${date}T${businessHours.openTime}`, "yyyy-MM-dd'T'HH:mm", new Date())
    const closeTime = parse(`${date}T${businessHours.closeTime}`, "yyyy-MM-dd'T'HH:mm", new Date())

    if (isBefore(startAt, openTime) || isAfter(endAt, closeTime)) {
        return { available: false, reason: 'Çalışma saatleri dışında' }
    }

    // 2. Check Closures (Holidays)
    const { data: closure } = await supabase
        .from('closures')
        .select('id')
        .eq('date', date)
        .maybeSingle()

    if (closure) {
        return { available: false, reason: 'Bu tarihte kapalıyız' }
    }

    // 3. Check Overlapping Appointments
    // Overlap formula: (StartA < EndB) and (EndA > StartB)
    const { data: conflicts, error: conflictError } = await supabase
        .from('appointments')
        .select('id')
        .neq('status', 'CANCELED')
        .neq('status', 'NO_RESPONSE')
        .lt('startAt', endAt.toISOString())
        .gt('endAt', startAt.toISOString())

    if (conflictError) {
        console.error('Conflict check error:', conflictError)
        throw new Error('Müsaitlik kontrolü yapılamadı')
    }

    if (conflicts && conflicts.length > 0) {
        return { available: false, reason: 'Seçilen saat dolu' }
    }

    return { available: true }
}

export async function createAppointment(input: CreateAppointmentInput) {
    // 1. Get Service Details
    const { data: service } = await supabase
        .from('services')
        .select('*')
        .eq('slug', input.serviceId) // UI sends slug
        .single()

    if (!service) throw new Error('Hizmet bulunamadı')

    // 2. Check Availability
    const check = await checkAvailability(input.date, input.time, service.durationMin)
    if (!check.available) {
        throw new Error(check.reason)
    }

    // 3. Calculate Timestamps
    const startAt = new Date(`${input.date}T${input.time}`).toISOString()
    const endAt = addMinutes(new Date(`${input.date}T${input.time}`), service.durationMin).toISOString()

    // 4. Insert Appointment
    const { data, error } = await supabase
        .from('appointments')
        .insert({
            id: crypto.randomUUID(),
            serviceId: service.id,
            customerName: input.customerName,
            customerPhone: input.customerPhone,
            customerEmail: input.customerEmail || null,
            startAt,
            endAt,
            status: 'PENDING_CONFIRMATION',
            kvkkConsent: input.kvkkConsent,
            consentAt: new Date().toISOString(),
            confirmationToken: crypto.randomUUID(),
            updatedAt: new Date().toISOString()
        })
        .select()
        .single()

    if (error) {
        console.error('Create error:', error)
        throw new Error('Randevu oluşturulamadı')
    }

    // 5. Send Notification (Async - don't block response)
    const message = generateAppointmentMessage(data, service.name)
    sendWhatsAppNotification(message).catch(err => console.error('Notification failed:', err))

    return data
}
