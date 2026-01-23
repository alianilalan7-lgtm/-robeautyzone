import { supabase } from "@/lib/supabase"
import AppointmentWizard from "./AppointmentWizard"

export const dynamic = 'force-dynamic'

export default async function RandevuPage() {
    // Fetch services from DB
    const { data: services, error } = await supabase
        .from('services')
        .select('*')
        .eq('active', true)
        .order('order', { ascending: true })

    if (error) {
        console.error('Service fetch error:', error)
    }

    return (
        <div className="min-h-screen bg-cream-50 py-16 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-display text-4xl md:text-5xl text-primary-800 text-center mb-12">
                    Randevu Oluştur
                </h1>

                {/* Wizard Component */}
                <AppointmentWizard services={services || []} />
            </div>
        </div>
    )
}
