'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'
import { Check, X, CheckCircle2, Loader2 } from 'lucide-react'

interface Appointment {
    id: string
    customerName: string
    customerPhone: string
    startAt: string
    status: string
    service?: { name: string } | null
}

const STATUS_CONFIG = {
    PENDING_CONFIRMATION: { label: 'Bekliyor', cls: 'bg-amber-50 text-amber-700 border-amber-200' },
    CONFIRMED: { label: 'Onaylı', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    CANCELED: { label: 'İptal', cls: 'bg-red-50 text-red-600 border-red-200' },
    COMPLETED: { label: 'Tamamlandı', cls: 'bg-blue-50 text-blue-700 border-blue-200' },
    NO_RESPONSE: { label: 'Yanıtsız', cls: 'bg-gray-100 text-gray-500 border-gray-200' },
    DRAFT: { label: 'Taslak', cls: 'bg-gray-100 text-gray-500 border-gray-200' },
} as const

const FILTERS = [
    { key: 'ALL', label: 'Tümü' },
    { key: 'PENDING', label: 'Bekleyenler' },
    { key: 'CONFIRMED', label: 'Onaylı' },
    { key: 'CANCELED', label: 'İptal' },
]

export default function AppointmentsTable({ initialData }: { initialData: Appointment[] }) {
    const router = useRouter()
    const [appointments, setAppointments] = useState(initialData)
    const [filter, setFilter] = useState('ALL')
    const [loadingMap, setLoadingMap] = useState<Record<string, boolean>>({})

    const filtered = appointments.filter(a => {
        if (filter === 'ALL') return true
        if (filter === 'PENDING') return a.status === 'PENDING_CONFIRMATION'
        return a.status === filter
    })

    const counts: Record<string, number> = {
        ALL: appointments.length,
        PENDING: appointments.filter(a => a.status === 'PENDING_CONFIRMATION').length,
        CONFIRMED: appointments.filter(a => a.status === 'CONFIRMED').length,
        CANCELED: appointments.filter(a => a.status === 'CANCELED').length,
    }

    const handleStatus = async (id: string, newStatus: string) => {
        setLoadingMap(prev => ({ ...prev, [id]: true }))
        try {
            const res = await fetch(`/api/appointments/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            })
            if (res.ok) {
                setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a))
                router.refresh()
            }
        } catch (e) {
            console.error(e)
        } finally {
            setLoadingMap(prev => ({ ...prev, [id]: false }))
        }
    }

    const statusBadge = (status: string) => {
        const cfg = STATUS_CONFIG[status as keyof typeof STATUS_CONFIG] ?? { label: status, cls: 'bg-gray-100 text-gray-600 border-gray-200' }
        return (
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${cfg.cls}`}>
                {cfg.label}
            </span>
        )
    }

    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Filter tabs */}
            <div className="flex items-center gap-1 p-3 border-b border-gray-100 overflow-x-auto">
                {FILTERS.map(f => (
                    <button
                        key={f.key}
                        onClick={() => setFilter(f.key)}
                        className={`
                            flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap
                            ${filter === f.key
                                ? 'bg-[#F7F5F3] text-[#8D776C]'
                                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                            }
                        `}
                    >
                        {f.label}
                        {counts[f.key] > 0 && (
                            <span className={`text-xs px-1.5 py-0.5 rounded-full ${filter === f.key ? 'bg-[#8D776C]/10 text-[#8D776C]' : 'bg-gray-100 text-gray-500'}`}>
                                {counts[f.key]}
                            </span>
                        )}
                    </button>
                ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className="px-5 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">Müşteri</th>
                            <th className="px-5 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">Hizmet</th>
                            <th className="px-5 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">Tarih & Saat</th>
                            <th className="px-5 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">Durum</th>
                            <th className="px-5 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wide">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {filtered.map(apt => (
                            <tr key={apt.id} className="hover:bg-gray-50/60 transition-colors">
                                <td className="px-5 py-3.5">
                                    <p className="font-semibold text-gray-900">{apt.customerName}</p>
                                    <p className="text-xs text-gray-400 mt-0.5">{apt.customerPhone}</p>
                                </td>
                                <td className="px-5 py-3.5 text-gray-700">
                                    {(apt.service as any)?.name ?? <span className="text-gray-400 italic text-xs">Silinmiş</span>}
                                </td>
                                <td className="px-5 py-3.5 text-gray-700 tabular-nums">
                                    {format(new Date(apt.startAt), 'd MMM yyyy', { locale: tr })}
                                    <span className="text-gray-400 ml-1 text-xs">
                                        {format(new Date(apt.startAt), 'HH:mm')}
                                    </span>
                                </td>
                                <td className="px-5 py-3.5">
                                    {statusBadge(apt.status)}
                                </td>
                                <td className="px-5 py-3.5">
                                    <div className="flex items-center justify-end gap-1">
                                        {loadingMap[apt.id] ? (
                                            <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                                        ) : (
                                            <>
                                                {apt.status === 'PENDING_CONFIRMATION' && (
                                                    <>
                                                        <button
                                                            onClick={() => handleStatus(apt.id, 'CONFIRMED')}
                                                            className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer"
                                                            title="Onayla"
                                                            aria-label="Randevuyu onayla"
                                                        >
                                                            <Check className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleStatus(apt.id, 'CANCELED')}
                                                            className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                                            title="Reddet"
                                                            aria-label="Randevuyu reddet"
                                                        >
                                                            <X className="w-4 h-4" />
                                                        </button>
                                                    </>
                                                )}
                                                {apt.status === 'CONFIRMED' && (
                                                    <button
                                                        onClick={() => handleStatus(apt.id, 'COMPLETED')}
                                                        className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                                                        title="Tamamlandı olarak işaretle"
                                                        aria-label="Tamamlandı olarak işaretle"
                                                    >
                                                        <CheckCircle2 className="w-4 h-4" />
                                                    </button>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-5 py-12 text-center text-gray-400 text-sm">
                                    Bu filtrede randevu bulunmuyor.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
