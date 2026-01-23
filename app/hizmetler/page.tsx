import Link from "next/link"
import { supabase } from "@/lib/supabase"

export const dynamic = 'force-dynamic'

export default async function HizmetlerPage() {
    // Fetch categories with their services
    const { data: categories, error } = await supabase
        .from('service_categories')
        .select(`
            *,
            services (
                *
            )
        `)
        .eq('services.active', true)
        .order('order', { ascending: true })

    if (error) {
        console.error('Error fetching services:', error)
    }

    // Filter out categories with no services (due to inner join filtering or empty)
    const activeCategories = categories?.filter(cat => cat.services && cat.services.length > 0) || []

    return (
        <div className="min-h-screen bg-cream-50 py-32 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="font-display text-4xl md:text-5xl text-primary-800 text-center mb-6">
                    Hizmetlerimiz
                </h1>

                <p className="text-center text-primary-600 mb-16 max-w-2xl mx-auto text-lg">
                    IRO beautyzone'da size özel premium bakım deneyimi.
                </p>

                <div className="space-y-20">
                    {activeCategories.map((category) => (
                        <div key={category.id} className="scroll-mt-32" id={category.slug}>
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4 flex items-center gap-3">
                                <span className="w-2 h-8 bg-primary rounded-full"></span>
                                {category.name}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.services.map((service: any) => ( // Using any for quick fix, properly types should be used
                                    <div
                                        key={service.id}
                                        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="font-display text-lg font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors">
                                                    {service.name}
                                                </h3>
                                                <span className="shrink-0 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
                                                    ₺{service.priceMin}
                                                </span>
                                            </div>

                                            <p className="text-gray-500 text-sm mb-6 line-clamp-2 min-h-[2.5em]">
                                                {service.description || `${service.name} hizmeti için detaylı bilgi.`}
                                            </p>

                                            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                                <div className="flex items-center text-gray-400 text-sm">
                                                    <span className="material-symbols-outlined text-[18px] mr-1">schedule</span>
                                                    {service.durationMin} dk
                                                </div>
                                                <Link
                                                    href={`/randevu?service=${service.id}`}
                                                    className="flex items-center text-primary font-semibold text-sm hover:underline"
                                                >
                                                    Randevu Al
                                                    <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {activeCategories.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        Henüz hizmet eklenmemiş. Lütfen daha sonra tekrar kontrol edin.
                    </div>
                )}

                <div className="mt-24 text-center">
                    <Link
                        href="/randevu"
                        className="inline-flex items-center justify-center bg-primary text-white px-10 py-5 rounded-xl font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
                    >
                        <span className="material-symbols-outlined mr-2">calendar_month</span>
                        Hemen Randevu Oluştur
                    </Link>
                </div>
            </div>
        </div>
    )
}
