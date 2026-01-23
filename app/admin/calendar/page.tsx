'use client'

import { useState, useEffect } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from '@/lib/supabase'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'

export default function AdminCalendarPage() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [appointments, setAppointments] = useState<any[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (date) {
            const fetchAppointments = async () => {
                setLoading(true)
                const dateStr = format(date, 'yyyy-MM-dd')

                const { data, error } = await supabase
                    .from('appointments')
                    .select(`
                        id, customerName, customerPhone, startAt, status, service:services(name, durationMin)
                    `)
                    .gte('startAt', `${dateStr}T00:00:00`)
                    .lte('startAt', `${dateStr}T23:59:59`)
                    .order('startAt')

                if (data) {
                    setAppointments(data)
                }
                setLoading(false)
            }
            fetchAppointments()
        }
    }, [date])

    return (
        <div className="flex flex-col md:flex-row gap-8 min-h-[600px]">
            {/* Sidebar Calendar */}
            <div className="w-full md:w-auto">
                <Card>
                    <CardContent className="p-4">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            locale={tr}
                            className="rounded-md border"
                        />
                    </CardContent>
                </Card>
            </div>

            {/* Daily Schedule */}
            <div className="flex-1">
                <Card className="h-full">
                    <CardHeader>
                        <CardTitle>
                            {date ? format(date, 'd MMMM yyyy, EEEE', { locale: tr }) : 'Tarih Seçin'}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {loading ? (
                            <div className="text-center py-12 text-gray-500">Yükleniyor...</div>
                        ) : appointments.length === 0 ? (
                            <div className="text-center py-12 text-gray-400 border-2 border-dashed rounded-lg">
                                Bu tarihte randevu bulunmuyor.
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {appointments.map((apt) => {
                                    const time = format(new Date(apt.startAt), 'HH:mm')
                                    const statusColor = apt.status === 'CONFIRMED' ? 'bg-green-100 border-green-200' :
                                        apt.status === 'PENDING_CONFIRMATION' ? 'bg-orange-100 border-orange-200' :
                                            'bg-gray-100 border-gray-200'

                                    return (
                                        <div key={apt.id} className={`flex gap-4 p-4 border rounded-lg ${statusColor}`}>
                                            <div className="text-xl font-bold text-gray-700 min-w-[3.5rem]">
                                                {time}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900">{apt.customerName}</h3>
                                                <p className="text-sm text-gray-600">{apt.service?.name} ({apt.service?.durationMin} dk)</p>
                                                <p className="text-xs text-gray-500 mt-1">{apt.customerPhone}</p>
                                            </div>
                                            <div className="ml-auto flex items-center">
                                                <span className="text-xs font-bold px-2 py-1 bg-white/50 rounded uppercase">
                                                    {apt.status === 'PENDING_CONFIRMATION' ? 'Bekliyor' :
                                                        apt.status === 'CONFIRMED' ? 'Onaylı' : apt.status}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
