import { NextResponse } from 'next/server'
import { supabaseAdmin as supabase, createSupabaseServer } from '@/lib/supabase-server'



async function getSession() {
    const sb = await createSupabaseServer()
    const { data: { session } } = await sb.auth.getSession()
    return session
}

export async function GET(request: Request, props: { params: Promise<{ id: string }> }) {
    const params = await props.params
    const { id } = params

    const session = await getSession()
    if (!session) return NextResponse.json({ error: 'Yetkisiz' }, { status: 401 })

    const { data, error } = await supabase
        .from('appointments')
        .select('*, service:services(name, durationMin)')
        .eq('id', id)
        .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 404 })

    return NextResponse.json(data)
}

export async function PATCH(request: Request, props: { params: Promise<{ id: string }> }) {
    const params = await props.params
    const { id } = params

    const session = await getSession()
    if (!session) return NextResponse.json({ error: 'Yetkisiz' }, { status: 401 })

    const body = await request.json()
    const now = new Date().toISOString()
    const extra = body.status === 'CONFIRMED'
        ? { confirmedAt: now }
        : body.status === 'CANCELED'
            ? { canceledAt: now }
            : body.status === 'COMPLETED'
                ? { completedAt: now }
                : {}

    const { data, error } = await supabase
        .from('appointments')
        .update({ ...body, ...extra })
        .eq('id', id)
        .select()
        .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json(data)
}

export async function DELETE(request: Request, props: { params: Promise<{ id: string }> }) {
    const params = await props.params
    const { id } = params

    const session = await getSession()
    if (!session) return NextResponse.json({ error: 'Yetkisiz' }, { status: 401 })

    const { error } = await supabase
        .from('appointments')
        .delete()
        .eq('id', id)

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json({ success: true })
}
