'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'
import { Check, X, Trash2, Eye } from 'lucide-react'

// Types
interface Appointment {
    id: string
    customerName: string
    customerPhone: string
    startAt: string
    status: string
    service?: {
        name: string
    } | null // Handle join
}

export default function AppointmentsTable({ initialData }: { initialData: Appointment[] }) {
    const router = useRouter()
    const [appointments, setAppointments] = useState(initialData)
    const [filter, setFilter] = useState('ALL') // ALL, PENDING, CONFIRMED
    const [loadingMap, setLoadingMap] = useState<Record<string, boolean>>({})

    const filtered = appointments.filter(a => {
        if (filter === 'ALL') return true
        if (filter === 'PENDING') return a.status === 'PENDING_CONFIRMATION'
        return a.status === filter
    })

    const handleStatusUpdate = async (id: string, newStatus: string) => {
        setLoadingMap(prev => ({ ...prev, [id]: true }))
        try {
            const res = await fetch(`/api/appointments/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            })

            if (res.ok) {
                setAppointments(prev => prev.map(a =>
                    a.id === id ? { ...a, status: newStatus } : a
                ))
                router.refresh()
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoadingMap(prev => ({ ...prev, [id]: false }))
        }
    }

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'CONFIRMED': return <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Onaylı</span>
            case 'PENDING_CONFIRMATION': return <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">Bekliyor</span>
            case 'CANCELED': return <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">İptal</span>
            default: return <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">{status}</span>
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-sm">
            {/* Filter Header */}
            <div className="p-4 border-b border-gray-100 flex gap-2">
                {['ALL', 'PENDING', 'CONFIRMED', 'CANCELED'].map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === f ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        {f === 'ALL' ? 'Tümü' : f === 'PENDING' ? 'Bekleyenler' : f}
                    </button>
                ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th className="px-6 py-3">Müşteri</th>
                            <th className="px-6 py-3">Hizmet</th>
                            <th className="px-6 py-3">Tarih</th>
                            <th className="px-6 py-3">Durum</th>
                            <th className="px-6 py-3 text-right">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map(appointment => (
                            <tr key={appointment.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    {appointment.customerName}
                                    <div className="text-gray-500 text-xs font-normal">{appointment.customerPhone}</div>
                                </td>
                                <td className="px-6 py-4">
                                    {(appointment.service as any)?.name || 'Hizmet silinmiş'}
                                </td>
                                <td className="px-6 py-4">
                                    {format(new Date(appointment.startAt), 'd MMM yyyy HH:mm', { locale: tr })}
                                </td>
                                <td className="px-6 py-4">
                                    {getStatusBadge(appointment.status)}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        {appointment.status === 'PENDING_CONFIRMATION' && (
                                            <>
                                                <button
                                                    onClick={() => handleStatusUpdate(appointment.id, 'CONFIRMED')}
                                                    disabled={loadingMap[appointment.id]}
                                                    className="p-1.5 text-green-600 hover:bg-green-50 rounded"
                                                    title="Onayla"
                                                >
                                                    <Check className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleStatusUpdate(appointment.id, 'CANCELED')}
                                                    disabled={loadingMap[appointment.id]}
                                                    className="p-1.5 text-red-600 hover:bg-red-50 rounded"
                                                    title="Reddet"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </>
                                        )}
                                        {/* Future: Delete or View Details */}
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                    Kayıt bulunamadı.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
