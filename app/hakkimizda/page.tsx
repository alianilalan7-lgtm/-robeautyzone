export default function HakkimizdaPage() {
    return (
        <div className="min-h-screen bg-cream-50 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-display text-4xl md:text-5xl text-primary-800 text-center mb-12">
                    Hakkımızda
                </h1>

                <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-8">
                    <div>
                        <h2 className="font-display text-2xl text-primary-800 mb-4">
                            IRO beautyzone
                        </h2>
                        <p className="text-primary-700 leading-relaxed">
                            IRO beautyzone, İstanbul'un kalbinde premium nail art ve tırnak bakım hizmetleri sunan
                            lider güzellik merkezlerinden biridir. 2020 yılında kurulan salonumuz, nail art'ı bir
                            sanat formuna dönüştürerek müşterilerimize benzersiz deneyimler sunmaktadır.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-display text-2xl text-primary-800 mb-4">
                            Ekibimiz
                        </h2>
                        <p className="text-primary-700 leading-relaxed">
                            Uzman nail art teknisyenlerimiz, sektörde yıllarca deneyim kazanmış ve sürekli
                            kendilerini geliştiren profesyonellerden oluşmaktadır. Hijyen, kalite ve müşteri
                            memnuniyeti önceliğimizdir.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-display text-2xl text-primary-800 mb-4">
                            Hizmetlerimiz
                        </h2>
                        <p className="text-primary-700 leading-relaxed">
                            Klasik nail art'tan premium taş işlemeli tasarımlara, kalıcı ojeden profesyonel
                            manikür-pedikür hizmetlerine kadar geniş bir yelpazede hizmet sunuyoruz. Her müşterimiz
                            için özel tasarımlar oluşturuyor, trend takipçisi ve yenilikçi yaklaşımımızla sektörde
                            fark yaratıyoruz.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="text-center p-6 bg-primary-50 rounded-lg">
                            <div className="text-4xl mb-3">✨</div>
                            <h3 className="font-medium text-primary-800 mb-2">Premium Kalite</h3>
                            <p className="text-sm text-primary-600">
                                En kaliteli ürünler ve malzemeler
                            </p>
                        </div>
                        <div className="text-center p-6 bg-primary-50 rounded-lg">
                            <div className="text-4xl mb-3">🎨</div>
                            <h3 className="font-medium text-primary-800 mb-2">Sanatsal Tasarım</h3>
                            <p className="text-sm text-primary-600">
                                Kişiye özel nail art tasarımları
                            </p>
                        </div>
                        <div className="text-center p-6 bg-primary-50 rounded-lg">
                            <div className="text-4xl mb-3">💖</div>
                            <h3 className="font-medium text-primary-800 mb-2">Müşteri Odaklı</h3>
                            <p className="text-sm text-primary-600">
                                %100 müşteri memnuniyeti
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
