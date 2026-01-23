import { NextResponse } from 'next/server'
import { checkAvailability } from '@/lib/appointments'
import { addMinutes, format, isBefore, parse, set } from 'date-fns'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')
    const serviceSlug = searchParams.get('service')
    const duration = searchParams.get('duration')

    if (!date || !duration) {
        return NextResponse.json({ error: 'Tarih ve süre gereklidir' }, { status: 400 })
    }

    const durationMin = parseInt(duration)
    const slots = []

    // Start from 09:00 to 20:00 (simple loop, real logic uses business hours in checkAvailability)
    // We generated logic in lib/appointments to check business hours, so we can just loop widely
    // and let the checker filter them.

    // But to be efficient, we should roughly know open hours.
    // Let's assume 09:00 - 19:30 (last slot)

    let current = parse(`${date}T09:00`, "yyyy-MM-dd'T'HH:mm", new Date())
    const end = parse(`${date}T20:00`, "yyyy-MM-dd'T'HH:mm", new Date())

    while (isBefore(current, end)) {
        const timeStr = format(current, 'HH:mm')

        // Skip past times if today
        const now = new Date()
        const slotDateTime = parse(`${date}T${timeStr}`, "yyyy-MM-dd'T'HH:mm", new Date())

        if (isBefore(slotDateTime, now)) {
            current = addMinutes(current, 30) // 30 min intervals
            continue
        }

        const check = await checkAvailability(date, timeStr, durationMin)

        if (check.available) {
            slots.push(timeStr)
        }

        current = addMinutes(current, 30)
    }

    return NextResponse.json({ slots })
}
