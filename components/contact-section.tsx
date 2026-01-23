
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactSection() {
    return (
        <section className="py-24 bg-white dark:bg-background-dark relative overflow-hidden">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Contact Info */}
                    <div className="w-full md:w-1/3 space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                                İletişim & Konum
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Sorularınız veya randevu talepleriniz için bize ulaşın. Sizi stüdyomuzda ağırlamaktan mutluluk duyarız.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <Card className="border-none shadow-lg bg-[#FAF9F8] dark:bg-gray-800/50">
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Adres</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            Suadiye, Açelya Sk. Parlar Apt No:1/17<br />
                                            34740 Kadıköy/İstanbul
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-lg bg-[#FAF9F8] dark:bg-gray-800/50">
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Telefon</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                                            0532 702 08 18
                                        </p>
                                        <Link href="https://wa.me/905327020818" target="_blank">
                                            <Button variant="outline" size="sm" className="gap-2 text-primary hover:text-primary-foreground hover:bg-primary border-primary/20">
                                                <span className="material-symbols-outlined text-[18px]">chat</span>
                                                WhatsApp'tan Ulaşın
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-lg bg-[#FAF9F8] dark:bg-gray-800/50">
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <span className="material-symbols-outlined">schedule</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Çalışma Saatleri</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            Pazartesi - Cumartesi: 09:00 - 19:00<br />
                                            Pazar: Kapalı
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="w-full md:w-2/3 h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 relative group">
                        <iframe
                            src="https://maps.google.com/maps?q=Suadiye,%20A%C3%A7elya%20Sk.%20Parlar%20Apt%20No:1/17,%2034740%20Kad%C4%B1k%C3%B6y/%C4%B0stanbul&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1) opacity(0.9)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale transition-all duration-500 hover:grayscale-0"
                        ></iframe>

                        {/* Overlay for inactive state */}
                        <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
