import { NextResponse } from 'next/server'
import { supabaseAdmin as supabase, createSupabaseServer } from '@/lib/supabase-server'



const DAY_ORDER = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']

export async function GET() {
    const { data: hours, error } = await supabase
        .from('business_hours')
        .select('*')

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    const sorted = hours?.sort((a, b) => DAY_ORDER.indexOf(a.dayOfWeek) - DAY_ORDER.indexOf(b.dayOfWeek))

    return NextResponse.json({ hours: sorted })
}

export async function PATCH(request: Request) {
    const sb = await createSupabaseServer()
    const { data: { session } } = await sb.auth.getSession()
    if (!session) return NextResponse.json({ error: 'Yetkisiz' }, { status: 401 })

    const body = await request.json()
    const { id, isOpen, openTime, closeTime } = body

    const { data, error } = await supabase
        .from('business_hours')
        .update({ isOpen, openTime, closeTime })
        .eq('id', id)
        .select()
        .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json(data)
}
