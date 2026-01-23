import { supabase } from '@/lib/supabase'
import AppointmentsTable from './AppointmentsTable'

export const dynamic = 'force-dynamic'

export default async function AdminAppointmentsPage() {
    const { data: appointments, error } = await supabase
        .from('appointments')
        .select(`
            id,
            customerName,
            customerPhone,
            startAt,
            status,
            service:services(name)
        `)
        .order('startAt', { ascending: false })

    if (error) {
        console.error('Error fetching appointments:', error)
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Randevular</h1>
            </div>

            <AppointmentsTable initialData={appointments || []} />
        </div>
    )
}
