'use client'

import { useState, useEffect } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Clock2Icon, CheckCircle2 } from "lucide-react"
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'

interface Service {
    id: string
    name: string
    slug: string
    durationMin: number
    priceMin: number
    priceMax: number | null
}

interface AppointmentWizardProps {
    services: Service[]
}

export default function AppointmentWizard({ services }: AppointmentWizardProps) {
    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    // Data
    const [slots, setSlots] = useState<string[]>([])
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

    const [formData, setFormData] = useState({
        serviceSlug: '',
        serviceDuration: 0,
        date: '',
        time: '',
        name: '',
        phone: '',
        email: '',
        kvkkConsent: false,
    })

    const handleNext = () => setStep(step + 1)
    const handleBack = () => setStep(step - 1)

    // Fetch slots when date or service changes
    useEffect(() => {
        if (formData.date && formData.serviceSlug) {
            const fetchSlots = async () => {
                setLoading(true)
                try {
                    const res = await fetch(`/api/slots?date=${formData.date}&service=${formData.serviceSlug}&duration=${formData.serviceDuration}`)
                    const data = await res.json()
                    setSlots(data.slots || [])
                } catch (e) {
                    console.error(e)
                } finally {
                    setLoading(false)
                }
            }
            fetchSlots()
        }
    }, [formData.date, formData.serviceSlug, formData.serviceDuration])

    const handleSubmit = async () => {
        setLoading(true)
        setError(null)
        try {
            const res = await fetch('/api/appointments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    serviceId: formData.serviceSlug,
                    customerName: formData.name,
                    customerPhone: formData.phone,
                    customerEmail: formData.email,
                    date: formData.date,
                    time: formData.time,
                    kvkkConsent: formData.kvkkConsent
                })
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || 'Bir hata oluştu')
            }

            setSuccess(true)
        } catch (e: any) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    if (success) {
        return (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-display text-primary-800 mb-4">Randevunuz Alındı!</h2>
                <p className="text-primary-600 text-lg mb-8">
                    Talebini aldık. En kısa sürede WhatsApp üzerinden onay mesajı göndereceğiz.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                >
                    Yeni Randevu
                </button>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto">
            {step === 1 && (
                <div>
                    <h2 className="text-2xl font-display text-primary-800 mb-6">
                        Hizmet Seçin
                    </h2>
                    <div className="space-y-4">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => {
                                    setFormData({ ...formData, serviceSlug: service.slug, serviceDuration: service.durationMin })
                                    handleNext()
                                }}
                                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex justify-between items-center group
                                    ${formData.serviceSlug === service.slug
                                        ? 'bg-primary-50 border-2 border-primary-500 shadow-lg scale-[1.02]'
                                        : 'glass-card hover:bg-white hover:scale-[1.02] hover:shadow-xl border border-transparent'
                                    }
                                `}
                            >
                                <div>
                                    <h3 className="text-lg font-bold text-primary-900 group-hover:text-primary-700 transition-colors">{service.name}</h3>
                                    <p className="text-sm text-primary-600 mt-1 font-medium bg-primary/5 inline-block px-2 py-0.5 rounded-full">
                                        ⏱ {service.durationMin} dakika
                                    </p>
                                </div>
                                <div className="text-xl font-display font-bold text-primary-700 bg-white/50 px-4 py-2 rounded-xl">
                                    ₺{service.priceMin}{service.priceMax && `-${service.priceMax}`}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {step === 2 && (
                <div>
                    <h2 className="text-2xl font-display text-primary-800 mb-6">
                        Tarih ve Saat Seçin
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="mx-auto w-full md:w-auto">
                            <div className="glass-card p-6 rounded-3xl">
                                <Calendar
                                    mode="single"
                                    selected={selectedDate}
                                    locale={tr}
                                    disabled={(date) => {
                                        const today = new Date()
                                        today.setHours(0, 0, 0, 0)
                                        return date < today || date.getDay() === 0
                                    }} // Disable past & Sundays
                                    onSelect={(date) => {
                                        setSelectedDate(date)
                                        setFormData({ ...formData, date: date ? format(date, 'yyyy-MM-dd') : '', time: '' })
                                    }}
                                    className="p-2"
                                />
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-3xl h-fit">
                            <h3 className="font-display text-xl font-bold text-primary-900 mb-6 flex items-center gap-2">
                                <Clock2Icon className="w-5 h-5 text-primary-500" />
                                Müsait Saatler
                            </h3>

                            {!formData.date ? (
                                <div className="text-center py-12 text-primary-400/80 italic">
                                    Lütfen takvimden bir tarih seçin
                                </div>
                            ) : loading ? (
                                <div className="flex flex-col items-center justify-center py-12 text-primary-500 gap-3">
                                    <span className="w-8 h-8 border-4 border-current border-t-transparent rounded-full animate-spin opacity-50" />
                                    <span className="text-sm font-medium animate-pulse">Kontrol ediliyor...</span>
                                </div>
                            ) : slots.length === 0 ? (
                                <div className="text-center py-12 text-red-400 bg-red-50 rounded-xl">
                                    Bu tarihte boş yer kalmadı. 😔
                                </div>
                            ) : (
                                <div className="grid grid-cols-3 gap-3 animate-accordion-down">
                                    {slots.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setFormData({ ...formData, time })}
                                            className={`py-3 px-2 rounded-xl text-sm font-bold transition-all duration-200 transform hover:scale-105 ${formData.time === time
                                                ? 'bg-primary text-white shadow-lg scale-105 ring-4 ring-primary/20'
                                                : 'bg-white/80 text-primary-700 hover:bg-white hover:shadow-md border border-white/50'
                                                }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-primary/10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] transition-transform duration-500 z-50 flex justify-center ${formData.time ? 'translate-y-0' : 'translate-y-full'
                        }`}>
                        <div className="w-full max-w-3xl flex gap-4">
                            <button
                                onClick={handleBack}
                                className="px-8 py-4 border-2 border-primary/20 text-primary-700 font-bold rounded-2xl hover:bg-primary/5 transition-colors"
                            >
                                Geri
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={!formData.date || !formData.time}
                                className="flex-1 px-8 py-4 bg-primary text-white text-lg font-bold rounded-2xl hover:bg-primary-600 hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/30"
                            >
                                Seçimi Onayla ve Devam Et
                            </button>
                        </div>
                    </div>
                    {/* Spacer for fixed bottom bar */}
                    <div className="h-24"></div>
                </div>
            )}

            {step === 3 && (
                <div>
                    <h2 className="text-2xl font-display text-primary-800 mb-6">
                        İletişim Bilgileri
                    </h2>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm">
                            {error}
                        </div>
                    )}

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-primary-700 mb-2">
                                Ad Soyad *
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-primary-700 mb-2">
                                Telefon *
                            </label>
                            <input
                                type="tel"
                                placeholder="5xx xxx xx xx"
                                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-primary-700 mb-2">
                                E-posta
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="flex items-start gap-3 mt-6">
                            <input
                                type="checkbox"
                                id="kvkk"
                                checked={formData.kvkkConsent}
                                onChange={(e) => setFormData({ ...formData, kvkkConsent: e.target.checked })}
                                className="mt-1 w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                            />
                            <label htmlFor="kvkk" className="text-sm text-primary-600">
                                KVKK aydınlatma metnini okudum ve kabul ediyorum. WhatsApp ve e-posta ile
                                randevu hatırlatmaları almayı onaylıyorum.
                            </label>
                        </div>
                        <div className="flex gap-4 mt-8">
                            <button
                                onClick={handleBack}
                                className="flex-1 px-8 py-4 border-2 border-primary/20 text-primary-700 font-bold rounded-2xl hover:bg-primary/5 transition-colors"
                            >
                                Geri
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={!formData.name || !formData.phone || !formData.kvkkConsent || loading}
                                className="flex-1 px-8 py-4 bg-primary text-white text-lg font-bold rounded-2xl hover:bg-primary-600 hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                        İşleniyor...
                                    </>
                                ) : 'Randevu Oluştur'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
