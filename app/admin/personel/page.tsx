'use client'

import { useEffect, useState } from 'react'
import { UserPlus, Pencil, Trash2, Check, X, Loader2, Users } from 'lucide-react'

interface Staff {
    id: string
    name: string
    email: string | null
    phone: string | null
    active: boolean
}

const AVATAR_COLORS = [
    'bg-rose-100 text-rose-700',
    'bg-violet-100 text-violet-700',
    'bg-blue-100 text-blue-700',
    'bg-emerald-100 text-emerald-700',
    'bg-amber-100 text-amber-700',
    'bg-pink-100 text-pink-700',
]

const inputCls = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8D776C]/30 focus:border-[#8D776C] transition-colors"
const labelCls = "block text-xs font-medium text-gray-500 mb-1"

export default function AdminPersonelPage() {
    const [staff, setStaff] = useState<Staff[]>([])
    const [loading, setLoading] = useState(true)
    const [editingId, setEditingId] = useState<string | null>(null)
    const [editForm, setEditForm] = useState({ name: '', email: '', phone: '' })
    const [showAdd, setShowAdd] = useState(false)
    const [addForm, setAddForm] = useState({ name: '', email: '', phone: '' })
    const [saving, setSaving] = useState(false)
    const [togglingId, setTogglingId] = useState<string | null>(null)

    useEffect(() => {
        fetch('/api/staff').then(r => r.json()).then(d => {
            setStaff(d.staff || [])
            setLoading(false)
        })
    }, [])

    const startEdit = (s: Staff) => {
        setEditingId(s.id)
        setEditForm({ name: s.name, email: s.email || '', phone: s.phone || '' })
    }

    const saveEdit = async (id: string) => {
        setSaving(true)
        const res = await fetch(`/api/staff/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editForm)
        })
        if (res.ok) {
            const updated = await res.json()
            setStaff(prev => prev.map(s => s.id === id ? updated : s))
            setEditingId(null)
        }
        setSaving(false)
    }

    const toggleActive = async (id: string, active: boolean) => {
        setTogglingId(id)
        const res = await fetch(`/api/staff/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ active: !active })
        })
        if (res.ok) {
            const updated = await res.json()
            setStaff(prev => prev.map(s => s.id === id ? updated : s))
        }
        setTogglingId(null)
    }

    const deleteStaff = async (id: string) => {
        if (!confirm('Bu personeli silmek istediğinize emin misiniz?')) return
        const res = await fetch(`/api/staff/${id}`, { method: 'DELETE' })
        if (res.ok) setStaff(prev => prev.filter(s => s.id !== id))
    }

    const addStaff = async () => {
        if (!addForm.name.trim()) return
        setSaving(true)
        const res = await fetch('/api/staff', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addForm)
        })
        if (res.ok) {
            const data = await res.json()
            setStaff(prev => [...prev, data])
            setAddForm({ name: '', email: '', phone: '' })
            setShowAdd(false)
        }
        setSaving(false)
    }

    const avatarColor = (name: string) =>
        AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length]

    return (
        <div className="space-y-5">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Personel Yönetimi</h1>
                    <p className="text-sm text-gray-500 mt-0.5">{staff.length} personel</p>
                </div>
                <button
                    onClick={() => setShowAdd(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#8D776C] text-white rounded-lg hover:bg-[#7a6760] text-sm font-medium transition-colors cursor-pointer"
                >
                    <UserPlus className="w-4 h-4" /> Personel Ekle
                </button>
            </div>

            {showAdd && (
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                    <h2 className="font-semibold text-gray-900 mb-4">Yeni Personel</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className={labelCls}>Ad Soyad *</label>
                            <input type="text" value={addForm.name}
                                onChange={e => setAddForm(p => ({ ...p, name: e.target.value }))}
                                className={inputCls} placeholder="Kübra Hanım" />
                        </div>
                        <div>
                            <label className={labelCls}>E-posta</label>
                            <input type="email" value={addForm.email}
                                onChange={e => setAddForm(p => ({ ...p, email: e.target.value }))}
                                className={inputCls} />
                        </div>
                        <div>
                            <label className={labelCls}>Telefon</label>
                            <input type="tel" value={addForm.phone}
                                onChange={e => setAddForm(p => ({ ...p, phone: e.target.value }))}
                                className={inputCls} />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={addStaff}
                            disabled={!addForm.name.trim() || saving}
                            className="flex items-center gap-2 px-4 py-2 bg-[#8D776C] text-white rounded-lg text-sm font-medium disabled:opacity-50 cursor-pointer hover:bg-[#7a6760] transition-colors"
                        >
                            {saving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                            {saving ? 'Kaydediliyor...' : 'Kaydet'}
                        </button>
                        <button
                            onClick={() => setShowAdd(false)}
                            className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                            İptal
                        </button>
                    </div>
                </div>
            )}

            {loading ? (
                <div className="space-y-3">
                    {[1, 2].map(i => (
                        <div key={i} className="bg-white rounded-xl border border-gray-100 h-20 animate-pulse" />
                    ))}
                </div>
            ) : staff.length === 0 ? (
                <div className="text-center py-16 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
                    <Users className="w-8 h-8 mx-auto mb-2 opacity-30" />
                    <p className="text-sm">Henüz personel eklenmemiş.</p>
                </div>
            ) : (
                <div className="space-y-2">
                    {staff.map(s => (
                        <div
                            key={s.id}
                            className={`bg-white rounded-xl border border-gray-100 shadow-sm transition-opacity ${!s.active ? 'opacity-55' : ''}`}
                        >
                            <div className="flex items-center gap-4 px-5 py-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${avatarColor(s.name)}`}>
                                    {s.name.charAt(0).toUpperCase()}
                                </div>

                                {editingId === s.id ? (
                                    <div className="flex gap-3 flex-1 items-end flex-wrap">
                                        <div className="min-w-[140px]">
                                            <label className={labelCls}>Ad Soyad</label>
                                            <input value={editForm.name}
                                                onChange={e => setEditForm(p => ({ ...p, name: e.target.value }))}
                                                className={inputCls} />
                                        </div>
                                        <div className="min-w-[170px]">
                                            <label className={labelCls}>E-posta</label>
                                            <input value={editForm.email} placeholder="E-posta"
                                                onChange={e => setEditForm(p => ({ ...p, email: e.target.value }))}
                                                className={inputCls} />
                                        </div>
                                        <div className="min-w-[140px]">
                                            <label className={labelCls}>Telefon</label>
                                            <input value={editForm.phone} placeholder="Telefon"
                                                onChange={e => setEditForm(p => ({ ...p, phone: e.target.value }))}
                                                className={inputCls} />
                                        </div>
                                        <div className="flex gap-2 shrink-0 pb-0.5">
                                            <button
                                                onClick={() => saveEdit(s.id)}
                                                disabled={saving}
                                                className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer"
                                                aria-label="Kaydet"
                                            >
                                                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                                            </button>
                                            <button
                                                onClick={() => setEditingId(null)}
                                                className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                                                aria-label="İptal"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-gray-900 text-sm">{s.name}</p>
                                            <p className="text-xs text-gray-400 mt-0.5">
                                                {[s.email, s.phone].filter(Boolean).join(' · ') || 'İletişim bilgisi yok'}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 shrink-0">
                                            <button
                                                onClick={() => toggleActive(s.id, s.active)}
                                                disabled={togglingId === s.id}
                                                className={`text-xs px-2.5 py-1 rounded-full font-medium border transition-colors cursor-pointer ${
                                                    s.active
                                                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                                                        : 'bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100'
                                                }`}
                                            >
                                                {togglingId === s.id
                                                    ? <Loader2 className="w-3 h-3 animate-spin inline" />
                                                    : s.active ? 'Aktif' : 'Pasif'
                                                }
                                            </button>
                                            <button
                                                onClick={() => startEdit(s)}
                                                className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                                                aria-label="Düzenle"
                                            >
                                                <Pencil className="w-3.5 h-3.5" />
                                            </button>
                                            <button
                                                onClick={() => deleteStaff(s.id)}
                                                className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                                aria-label="Sil"
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
