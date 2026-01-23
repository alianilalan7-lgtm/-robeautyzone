import { supabase } from '@/lib/supabase'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const dynamic = 'force-dynamic'

export default async function AdminSettingsPage() {
    const { data: hours } = await supabase
        .from('business_hours')
        .select('*')
        .order('id') // Order roughly by creation? Better order by day index logic if possible.
    // The seed created them MONDAY..SUNDAY.

    // Custom sort order
    const dayOrder = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']
    const sortedHours = hours?.sort((a, b) => dayOrder.indexOf(a.dayOfWeek) - dayOrder.indexOf(b.dayOfWeek))

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Ayarlar</h1>

            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Çalışma Saatleri</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {sortedHours?.map((day) => (
                                <div key={day.id} className="flex items-center justify-between p-3 border rounded-lg">
                                    <div className="font-medium w-32">{day.dayOfWeek}</div>
                                    <div className="flex items-center gap-4">
                                        <div className={`px-2 py-1 rounded text-xs ${day.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {day.isOpen ? 'Açık' : 'Kapalı'}
                                        </div>
                                        <div className="text-sm font-mono">
                                            {day.openTime} - {day.closeTime}
                                        </div>
                                    </div>
                                    <button className="text-sm text-primary-600 hover:text-primary-800">
                                        Düzenle
                                    </button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
