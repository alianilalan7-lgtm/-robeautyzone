'use client'

import { useEffect, useState } from 'react'
import { Plus, Pencil, Trash2, Loader2, Clock, Banknote, Tag, Scissors } from 'lucide-react'

interface Category { id: string; name: string }
interface Service {
    id: string; name: string; slug: string; categoryId: string
    description: string; durationMin: number; priceMin: number
    priceMax: number | null; active: boolean
    service_categories?: { name: string }
}

const emptyForm = { name: '', slug: '', categoryId: '', description: '', durationMin: '60', priceMin: '', priceMax: '' }

const inputCls = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8D776C]/30 focus:border-[#8D776C] transition-colors"
const labelCls = "block text-xs font-medium text-gray-500 mb-1"

export default function AdminServicesPage() {
    const [services, setServices] = useState<Service[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(true)
    const [showAdd, setShowAdd] = useState(false)
    const [addForm, setAddForm] = useState(emptyForm)
    const [editingSlug, setEditingSlug] = useState<string | null>(null)
    const [editForm, setEditForm] = useState(emptyForm)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [togglingSlug, setTogglingSlug] = useState<string | null>(null)

    useEffect(() => {
        Promise.all([
            fetch('/api/admin/services').then(r => r.json()),
            fetch('/api/admin/service-categories').then(r => r.json()),
        ]).then(([sData, cData]) => {
            setServices(sData.services || [])
            setCategories(cData.categories || [])
            setLoading(false)
        })
    }, [])

    const toSlug = (name: string) =>
        name.toLowerCase().replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
            .replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

    const addService = async () => {
        setError(null); setSaving(true)
        const res = await fetch('/api/services', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addForm)
        })
        const data = await res.json()
        if (!res.ok) { setError(data.error); setSaving(false); return }
        setServices(prev => [...prev, data])
        setAddForm(emptyForm); setShowAdd(false); setSaving(false)
    }

    const startEdit = (s: Service) => {
        setEditingSlug(s.slug)
        setEditForm({
            name: s.name, slug: s.slug, categoryId: s.categoryId,
            description: s.description, durationMin: String(s.durationMin),
            priceMin: String(s.priceMin), priceMax: s.priceMax ? String(s.priceMax) : ''
        })
    }

    const saveEdit = async (slug: string) => {
        setSaving(true)
        const res = await fetch(`/api/services/${slug}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: editForm.name, description: editForm.description,
                categoryId: editForm.categoryId,
                durationMin: parseInt(editForm.durationMin),
                priceMin: parseFloat(editForm.priceMin),
                priceMax: editForm.priceMax ? parseFloat(editForm.priceMax) : null,
            })
        })
        if (res.ok) {
            const updated = await res.json()
            setServices(prev => prev.map(s => s.slug === slug ? updated : s))
            setEditingSlug(null)
        }
        setSaving(false)
    }

    const toggleActive = async (slug: string, active: boolean) => {
        setTogglingSlug(slug)
        const res = await fetch(`/api/services/${slug}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ active: !active })
        })
        if (res.ok) {
            const updated = await res.json()
            setServices(prev => prev.map(s => s.slug === slug ? updated : s))
        }
        setTogglingSlug(null)
    }

    const deleteService = async (slug: string) => {
        if (!confirm('Bu hizmeti silmek istediğinize emin misiniz?')) return
        const res = await fetch(`/api/services/${slug}`, { method: 'DELETE' })
        if (res.ok) setServices(prev => prev.filter(s => s.slug !== slug))
    }

    const FormFields = ({ form, setForm }: { form: typeof emptyForm; setForm: (f: typeof emptyForm) => void }) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className={labelCls}>Hizmet Adı *</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value, slug: toSlug(e.target.value) })}
                    className={inputCls} placeholder="Kalıcı Oje" />
            </div>
            <div>
                <label className={labelCls}>Slug *</label>
                <input value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })}
                    className={`${inputCls} font-mono`} placeholder="kalici-oje" />
            </div>
            <div>
                <label className={labelCls}>Kategori *</label>
                <select value={form.categoryId} onChange={e => setForm({ ...form, categoryId: e.target.value })}
                    className={inputCls}>
                    <option value="">Seçin...</option>
                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
            </div>
            <div>
                <label className={labelCls}>Süre (dk) *</label>
                <input type="number" value={form.durationMin} onChange={e => setForm({ ...form, durationMin: e.target.value })}
                    className={inputCls} />
            </div>
            <div>
                <label className={labelCls}>Min Fiyat (₺) *</label>
                <input type="number" value={form.priceMin} onChange={e => setForm({ ...form, priceMin: e.target.value })}
                    className={inputCls} placeholder="350" />
            </div>
            <div>
                <label className={labelCls}>Max Fiyat (₺)</label>
                <input type="number" value={form.priceMax} onChange={e => setForm({ ...form, priceMax: e.target.value })}
                    className={inputCls} placeholder="Opsiyonel" />
            </div>
            <div className="md:col-span-2">
                <label className={labelCls}>Açıklama</label>
                <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}
                    className={inputCls} rows={2} />
            </div>
        </div>
    )

    return (
        <div className="space-y-5">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Hizmet Yönetimi</h1>
                    <p className="text-sm text-gray-500 mt-0.5">{services.length} hizmet</p>
                </div>
                <button
                    onClick={() => { setShowAdd(true); setError(null) }}
                    className="flex items-center gap-2 px-4 py-2 bg-[#8D776C] text-white rounded-lg hover:bg-[#7a6760] text-sm font-medium transition-colors cursor-pointer"
                >
                    <Plus className="w-4 h-4" /> Yeni Hizmet
                </button>
            </div>

            {showAdd && (
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                    <h2 className="font-semibold text-gray-900 mb-4">Yeni Hizmet Ekle</h2>
                    {error && (
                        <div className="mb-4 px-3 py-2 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">{error}</div>
                    )}
                    <FormFields form={addForm} setForm={setAddForm} />
                    <div className="flex gap-2 mt-5">
                        <button
                            onClick={addService}
                            disabled={saving || !addForm.name || !addForm.categoryId || !addForm.priceMin}
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
                <div className="space-y-3">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="bg-white rounded-xl border border-gray-100 h-20 animate-pulse" />
                    ))}
                </div>
            ) : (
                <div className="space-y-2">
                    {services.map(service => (
                        <div
                            key={service.id}
                            className={`bg-white rounded-xl border border-gray-100 shadow-sm transition-opacity ${!service.active ? 'opacity-55' : ''}`}
                        >
                            {editingSlug === service.slug ? (
                                <div className="p-5">
                                    <FormFields form={editForm} setForm={setEditForm} />
                                    <div className="flex gap-2 mt-4">
                                        <button
                                            onClick={() => saveEdit(service.slug)}
                                            disabled={saving}
                                            className="flex items-center gap-2 px-4 py-2 bg-[#8D776C] text-white rounded-lg text-sm font-medium disabled:opacity-50 cursor-pointer hover:bg-[#7a6760] transition-colors"
                                        >
                                            {saving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                                            {saving ? 'Kaydediliyor...' : 'Kaydet'}
                                        </button>
                                        <button
                                            onClick={() => setEditingSlug(null)}
                                            className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 cursor-pointer transition-colors"
                                        >
                                            İptal
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center gap-4 px-5 py-4">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h3 className="font-semibold text-gray-900 text-sm">{service.name}</h3>
                                            {service.service_categories?.name && (
                                                <span className="inline-flex items-center gap-1 text-xs text-gray-400 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-full">
                                                    <Tag className="w-3 h-3" />
                                                    {service.service_categories.name}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-3 mt-1">
                                            <span className="flex items-center gap-1 text-xs text-gray-400">
                                                <Clock className="w-3 h-3" />
                                                {service.durationMin} dk
                                            </span>
                                            <span className="flex items-center gap-1 text-xs text-gray-400">
                                                <Banknote className="w-3 h-3" />
                                                ₺{service.priceMin}{service.priceMax ? `–${service.priceMax}` : ''}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <button
                                            onClick={() => toggleActive(service.slug, service.active)}
                                            disabled={togglingSlug === service.slug}
                                            className={`text-xs px-2.5 py-1 rounded-full font-medium border transition-colors cursor-pointer ${
                                                service.active
                                                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                                                    : 'bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100'
                                            }`}
                                        >
                                            {togglingSlug === service.slug ? (
                                                <Loader2 className="w-3 h-3 animate-spin inline" />
                                            ) : service.active ? 'Aktif' : 'Pasif'}
                                        </button>
                                        <button
                                            onClick={() => startEdit(service)}
                                            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                                            aria-label="Düzenle"
                                        >
                                            <Pencil className="w-3.5 h-3.5" />
                                        </button>
                                        <button
                                            onClick={() => deleteService(service.slug)}
                                            className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                            aria-label="Sil"
                                        >
                                            <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    {services.length === 0 && (
                        <div className="text-center py-16 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
                            <Scissors className="w-8 h-8 mx-auto mb-2 opacity-30" />
                            <p className="text-sm">Henüz hizmet eklenmemiş.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

