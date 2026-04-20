import { NextResponse } from 'next/server'
import { supabaseAdmin as supabase, createSupabaseServer } from '@/lib/supabase-server'



async function getSession() {
    const sb = await createSupabaseServer()
    const { data: { session } } = await sb.auth.getSession()
    return session
}

export async function GET() {
    const { data: closures, error } = await supabase
        .from('closures')
        .select('*')
        .order('date', { ascending: true })

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json({ closures })
}

export async function POST(request: Request) {
    const session = await getSession()
    if (!session) return NextResponse.json({ error: 'Yetkisiz' }, { status: 401 })

    const { date, note } = await request.json()
    if (!date) return NextResponse.json({ error: 'Tarih gerekli' }, { status: 400 })

    const { data, error } = await supabase
        .from('closures')
        .insert({ id: crypto.randomUUID(), date, note: note || null, updatedAt: new Date().toISOString() })
        .select()
        .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json(data, { status: 201 })
}
