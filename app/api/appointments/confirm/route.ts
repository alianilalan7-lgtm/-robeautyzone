import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')
    const action = searchParams.get('action') // 'confirm' | 'cancel'

    if (!token || !action) {
        return new NextResponse('Eksik parametre', { status: 400 })
    }

    try {
        // 1. Find Appointment
        const { data: appointment, error: fetchError } = await supabase
            .from('appointments')
            .select('id, status, startAt')
            .eq('confirmationToken', token)
            .single()

        if (fetchError || !appointment) {
            return new NextResponse('Randevu bulunamadı veya token geçersiz', { status: 404 })
        }

        if (appointment.status === 'CANCELED') {
            return new NextResponse('Bu randevu zaten iptal edilmiş', { status: 400 })
        }

        // 2. Update Status
        const newStatus = action === 'confirm' ? 'CONFIRMED' : 'CANCELED'
        const updateData: any = { status: newStatus }

        if (newStatus === 'CONFIRMED') {
            updateData.confirmedAt = new Date().toISOString()
        } else {
            updateData.canceledAt = new Date().toISOString()
            updateData.cancelReason = 'Admin tarafından reddedildi'
        }

        const { error: updateError } = await supabase
            .from('appointments')
            .update(updateData)
            .eq('id', appointment.id)

        if (updateError) {
            throw updateError
        }

        // 3. Return HTML Page
        const color = action === 'confirm' ? 'green' : 'red'
        const text = action === 'confirm' ? 'Randevu Onaylandı' : 'Randevu İptal Edildi'

        return new NextResponse(`
            <html>
                <body style="font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f5f5f5;">
                    <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center;">
                        <div style="color: ${color}; font-size: 3rem; margin-bottom: 1rem;">${action === 'confirm' ? '✅' : '❌'}</div>
                        <h1 style="color: #333; margin-bottom: 0.5rem;">${text}</h1>
                        <p style="color: #666;">İşlem başarıyla tamamlandı.</p>
                    </div>
                </body>
            </html>
        `, {
            headers: { 'Content-Type': 'text/html; charset=utf-8' }
        })

    } catch (error) {
        console.error('Confirmation error:', error)
        return new NextResponse('Bir hata oluştu', { status: 500 })
    }
}
