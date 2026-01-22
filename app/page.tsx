'use client'

export default function HomePage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span>İstanbul&apos;un En İyi Nail Art Deneyimi</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-display leading-[1.1] font-semibold text-gray-900 dark:text-white">
                                Premium <br /> <span className="italic text-primary">Nail Art</span> <br /> Experience
                            </h1>

                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                                İstanbul&apos;un kalbindeki özel nail art stüdyomuzda, sanatı parmaklarınıza taşıyoruz.
                                Profesyonel ekibimiz ve modern tekniklerimizle tanışın.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a href="/randevu" className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined">calendar_today</span>
                                    Hemen Randevu Al
                                </a>
                                <a href="/hizmetler" className="border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                                    Hizmetlerimiz
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                                <img
                                    alt="Professional Nail Art"
                                    className="w-full h-full object-cover"
                                    src="/images/gallery/WhatsApp Image 2026-01-21 at 23.17.27.jpeg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary/30 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -top-6 -right-6 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>

                            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-gray-100 dark:border-gray-700">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
                                        ⭐
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

            {/* Features Section */}
            <section className="py-24 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group p-10 bg-white dark:bg-gray-800 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                            <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-3xl">
                                🎨
                            </div>
                            <h3 className="text-xl font-bold mb-4">Premium Hizmet</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                Uzman ekibimizle en kaliteli ürünleri kullanarak benzersiz bir nail art deneyimi sunuyoruz.
                            </p>
                        </div>

                        <div className="group p-10 bg-white dark:bg-gray-800 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                            <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-3xl">
                                📅
                            </div>
                            <h3 className="text-xl font-bold mb-4">Online Randevu</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                7/24 aktif olan online randevu sistemimiz ile dilediğiniz zaman kolayca yerinizi ayırtın.
                            </p>
                        </div>

                        <div className="group p-10 bg-white dark:bg-gray-800 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                            <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-3xl">
                                ✨
                            </div>
                            <h3 className="text-xl font-bold mb-4">Hijyenik Ortam</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                Steril ve konforlu bir ortamda, sağlığınız için en yüksek hijyen standartlarını uyguluyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-semibold mb-4">Popüler Hizmetlerimiz</h2>
                        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, idx) => (
                            <a
                                key={idx}
                                href={service.link}
                                className="relative overflow-hidden rounded-2xl group cursor-pointer"
                            >
                                <img
                                    alt={service.name}
                                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
                                    src={service.image}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                                    <h4 className="text-white text-xl font-bold">{service.name}</h4>
                                    <p className="text-gray-300 text-sm">{service.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 bg-primary text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="mb-12 inline-block bg-white p-8 rounded-2xl">
                        <div className="flex items-center space-x-4">
                            <span className="text-6xl font-display font-bold tracking-tight text-primary">IRO</span>
                            <div className="h-16 w-[2px] bg-primary/20"></div>
                            <div className="text-left">
                                <div className="text-xs tracking-[0.3em] font-sans text-primary uppercase font-bold">Beauty</div>
                                <div className="text-xs tracking-[0.3em] font-sans text-primary uppercase font-bold">Zone</div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-display font-semibold mb-8 leading-tight">
                        Güzelliğinizi Sanata Dönüştürüyoruz
                    </h2>

                    <p className="text-lg opacity-90 leading-relaxed mb-10 max-w-2xl mx-auto">
                        IRO beautyzone, tırnak bakımını sıradan bir işlemden çıkarıp kişiye özel bir deneyime dönüştürmek
                        amacıyla kuruldu. Modern vizyonumuz ve uzman kadromuzla kendinizi özel hissetmenizi sağlıyoruz.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">5K+</div>
                            <div className="text-sm uppercase tracking-widest opacity-70">Mutlu Müşteri</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">10+</div>
                            <div className="text-sm uppercase tracking-widest opacity-70">Uzman Sanatçı</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">100%</div>
                            <div className="text-sm uppercase tracking-widest opacity-70">Hijyen Garantisi</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const services = [
    {
        name: "Kalıcı Oje",
        description: "Uzun ömürlü ve parlak görünüm",
        image: "/images/gallery/WhatsApp Image 2026-01-21 at 23.12.21.jpeg",
        link: "/hizmetler#kalici-oje"
    },
    {
        name: "Nail Art Design",
        description: "Size özel sanatsal dokunuşlar",
        image: "/images/gallery/ıroBeatuy.jpeg",
        link: "/hizmetler#nail-art"
    },
    {
        name: "Protez Tırnak",
        description: "Kusursuz form ve dayanıklılık",
        image: "/images/gallery/WhatsApp Image 2026-01-21 at 23.12.27.jpeg",
        link: "/hizmetler#protez"
    },
    {
        name: "Spa Manikür",
        description: "Dinlendirici bakım ritüeli",
        image: "/images/gallery/WhatsApp Image 2026-01-21 at 23.12.29.jpeg",
        link: "/hizmetler#spa"
    }
]
