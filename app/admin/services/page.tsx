import { supabase } from '@/lib/supabase'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const dynamic = 'force-dynamic'

export default async function AdminServicesPage() {
    const { data: services } = await supabase
        .from('services')
        .select('*, service_categories(name)')
        .order('order', { ascending: true })

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Hizmet Yönetimi</h1>
                <button className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-not-allowed opacity-50">
                    Yeni Hizmet Ekle (Yakında)
                </button>
            </div>

            <div className="grid gap-4">
                {services?.map((service) => (
                    <Card key={service.id}>
                        <CardContent className="flex items-center justify-between p-6">
                            <div>
                                <h3 className="font-bold text-gray-900">{service.name}</h3>
                                <p className="text-sm text-gray-500">{service.service_categories?.name} • {service.durationMin} dk</p>
                            </div>

                            <div className="text-right">
                                <div className="font-medium text-gray-900">₺{service.priceMin}</div>
                                <div className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${service.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                    {service.active ? 'Aktif' : 'Pasif'}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
