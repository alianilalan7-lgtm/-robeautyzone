'use client'

import { useState, useEffect } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { supabase } from '@/lib/supabase'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'
import { Loader2, Clock } from 'lucide-react'

interface Appointment {
    id: string
    customerName: string
    customerPhone: string
    startAt: string
    status: string
    service?: { name: string; durationMin: number } | null
}

const STATUS_CONFIG: Record<string, { label: string; cls: string; dot: string }> = {
    CONFIRMED: { label: 'Onaylı', cls: 'bg-emerald-50 border-emerald-200', dot: 'bg-emerald-500' },
    PENDING_CONFIRMATION: { label: 'Bekliyor', cls: 'bg-amber-50 border-amber-200', dot: 'bg-amber-400' },
    CANCELED: { label: 'İptal', cls: 'bg-red-50 border-red-200', dot: 'bg-red-400' },
    COMPLETED: { label: 'Tamamlandı', cls: 'bg-blue-50 border-blue-200', dot: 'bg-blue-400' },
}

export default function AdminCalendarPage() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [appointments, setAppointments] = useState<Appointment[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!date) return
        const fetchAppointments = async () => {
            setLoading(true)
            const dateStr = format(date, 'yyyy-MM-dd')
            const { data } = await supabase
                .from('appointments')
                .select('id, customerName, customerPhone, startAt, status, service:services(name, durationMin)')
                .gte('startAt', `${dateStr}T00:00:00`)
                .lte('startAt', `${dateStr}T23:59:59`)
                .order('startAt')
            setAppointments(data || [])
            setLoading(false)
        }
        fetchAppointments()
    }, [date])

    const statusCfg = (status: string) =>
        STATUS_CONFIG[status] ?? { label: status, cls: 'bg-gray-50 border-gray-200', dot: 'bg-gray-400' }

    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Takvim</h1>
                <p className="text-sm text-gray-500 mt-0.5">Güne göre randevuları görüntüle</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-5">
                {/* Calendar picker */}
                <div className="lg:w-auto shrink-0">
                    <Card className="shadow-sm border-gray-100">
                        <CardContent className="p-3">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                locale={tr}
                                className="rounded-lg"
                            />
                        </CardContent>
                    </Card>
                </div>

                {/* Day schedule */}
                <div className="flex-1">
                    <Card className="shadow-sm border-gray-100 h-full">
                        <div className="px-5 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-900 text-sm">
                                {date
                                    ? format(date, "d MMMM yyyy, EEEE", { locale: tr })
                                    : 'Tarih Seçin'
                                }
                            </h2>
                            {!loading && appointments.length > 0 && (
                                <p className="text-xs text-gray-400 mt-0.5">{appointments.length} randevu</p>
                            )}
                        </div>
                        <CardContent className="p-5">
                            {loading ? (
                                <div className="flex items-center justify-center py-12">
                                    <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                                </div>
                            ) : appointments.length === 0 ? (
                                <div className="text-center py-12 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
                                    <Clock className="w-8 h-8 mx-auto mb-2 opacity-30" />
                                    <p className="text-sm">Bu tarihte randevu bulunmuyor.</p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {appointments.map(apt => {
                                        const cfg = statusCfg(apt.status)
                                        return (
                                            <div
                                                key={apt.id}
                                                className={`flex gap-4 p-4 border rounded-xl ${cfg.cls}`}
                                            >
                                                <div className="flex flex-col items-center">
                                                    <span className="text-lg font-bold text-gray-800 tabular-nums leading-none">
                                                        {format(new Date(apt.startAt), 'HH:mm')}
                                                    </span>
                                                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${cfg.dot}`} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-semibold text-gray-900 text-sm">{apt.customerName}</p>
                                                    <p className="text-xs text-gray-600 mt-0.5">
                                                        {apt.service?.name}
                                                        {apt.service?.durationMin && (
                                                            <span className="text-gray-400 ml-1">({apt.service.durationMin} dk)</span>
                                                        )}
                                                    </p>
                                                    <p className="text-xs text-gray-400 mt-0.5">{apt.customerPhone}</p>
                                                </div>
                                                <span className={`text-xs font-medium px-2 py-1 rounded-lg bg-white/60 text-gray-700 self-start shrink-0`}>
                                                    {cfg.label}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
