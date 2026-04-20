import { supabaseAdmin } from '@/lib/supabase-server'

export const dynamic = 'force-dynamic'

const STATIC_CONTENT = `IRO beautyzone olarak kişisel verilerinizin güvenliği bizim için önemlidir. 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında kişisel verilerinizin işlenmesine ilişkin bilgilendirme yapmak isteriz.

**Veri Sorumlusu:** IRO beautyzone

**İşlenen Kişisel Veriler:** Ad, soyad — Telefon numarası — E-posta adresi — Randevu bilgileri

**Verilerin İşlenme Amacı:** Randevu oluşturma ve yönetimi — Randevu hatırlatmaları gönderme (WhatsApp, e-posta) — Hizmet kalitesini artırma — Müşteri memnuniyeti analizi

**Veri Güvenliği:** Kişisel verileriniz güvenli sunucularda şifreli olarak saklanmaktadır. Verileriniz üçüncü şahıslarla paylaşılmamaktadır.

**Haklarınız:** Kişisel verilerinizin işlenip işlenmediğini öğrenme — İşlenmişse bilgi talep etme — İşlenme amacını öğrenme — Eksik veya yanlış işlenmişse düzeltilmesini isteme — Verilerin silinmesini veya yok edilmesini isteme

Taleplerinizi admin@irobeautyzone.com adresine iletebilirsiniz.`

export default async function KVKKPage() {
    const { data: doc } = await supabaseAdmin
        .from('legal_documents')
        .select('title, content')
        .eq('type', 'KVKK')
        .single()

    const title = doc?.title || 'KVKK Aydınlatma Metni'
    const content = doc?.content || STATIC_CONTENT

    return (
        <div className="min-h-screen bg-cream-50 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-display text-4xl md:text-5xl text-primary-800 text-center mb-12">
                    {title}
                </h1>
                <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
                    <div className="prose prose-primary max-w-none">
                        {content.split('\n\n').map((paragraph: string, i: number) => (
                            <p key={i} className="text-primary-700 leading-relaxed mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
