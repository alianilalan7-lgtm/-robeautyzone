import { createSupabaseServer } from '@/lib/supabase-server'
import AppointmentsTable from './AppointmentsTable'

export const dynamic = 'force-dynamic'

export default async function AdminAppointmentsPage() {
    const sb = await createSupabaseServer()

    const { data: appointments, error } = await sb
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
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Randevular</h1>
                    <p className="text-sm text-gray-500 mt-0.5">Tüm randevuları görüntüle ve yönet</p>
                </div>
            </div>

            <AppointmentsTable initialData={appointments || []} />
        </div>
    )
}
