import { NextResponse } from 'next/server'
import { supabaseAdmin as supabase, createSupabaseServer } from '@/lib/supabase-server'



async function getSession() {
    const sb = await createSupabaseServer()
    const { data: { session } } = await sb.auth.getSession()
    return session
}

export async function GET() {
    const { data, error } = await supabase
        .from('staff')
        .select('*')
        .order('name', { ascending: true })

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json({ staff: data })
}

export async function POST(request: Request) {
    const session = await getSession()
    if (!session) return NextResponse.json({ error: 'Yetkisiz' }, { status: 401 })

    const body = await request.json()
    const { name, email, phone } = body

    if (!name?.trim()) return NextResponse.json({ error: 'İsim gerekli' }, { status: 400 })

    const { data, error } = await supabase
        .from('staff')
        .insert({ id: crypto.randomUUID(), name, email: email || null, phone: phone || null, active: true, updatedAt: new Date().toISOString() })
        .select()
        .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json(data, { status: 201 })
}
