import { createSupabaseServer } from '@/lib/supabase-server'
import { CalendarCheck, Clock, CheckCircle, TrendingUp } from "lucide-react"
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'

export const dynamic = 'force-dynamic'

const STATUS_LABEL: Record<string, { label: string; cls: string }> = {
    PENDING_CONFIRMATION: { label: 'Bekliyor', cls: 'bg-amber-50 text-amber-700 border border-amber-200' },
    CONFIRMED: { label: 'Onaylı', cls: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
    CANCELED: { label: 'İptal', cls: 'bg-red-50 text-red-600 border border-red-200' },
    COMPLETED: { label: 'Tamamlandı', cls: 'bg-blue-50 text-blue-700 border border-blue-200' },
    DRAFT: { label: 'Taslak', cls: 'bg-gray-100 text-gray-600 border border-gray-200' },
    NO_RESPONSE: { label: 'Yanıtsız', cls: 'bg-gray-100 text-gray-500 border border-gray-200' },
}

async function getData() {
    const sb = await createSupabaseServer()
    const todayStr = new Date().toISOString().split('T')[0]

    const [
        { count: pendingCount },
        { count: todayCount },
        { count: totalCount },
        { count: completedCount },
        { data: recent }
    ] = await Promise.all([
        sb.from('appointments').select('*', { count: 'exact', head: true }).eq('status', 'PENDING_CONFIRMATION'),
        sb.from('appointments').select('*', { count: 'exact', head: true })
            .gte('startAt', `${todayStr}T00:00:00`).lte('startAt', `${todayStr}T23:59:59`).neq('status', 'CANCELED'),
        sb.from('appointments').select('*', { count: 'exact', head: true }),
        sb.from('appointments').select('*', { count: 'exact', head: true }).eq('status', 'COMPLETED'),
        sb.from('appointments')
            .select('id, customerName, customerPhone, startAt, status, service:services(name)')
            .order('createdAt', { ascending: false })
            .limit(8)
    ])

    return {
        pendingCount: pendingCount || 0,
        todayCount: todayCount || 0,
        totalCount: totalCount || 0,
        completedCount: completedCount || 0,
        recent: recent || []
    }
}

export default async function AdminDashboard() {
    const { pendingCount, todayCount, totalCount, completedCount, recent } = await getData()

    const stats = [
        {
            label: 'Onay Bekleyen',
            value: pendingCount,
            sub: 'İşlem gerektiriyor',
            icon: Clock,
            iconCls: 'text-amber-500 bg-amber-50',
            valueCls: pendingCount > 0 ? 'text-amber-600' : 'text-gray-900',
        },
        {
            label: 'Bugünkü Randevular',
            value: todayCount,
            sub: 'Günün programı',
            icon: CalendarCheck,
            iconCls: 'text-blue-500 bg-blue-50',
            valueCls: 'text-gray-900',
        },
        {
            label: 'Tamamlanan',
            value: completedCount,
            sub: 'Başarılı randevular',
            icon: CheckCircle,
            iconCls: 'text-emerald-500 bg-emerald-50',
            valueCls: 'text-gray-900',
        },
        {
            label: 'Toplam Randevu',
            value: totalCount,
            sub: 'Tüm zamanlar',
            icon: TrendingUp,
            iconCls: 'text-[#8D776C] bg-[#F7F5F3]',
            valueCls: 'text-gray-900',
        },
    ]

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-500 mt-0.5">
                    {format(new Date(), "d MMMM yyyy, EEEE", { locale: tr })}
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map(s => (
                    <div key={s.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide leading-tight">{s.label}</p>
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${s.iconCls}`}>
                                <s.icon className="w-4 h-4" />
                            </div>
                        </div>
                        <p className={`text-3xl font-bold ${s.valueCls}`}>{s.value}</p>
                        <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
                    </div>
                ))}
            </div>

            {/* Recent appointments */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="font-semibold text-gray-900 text-sm">Son Randevular</h2>
                    <a href="/admin/appointments" className="text-xs text-[#8D776C] hover:underline font-medium cursor-pointer">
                        Tümünü gör →
                    </a>
                </div>

                {recent.length === 0 ? (
                    <div className="py-12 text-center text-gray-400 text-sm">Henüz randevu yok.</div>
                ) : (
                    <div className="divide-y divide-gray-50">
                        {recent.map((apt: any) => {
                            const status = STATUS_LABEL[apt.status] ?? { label: apt.status, cls: 'bg-gray-100 text-gray-600 border border-gray-200' }
                            return (
                                <div key={apt.id} className="flex items-center justify-between px-5 py-3 hover:bg-gray-50/50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-[#F7F5F3] flex items-center justify-center text-[#8D776C] font-bold text-xs shrink-0">
                                            {apt.customerName?.charAt(0)?.toUpperCase() ?? '?'}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">{apt.customerName}</p>
                                            <p className="text-xs text-gray-400">
                                                {apt.service?.name} · {format(new Date(apt.startAt), 'd MMM HH:mm', { locale: tr })}
                                            </p>
                                        </div>
                                    </div>
                                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${status.cls}`}>
                                        {status.label}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}
