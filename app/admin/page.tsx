import { supabase } from '@/lib/supabase'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, CalendarCheck, Clock, CheckCircle } from "lucide-react"

export const dynamic = 'force-dynamic'

async function getStats() {
    // 1. Pending Appointments
    const { count: pendingCount } = await supabase
        .from('appointments')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'PENDING_CONFIRMATION')

    // 2. Today's Appointments
    const todayStr = new Date().toISOString().split('T')[0]
    const { count: todayCount } = await supabase
        .from('appointments')
        .select('*', { count: 'exact', head: true })
        .gte('startAt', `${todayStr}T00:00:00`)
        .lte('startAt', `${todayStr}T23:59:59`)
        .neq('status', 'CANCELED')

    // 3. Total stats
    const { count: totalCount } = await supabase
        .from('appointments')
        .select('*', { count: 'exact', head: true })

    return {
        pendingCount: pendingCount || 0,
        todayCount: todayCount || 0,
        totalCount: totalCount || 0
    }
}

export default async function AdminDashboard() {
    const stats = await getStats()

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Onay Bekleyen</CardTitle>
                        <Clock className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.pendingCount}</div>
                        <p className="text-xs text-muted-foreground">İşlem gerektiren randevular</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Bugünkü Randevular</CardTitle>
                        <CalendarCheck className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.todayCount}</div>
                        <p className="text-xs text-muted-foreground">Günün programı</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Toplam Randevu</CardTitle>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.totalCount}</div>
                        <p className="text-xs text-muted-foreground">Tüm zamanlar</p>
                    </CardContent>
                </Card>
            </div>

            {/* TODO: Recent Appointments List could go here */}
        </div>
    )
}
