export default function KVKKPage() {
    return (
        <div className="min-h-screen bg-cream-50 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-display text-4xl md:text-5xl text-primary-800 text-center mb-12">
                    KVKK Aydınlatma Metni
                </h1>

                <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 prose prose-primary max-w-none">
                    <p className="text-primary-700 leading-relaxed mb-6">
                        IRO beautyzone olarak kişisel verilerinizin güvenliği bizim için önemlidir. 6698 sayılı
                        Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında kişisel verilerinizin işlenmesine
                        ilişkin bilgilendirme yapmak isteriz.
                    </p>

                    <h2 className="font-display text-2xl text-primary-800 mt-8 mb-4">
                        Veri Sorumlusu
                    </h2>
                    <p className="text-primary-700 leading-relaxed">IRO beautyzone</p>

                    <h2 className="font-display text-2xl text-primary-800 mt-8 mb-4">
                        İşlenen Kişisel Veriler
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-primary-700">
                        <li>Ad, soyad</li>
                        <li>Telefon numarası</li>
                        <li>E-posta adresi</li>
                        <li>Randevu bilgileri</li>
                    </ul>

                    <h2 className="font-display text-2xl text-primary-800 mt-8 mb-4">
                        Verilerin İşlenme Amacı
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-primary-700">
                        <li>Randevu oluşturma ve yönetimi</li>
                        <li>Randevu hatırlatmaları gönderme (WhatsApp, e-posta)</li>
                        <li>Hizmet kalitesini artırma</li>
                        <li>Müşteri memnuniyeti analizi</li>
                    </ul>

                    <h2 className="font-display text-2xl text-primary-800 mt-8 mb-4">
                        Veri Güvenliği
                    </h2>
                    <p className="text-primary-700 leading-relaxed">
                        Kişisel verileriniz güvenli sunucularda şifreli olarak saklanmaktadır. Verileriniz üçüncü
                        şahıslarla paylaşılmamaktadır.
                    </p>

                    <h2 className="font-display text-2xl text-primary-800 mt-8 mb-4">
                        Haklarınız
                    </h2>
                    <p className="text-primary-700 leading-relaxed">
                        KVKK kapsamında aşağıdaki haklara sahipsiniz:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-primary-700">
                        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                        <li>İşlenmişse bilgi talep etme</li>
                        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                        <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                        <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                        <li>Verilerin silinmesini veya yok edilmesini isteme</li>
                    </ul>

                    <div className="mt-12 p-6 bg-primary-50 rounded-lg">
                        <p className="text-sm text-primary-700">
                            Kişisel verilerinize ilişkin taleplerinizi{" "}
                            <strong>admin@irobeautyzone.com</strong> adresine iletebilirsiniz.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
