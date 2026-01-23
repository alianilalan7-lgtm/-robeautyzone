import { NextResponse } from 'next/server'
import { createAppointment, AppointmentSchema } from '@/lib/appointments'
import { z } from 'zod'

export async function POST(request: Request) {
    try {
        const body = await request.json()

        // 1. Validate Input
        const validatedData = AppointmentSchema.parse(body)

        // 2. Create Appointment
        const appointment = await createAppointment(validatedData)

        // 3. Return Success
        return NextResponse.json(
            { success: true, data: appointment },
            { status: 201 }
        )

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { success: false, error: 'Doğrulama hatası', details: error.errors },
                { status: 400 }
            )
        }

        const message = error instanceof Error ? error.message : 'Bir hata oluştu'

        return NextResponse.json(
            { success: false, error: message },
            { status: message === 'Seçilen saat dolu' || message === 'İş yeri kapalı' ? 409 : 500 }
        )
    }
}
