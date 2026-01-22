import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen bg-cream-50">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-cream-100 to-primary-50" />

                {/* Logo */}
                <div className="relative z-10 text-center px-4">
                    <div className="mb-8">
                        <Image
                            src="/images/logo/iro-logo.png"
                            alt="IRO beautyzone"
                            width={400}
                            height={200}
                            className="mx-auto"
                            priority
                        />
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl text-primary-800 mb-6 leading-tight">
                        Premium Nail Art Experience
                    </h1>

                    <p className="text-lg md:text-xl text-primary-600 mb-8 max-w-2xl mx-auto">
                        İstanbul'un kalbi  ndeki özel nail art studyomuzda, sanatı parmaklarınıza taşıyoruz.
                    </p>

                    <div className="flex gap-4 justify-center">
                        <a
                            href="/randevu"
                            className="bg-primary-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
                        >
                            Randevu Al
                        </a>
                        <a
                            href="/hizmetler"
                            className="bg-white text-primary-700 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 transition-colors border border-primary-200"
                        >
                            Hizmetlerimiz
                        </a>
                    </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent" />
            </section>

            {/* Quick Info */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                        <div className="text-4xl mb-4">💅</div>
                        <h3 className="font-display text-xl text-primary-800 mb-2">Premium Hizmet</h3>
                        <p className="text-primary-600">Uzman ekibimizle en kaliteli nail art deneyimi</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                        <div className="text-4xl mb-4">⏰</div>
                        <h3 className="font-display text-xl text-primary-800 mb-2">Online Randevu</h3>
                        <p className="text-primary-600">7/24 online randevu sistemi ile kolayca rezervasyon</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                        <div className="text-4xl mb-4">✨</div>
                        <h3 className="font-display text-xl text-primary-800 mb-2">Hijyenik Ortam</h3>
                        <p className="text-primary-600">Steril ve konforlu bir ortamda hizmet</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
