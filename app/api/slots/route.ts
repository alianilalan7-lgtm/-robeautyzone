import { NextResponse } from 'next/server'
import { checkAvailability } from '@/lib/appointments'
import { supabaseAdmin as supabase } from '@/lib/supabase-server'
import { addMinutes, format, isBefore, parse } from 'date-fns'

const DAY_MAP: Record<number, string> = {
    0: 'SUNDAY', 1: 'MONDAY', 2: 'TUESDAY', 3: 'WEDNESDAY',
    4: 'THURSDAY', 5: 'FRIDAY', 6: 'SATURDAY'
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')
    const duration = searchParams.get('duration')

    if (!date || !duration) {
        return NextResponse.json({ error: 'Tarih ve süre gereklidir' }, { status: 400 })
    }

    const durationMin = parseInt(duration)
    const dayOfWeek = DAY_MAP[new Date(`${date}T00:00:00`).getDay()]

    const { data: businessHours } = await supabase
        .from('business_hours')
        .select('isOpen, openTime, closeTime')
        .eq('dayOfWeek', dayOfWeek as 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY')
        .single()

    if (!businessHours?.isOpen) {
        return NextResponse.json({ slots: [] })
    }

    const slots: string[] = []
    let current = parse(`${date}T${businessHours.openTime}`, "yyyy-MM-dd'T'HH:mm", new Date())
    const closeDateTime = parse(`${date}T${businessHours.closeTime}`, "yyyy-MM-dd'T'HH:mm", new Date())
    const lastStart = addMinutes(closeDateTime, -durationMin)
    const now = new Date()

    while (!isBefore(lastStart, current)) {
        if (!isBefore(current, now)) {
            const timeStr = format(current, 'HH:mm')
            const check = await checkAvailability(date, timeStr, durationMin)
            if (check.available) slots.push(timeStr)
        }
        current = addMinutes(current, 30)
    }

    return NextResponse.json({ slots })
}
