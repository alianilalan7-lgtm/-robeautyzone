export async function sendWhatsAppNotification(text: string) {
    const phone = process.env.CALLMEBOT_PHONE
    const apiKey = process.env.CALLMEBOT_API_KEY

    if (!phone || !apiKey) {
        console.warn('WhatsApp NOTIFICATION SKIPPED: Missing env vars')
        return
    }

    try {
        const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(text)}&apikey=${apiKey}`
        const res = await fetch(url)

        if (!res.ok) {
            console.error('WhatsApp API Error:', await res.text())
        } else {
            console.log('WhatsApp notification sent')
        }
    } catch (error) {
        console.error('WhatsApp Send Failed:', error)
    }
}

export function generateAppointmentMessage(appointment: any, serviceName: string) {
    const date = new Date(appointment.startAt).toLocaleDateString('tr-TR')
    const time = new Date(appointment.startAt).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
    const confirmLink = `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointments/confirm?token=${appointment.confirmationToken}&action=confirm`
    const cancelLink = `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointments/confirm?token=${appointment.confirmationToken}&action=cancel`

    return `📅 *YENİ RANDEVU TALEBİ*\n\n` +
        `👤 Müşteri: ${appointment.customerName}\n` +
        `📞 Tel: ${appointment.customerPhone}\n` +
        `💅 Hizmet: ${serviceName}\n` +
        `📆 Tarih: ${date} ${time}\n\n` +
        `Onaylamak için:\n${confirmLink}\n\n` +
        `Reddetmek için:\n${cancelLink}`
}
