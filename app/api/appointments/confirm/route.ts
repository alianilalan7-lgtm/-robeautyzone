import { NextResponse } from 'next/server'
import { supabaseAdmin as supabase } from '@/lib/supabase-server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')
    const action = searchParams.get('action') // 'confirm' | 'cancel'

    if (!token || !action) {
        return new NextResponse('Eksik parametre', { status: 400 })
    }

    try {
        const { data: appointment, error: fetchError } = await supabase
            .from('appointments')
            .select('id, status, startAt, tokenExpiresAt')
            .eq('confirmationToken', token)
            .single()

        if (fetchError || !appointment) {
            return new NextResponse('Randevu bulunamadı veya token geçersiz', { status: 404 })
        }

        if (appointment.status === 'CANCELED') {
            return htmlResponse('❌', 'red', 'Bu Randevu Zaten İptal Edilmiş', 'İşlem yapılamaz.')
        }

        if (appointment.status === 'CONFIRMED' && action === 'confirm') {
            return htmlResponse('✅', 'green', 'Randevu Zaten Onaylı', 'Bu randevu daha önce onaylanmıştı.')
        }

        // Token expiry check
        if (appointment.tokenExpiresAt && new Date(appointment.tokenExpiresAt) < new Date()) {
            return htmlResponse('⏰', 'orange', 'Token Süresi Dolmuş', 'Bu onay bağlantısı artık geçerli değil.')
        }

        const newStatus = action === 'confirm' ? 'CONFIRMED' : 'CANCELED'
        const now = new Date().toISOString()

        const { error: updateError } = await supabase
            .from('appointments')
            .update(newStatus === 'CONFIRMED'
                ? { status: 'CONFIRMED' as const, confirmedAt: now }
                : { status: 'CANCELED' as const, canceledAt: now, cancelReason: 'Admin tarafından reddedildi' }
            )
            .eq('id', appointment.id)

        if (updateError) throw updateError

        const text = action === 'confirm' ? 'Randevu Onaylandı' : 'Randevu İptal Edildi'
        const color = action === 'confirm' ? 'green' : 'red'
        const icon = action === 'confirm' ? '✅' : '❌'

        return htmlResponse(icon, color, text, 'İşlem başarıyla tamamlandı.')

    } catch (error) {
        console.error('Confirmation error:', error)
        return new NextResponse('Bir hata oluştu', { status: 500 })
    }
}

function htmlResponse(icon: string, color: string, title: string, desc: string) {
    return new NextResponse(`
        <html>
            <body style="font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f5f5f5;">
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; max-width: 400px;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">${icon}</div>
                    <h1 style="color: ${color}; margin-bottom: 0.5rem;">${title}</h1>
                    <p style="color: #666;">${desc}</p>
                </div>
            </body>
        </html>
    `, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
}
