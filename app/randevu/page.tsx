'use client'

import { useState } from 'react'

export default function RandevuPage() {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        service: '',
        date: '',
        time: '',
        name: '',
        phone: '',
        email: '',
        kvkkConsent: false,
    })

    const handleNext = () => setStep(step + 1)
    const handleBack = () => setStep(step - 1)

    return (
        <div className="min-h-screen bg-cream-50 py-16 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-display text-4xl md:text-5xl text-primary-800 text-center mb-12">
                    Randevu Oluştur
                </h1>

                {/* Progress Steps */}
                <div className="flex items-center justify-center mb-12">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${s <= step
                                        ? 'bg-primary-500 text-white'
                                        : 'bg-primary-100 text-primary-400'
                                    }`}
                            >
                                {s}
                            </div>
                            {s < 3 && (
                                <div
                                    className={`w-16 h-1 mx-2 transition-colors ${s < step ? 'bg-primary-500' : 'bg-primary-100'
                                        }`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Step Content */}
                <div className="bg-white rounded-lg shadow-sm p-8">
                    {step === 1 && (
                        <div>
                            <h2 className="text-2xl font-display text-primary-800 mb-6">
                                Hizmet Seçin
                            </h2>
                            <div className="space-y-4">
                                {mockServices.map((service) => (
                                    <button
                                        key={service.slug}
                                        onClick={() => {
                                            setFormData({ ...formData, service: service.slug })
                                            handleNext()
                                        }}
                                        className="w-full text-left p-4 border border-primary-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
                                    >
                                        <h3 className="font-medium text-primary-800">{service.name}</h3>
                                        <p className="text-sm text-primary-600 mt-1">
                                            {service.duration} dk • ₺{service.priceMin}
                                            {service.priceMax && `-${service.priceMax}`}
                                        </p>
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
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-primary-700 mb-2">
                                        Tarih
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-primary-700 mb-2">
                                        Saat
                                    </label>
                                    <select
                                        className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        value={formData.time}
                                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                    >
                                        <option value="">Saat seçin</option>
                                        <option value="09:00">09:00</option>
                                        <option value="10:00">10:00</option>
                                        <option value="11:00">11:00</option>
                                        <option value="14:00">14:00</option>
                                        <option value="15:00">15:00</option>
                                        <option value="16:00">16:00</option>
                                    </select>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        onClick={handleBack}
                                        className="flex-1 px-6 py-3 border border-primary-300 text-primary-700 rounded-lg hover:bg-primary-50 transition-colors"
                                    >
                                        Geri
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        disabled={!formData.date || !formData.time}
                                        className="flex-1 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Devam
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div>
                            <h2 className="text-2xl font-display text-primary-800 mb-6">
                                İletişim Bilgileri
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-primary-700 mb-2">
                                        Ad Soyad *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                                        className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                                        className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                                        className="mt-1"
                                    />
                                    <label htmlFor="kvkk" className="text-sm text-primary-600">
                                        KVKK aydınlatma metnini okudum ve kabul ediyorum. WhatsApp ve e-posta ile
                                        randevu hatırlatmaları almayı onaylıyorum.
                                    </label>
                                </div>
                                <div className="flex gap-4 mt-8">
                                    <button
                                        onClick={handleBack}
                                        className="flex-1 px-6 py-3 border border-primary-300 text-primary-700 rounded-lg hover:bg-primary-50 transition-colors"
                                    >
                                        Geri
                                    </button>
                                    <button
                                        disabled={!formData.name || !formData.phone || !formData.kvkkConsent}
                                        className="flex-1 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Randevu Oluştur
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

const mockServices = [
    { slug: 'klasik-nail-art', name: 'Klasik Nail Art', duration: 60, priceMin: 350, priceMax: 500 },
    { slug: 'premium-nail-art', name: 'Premium Nail Art', duration: 90, priceMin: 600, priceMax: 800 },
    { slug: 'kalici-oje', name: 'Kalıcı Oje', duration: 45, priceMin: 250, priceMax: null },
]
