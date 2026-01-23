import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: Request, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const { id } = params
    const { data, error } = await supabase
        .from('appointments')
        .select(`
            *,
            service:services(name, durationMin)
        `)
        .eq('id', id)
        .single()

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 404 })
    }

    return NextResponse.json(data)
}

export async function PATCH(request: Request, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const { id } = params
    const body = await request.json()

    // Status update logic with timestamps
    const updateData: any = { ...body }

    if (body.status === 'CONFIRMED') {
        updateData.confirmedAt = new Date().toISOString()
    } else if (body.status === 'CANCELED') {
        updateData.canceledAt = new Date().toISOString()
    }

    const { data, error } = await supabase
        .from('appointments')
        .update(updateData)
        .eq('id', id)
        .select()
        .single()

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
}

export async function DELETE(request: Request, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const { id } = params
    const { error } = await supabase
        .from('appointments')
        .delete()
        .eq('id', id)

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
}
