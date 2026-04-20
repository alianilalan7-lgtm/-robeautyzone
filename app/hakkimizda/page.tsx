import { createSupabaseServer } from '@/lib/supabase-server'

export const dynamic = 'force-dynamic'

export default async function HakkimizdaPage() {
    const sb = await createSupabaseServer()
    const { data: staff } = await sb
        .from('staff')
        .select('id, name, email, phone')
        .eq('active', true)
        .order('name', { ascending: true })

    return (
        <div className="min-h-screen bg-cream-50 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-display text-4xl md:text-5xl text-primary-800 text-center mb-12">
                    Hakkımızda
                </h1>

                <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-8">
                    <div>
                        <h2 className="font-display text-2xl text-primary-800 mb-4">IRO beautyzone</h2>
                        <p className="text-primary-700 leading-relaxed">
                            IRO beautyzone, İstanbul'un kalbinde premium nail art ve tırnak bakım hizmetleri sunan
                            lider güzellik merkezlerinden biridir. 2020 yılında kurulan salonumuz, nail art'ı bir
                            sanat formuna dönüştürerek müşterilerimize benzersiz deneyimler sunmaktadır.
                        </p>
                    </div>

                    {staff && staff.length > 0 && (
                        <div>
                            <h2 className="font-display text-2xl text-primary-800 mb-6">Ekibimiz</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {staff.map((member: { id: string; name: string; phone: string | null }) => (
                                    <div key={member.id} className="flex items-center gap-4 p-4 bg-primary-50 rounded-xl">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg shrink-0">
                                            {member.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-primary-900">{member.name}</p>
                                            {member.phone && (
                                                <p className="text-sm text-primary-600">{member.phone}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div>
                        <h2 className="font-display text-2xl text-primary-800 mb-4">Hizmetlerimiz</h2>
                        <p className="text-primary-700 leading-relaxed">
                            Klasik nail art'tan premium taş işlemeli tasarımlara, kalıcı ojeden profesyonel
                            manikür-pedikür hizmetlerine kadar geniş bir yelpazede hizmet sunuyoruz.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="text-center p-6 bg-primary-50 rounded-lg">
                            <div className="text-4xl mb-3">✨</div>
                            <h3 className="font-medium text-primary-800 mb-2">Premium Kalite</h3>
                            <p className="text-sm text-primary-600">En kaliteli ürünler ve malzemeler</p>
                        </div>
                        <div className="text-center p-6 bg-primary-50 rounded-lg">
                            <div className="text-4xl mb-3">🎨</div>
                            <h3 className="font-medium text-primary-800 mb-2">Sanatsal Tasarım</h3>
                            <p className="text-sm text-primary-600">Kişiye özel nail art tasarımları</p>
                        </div>
                        <div className="text-center p-6 bg-primary-50 rounded-lg">
                            <div className="text-4xl mb-3">💖</div>
                            <h3 className="font-medium text-primary-800 mb-2">Müşteri Odaklı</h3>
                            <p className="text-sm text-primary-600">%100 müşteri memnuniyeti</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
