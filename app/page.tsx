'use client'

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#FDFCFB] dark:bg-[#1A1614]">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-[#FDFCFB] dark:bg-[#1A1614]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8B766C]/10 text-[#8B766C] text-xs font-bold uppercase tracking-widest">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B766C] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B766C]"></span>
                                </span>
                                <span>İstanbul&apos;un En İyi Nail Art Deneyimi</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-display leading-[1.1] font-semibold text-gray-900 dark:text-white">
                                Premium <br /> <span className="italic text-[#8B766C]">Nail Art</span> <br /> Experience
                            </h1>

                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                                İstanbul&apos;un kalbindeki özel nail art stüdyomuzda, sanatı parmaklarınıza taşıyoruz.
                                Profesyonel ekibimiz ve modern tekniklerimizle tanışın.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button className="bg-[#8B766C] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined">calendar_today</span>
                                    Hemen Randevu Al
                                </button>
                                <button className="border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                                    Hizmetlerimiz
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                                <img
                                    alt="Professional Nail Art"
                                    className="w-full h-full object-cover"
                                    src="/images/gallery/WhatsApp Image 2026-01-21 at 23.17.27.jpeg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#8B766C]/20 to-transparent"></div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#D1C7BD]/30 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -top-6 -right-6 w-64 h-64 bg-[#8B766C]/20 rounded-full blur-3xl -z-10"></div>

                            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-gray-100 dark:border-gray-700">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-[#8B766C]/10 flex items-center justify-center text-[#8B766C]">
                                        <span className="material-symbols-outlined">stars</span>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">4.9/5</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-tighter">Müşteri Memnuniyeti</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rest of sections... */}
            <section className="py-24 bg-gray-50 dark:bg-[#151210]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="group p-10 bg-white dark:bg-gray-800 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                <div className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <span className="material-symbols-outlined text-3xl" style={{ color: feature.color }}>{feature.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services + About sections continue... */}
        </div>
    )
}

const features = [
    {
        icon: "brush",
        color: "#f97316",
        bgColor: "bg-orange-100 dark:bg-orange-900/30",
        title: "Premium Hizmet",
        description: "Uzman ekibimizle en kaliteli ürünleri kullanarak benzersiz bir nail art deneyimi sunuyoruz."
    },
    {
        icon: "schedule",
        color: "#ef4444",
        bgColor: "bg-red-100 dark:bg-red-900/30",
        title: "Online Randevu",
        description: "7/24 aktif olan online randevu sistemimiz ile dilediğiniz zaman kolayca yerinizi ayırtın."
    },
    {
        icon: "auto_awesome",
        color: "#eab308",
        bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
        title: "Hijyenik Ortam",
        description: "Steril ve konforlu bir ortamda, sağlığınız için en yüksek hijyen standartlarını uyguluyoruz."
    }
]
