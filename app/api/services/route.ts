import { NextResponse } from 'next/server'
import { supabaseAdmin as supabase, createSupabaseServer } from '@/lib/supabase-server'



async function getSession() {
    const sb = await createSupabaseServer()
    const { data: { session } } = await sb.auth.getSession()
    return session
}

export async function GET() {
    try {
        const { data: categories, error } = await supabase
            .from('service_categories')
            .select('*, services (*)')
            .order('order', { ascending: true })

        if (error) throw error

        const filtered = categories
            ?.map(cat => ({
                ...cat,
                services: (cat.services as any[])
                    .filter((s: any) => s.active)
                    .sort((a: any, b: any) => a.order - b.order)
            }))
            .filter(cat => cat.services.length > 0) ?? []

        return NextResponse.json({ categories: filtered })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 })
    }
}

export async function POST(request: Request) {
    const session = await getSession()
    if (!session) return NextResponse.json({ error: 'Yetkisiz' }, { status: 401 })

    const body = await request.json()
    const { name, slug, categoryId, description, durationMin, priceMin, priceMax } = body

    if (!name || !slug || !categoryId || !durationMin || !priceMin) {
        return NextResponse.json({ error: 'Zorunlu alanlar eksik' }, { status: 400 })
    }

    const { data, error } = await supabase
        .from('services')
        .insert({
            id: crypto.randomUUID(),
            name,
            slug,
            categoryId,
            description: description || '',
            durationMin: parseInt(durationMin),
            priceMin: parseFloat(priceMin),
            priceMax: priceMax ? parseFloat(priceMax) : null,
            active: true,
            order: 0,
            updatedAt: new Date().toISOString(),
        })
        .select()
        .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json(data, { status: 201 })
}
