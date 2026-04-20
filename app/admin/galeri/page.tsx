'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Plus, Trash2, Eye, EyeOff, Loader2, ImageIcon } from 'lucide-react'

interface GalleryItem {
    id: string
    imageUrl: string
    caption: string | null
    order: number
    active: boolean
}

const inputCls = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8D776C]/30 focus:border-[#8D776C] transition-colors"
const labelCls = "block text-xs font-medium text-gray-500 mb-1"

export default function AdminGaleriPage() {
    const [items, setItems] = useState<GalleryItem[]>([])
    const [loading, setLoading] = useState(true)
    const [showAdd, setShowAdd] = useState(false)
    const [addForm, setAddForm] = useState({ imageUrl: '', caption: '' })
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [togglingId, setTogglingId] = useState<string | null>(null)

    useEffect(() => {
        fetch('/api/admin/gallery').then(r => r.json()).then(d => {
            setItems(d.items || [])
            setLoading(false)
        })
    }, [])

    const addItem = async () => {
        if (!addForm.imageUrl.trim()) return
        setError(null); setSaving(true)
        const res = await fetch('/api/gallery', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addForm)
        })
        const data = await res.json()
        if (!res.ok) { setError(data.error); setSaving(false); return }
        setItems(prev => [...prev, data])
        setAddForm({ imageUrl: '', caption: '' })
        setShowAdd(false); setSaving(false)
    }

    const toggleActive = async (id: string, active: boolean) => {
        setTogglingId(id)
        const res = await fetch(`/api/gallery/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ active: !active })
        })
        if (res.ok) {
            const updated = await res.json()
            setItems(prev => prev.map(i => i.id === id ? updated : i))
        }
        setTogglingId(null)
    }

    const deleteItem = async (id: string) => {
        if (!confirm('Bu fotoğrafı silmek istediğinize emin misiniz?')) return
        const res = await fetch(`/api/gallery/${id}`, { method: 'DELETE' })
        if (res.ok) setItems(prev => prev.filter(i => i.id !== id))
    }

    const active = items.filter(i => i.active).length
    const hidden = items.filter(i => !i.active).length

    return (
        <div className="space-y-5">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Galeri Yönetimi</h1>
                    <p className="text-sm text-gray-500 mt-0.5">
                        {active} görünür{hidden > 0 ? `, ${hidden} gizli` : ''}
                    </p>
                </div>
                <button
                    onClick={() => { setShowAdd(true); setError(null) }}
                    className="flex items-center gap-2 px-4 py-2 bg-[#8D776C] text-white rounded-lg hover:bg-[#7a6760] text-sm font-medium transition-colors cursor-pointer"
                >
                    <Plus className="w-4 h-4" /> Fotoğraf Ekle
                </button>
            </div>

            {showAdd && (
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                    <h2 className="font-semibold text-gray-900 mb-1">Yeni Fotoğraf</h2>
                    <p className="text-xs text-gray-400 mb-4">
                        Görseli Supabase Storage&apos;a yükleyin, URL&apos;yi buraya yapıştırın.
                    </p>
                    {error && (
                        <div className="mb-4 px-3 py-2 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">{error}</div>
                    )}
                    <div className="space-y-3">
                        <div>
                            <label className={labelCls}>Görsel URL *</label>
                            <input
                                type="url"
                                value={addForm.imageUrl}
                                onChange={e => setAddForm(p => ({ ...p, imageUrl: e.target.value }))}
                                className={inputCls}
                                placeholder="https://..."
                            />
                        </div>
                        <div>
                            <label className={labelCls}>Başlık / Kategori</label>
                            <input
                                type="text"
                                value={addForm.caption}
                                onChange={e => setAddForm(p => ({ ...p, caption: e.target.value }))}
                                className={inputCls}
                                placeholder="Nail Art, Manikür..."
                            />
                        </div>
                    </div>

                    {addForm.imageUrl && (
                        <div className="mt-3 w-20 h-20 rounded-lg overflow-hidden border border-gray-200 relative">
                            <Image src={addForm.imageUrl} alt="Önizleme" fill className="object-cover" />
                        </div>
                    )}

                    <div className="flex gap-2 mt-4">
                        <button
                            onClick={addItem}
                            disabled={!addForm.imageUrl || saving}
                            className="flex items-center gap-2 px-4 py-2 bg-[#8D776C] text-white rounded-lg text-sm font-medium disabled:opacity-50 cursor-pointer hover:bg-[#7a6760] transition-colors"
                        >
                            {saving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                            {saving ? 'Kaydediliyor...' : 'Kaydet'}
                        </button>
                        <button
                            onClick={() => { setShowAdd(false); setError(null) }}
                            className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                            İptal
                        </button>
                    </div>
                </div>
            )}

            {loading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="aspect-square rounded-xl bg-gray-100 animate-pulse" />
                    ))}
                </div>
            ) : items.length === 0 ? (
                <div className="text-center py-16 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
                    <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-30" />
                    <p className="text-sm">Henüz fotoğraf eklenmemiş.</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {items.map(item => (
                        <div
                            key={item.id}
                            className={`relative group rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-opacity ${!item.active ? 'opacity-45' : ''}`}
                        >
                            <div className="relative aspect-square bg-gray-50">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.caption || 'Galeri görseli'}
                                    fill
                                    className="object-cover"
                                />
                                {!item.active && (
                                    <div className="absolute inset-0 bg-white/30 flex items-center justify-center">
                                        <EyeOff className="w-5 h-5 text-gray-500" />
                                    </div>
                                )}
                            </div>
                            {item.caption && (
                                <div className="px-3 py-2 text-xs text-gray-600 bg-white border-t border-gray-100 truncate font-medium">
                                    {item.caption}
                                </div>
                            )}
                            {/* Action overlay */}
                            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                <button
                                    onClick={() => toggleActive(item.id, item.active)}
                                    disabled={togglingId === item.id}
                                    className="p-1.5 bg-white/95 rounded-lg shadow-sm text-gray-600 hover:text-[#8D776C] transition-colors cursor-pointer"
                                    aria-label={item.active ? 'Gizle' : 'Göster'}
                                    title={item.active ? 'Gizle' : 'Göster'}
                                >
                                    {togglingId === item.id
                                        ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                        : item.active ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />
                                    }
                                </button>
                                <button
                                    onClick={() => deleteItem(item.id)}
                                    className="p-1.5 bg-white/95 rounded-lg shadow-sm text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                                    aria-label="Sil"
                                    title="Sil"
                                >
                                    <Trash2 className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
