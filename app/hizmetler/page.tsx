export default function HizmetlerPage() {
    return (
        <div className="min-h-screen bg-cream-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="font-display text-4xl md:text-5xl text-primary-800 text-center mb-12">
                    Hizmetlerimiz
                </h1>

                <p className="text-center text-primary-600 mb-16 max-w-2xl mx-auto">
                    IRO beautyzone'da nail art'ın her tonunu deneyimleyin. Premium hizmetlerimiz ile tırnaklarınız bir sanat eserine dönüşsün.
                </p>

                {/* Mock data for now - will fetch from API */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockServices.map((service) => (
                        <a
                            key={service.slug}
                            href={`/hizmetler/${service.category}/${service.slug}`}
                            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all"
                        >
                            <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-50 relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-primary-900/0 transition-colors" />
                            </div>
                            <div className="p-6">
                                <h3 className="font-display text-xl text-primary-800 mb-2">
                                    {service.name}
                                </h3>
                                <p className="text-primary-600 text-sm mb-4 line-clamp-2">
                                    {service.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="text-sm text-primary-500">
                                        ⏱️ {service.duration} dk
                                    </div>
                                    <div className="font-medium text-primary-700">
                                        ₺{service.priceMin}{service.priceMax && `-${service.priceMax}`}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="/randevu"
                        className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
                    >
                        Hemen Randevu Al
                    </a>
                </div>
            </div>
        </div>
    )
}

const mockServices = [
    {
        slug: 'klasik-nail-art',
        category: 'nail-art',
        name: 'Klasik Nail Art',
        description: 'Özel tasarım tırnak süslemesi. Sanatsal desenler ve renklerle tırnaklarınızı güzelleştirin.',
        duration: 60,
        priceMin: 350,
        priceMax: 500,
    },
    {
        slug: 'premium-nail-art',
        category: 'nail-art',
        name: 'Premium Nail Art',
        description: 'Kristal, taş ve özel detaylarla lüks tırnak tasarımı.',
        duration: 90,
        priceMin: 600,
        priceMax: 800,
    },
    {
        slug: 'kalici-oje',
        category: 'kalici-oje',
        name: 'Kalıcı Oje',
        description: 'Uzun ömürlü kalıcı oje uygulaması. 2-3 hafta bozulmadan kalır.',
        duration: 45,
        priceMin: 250,
        priceMax: null,
    },
    {
        slug: 'kalici-oje-tasarim',
        category: 'kalici-oje',
        name: 'Kalıcı Oje + Tasarım',
        description: 'Kalıcı oje üzerine minimal tasarım.',
        duration: 60,
        priceMin: 350,
        priceMax: 450,
    },
    {
        slug: 'klasik-manikur',
        category: 'manikur-pedikur',
        name: 'Klasik Manikür',
        description: 'Tırnak bakımı, şekillendirme ve cilalama.',
        duration: 30,
        priceMin: 150,
        priceMax: null,
    },
    {
        slug: 'fransiz-manikur',
        category: 'manikur-pedikur',
        name: 'Fransız Manikür',
        description: 'Klasik beyaz uçlu şık tırnak görünümü.',
        duration: 45,
        priceMin: 200,
        priceMax: null,
    },
]
