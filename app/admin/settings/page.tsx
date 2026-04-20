'use client'

import { useEffect, useState } from 'react'
import { Pencil, Trash2, Plus, Loader2, Clock, CalendarX } from 'lucide-react'

const DAY_LABELS: Record<string, string> = {
    MONDAY: 'Pazartesi', TUESDAY: 'Salı', WEDNESDAY: 'Çarşamba',
    THURSDAY: 'Perşembe', FRIDAY: 'Cuma', SATURDAY: 'Cumartesi', SUNDAY: 'Pazar'
}

const DAY_ORDER = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']

interface BusinessHour {
    id: string; dayOfWeek: string; isOpen: boolean; openTime: string; closeTime: string
}
interface Closure {
    id: string; date: string; note: string | null
}

const inputCls = "border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8D776C]/30 focus:border-[#8D776C] transition-colors"
const labelCls = "block text-xs font-medium text-gray-500 mb-1"

export default function AdminSettingsPage() {
    const [hours, setHours] = useState<BusinessHour[]>([])
    const [closures, setClosures] = useState<Closure[]>([])
    const [editingId, setEditingId] = useState<string | null>(null)
    const [editForm, setEditForm] = useState({ isOpen: true, openTime: '', closeTime: '' })
    const [savingId, setSavingId] = useState<string | null>(null)
    const [newClosure, setNewClosure] = useState({ date: '', note: '' })
    const [addingClosure, setAddingClosure] = useState(false)
    const [deletingId, setDeletingId] = useState<string | null>(null)

    useEffect(() => {
        fetch('/api/business-hours').then(r => r.json()).then(d => setHours(d.hours || []))
        fetch('/api/closures').then(r => r.json()).then(d => setClosures(d.closures || []))
    }, [])

    const sortedHours = [...hours].sort((a, b) =>
        DAY_ORDER.indexOf(a.dayOfWeek) - DAY_ORDER.indexOf(b.dayOfWeek)
    )

    const startEdit = (h: BusinessHour) => {
        setEditingId(h.id)
        setEditForm({ isOpen: h.isOpen, openTime: h.openTime, closeTime: h.closeTime })
    }

    const saveEdit = async (id: string) => {
        setSavingId(id)
        const res = await fetch('/api/business-hours', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, ...editForm })
        })
        if (res.ok) {
            const updated = await res.json()
            setHours(prev => prev.map(h => h.id === id ? updated : h))
            setEditingId(null)
        }
        setSavingId(null)
    }

    const addClosure = async () => {
        if (!newClosure.date) return
        setAddingClosure(true)
        const res = await fetch('/api/closures', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newClosure)
        })
        if (res.ok) {
            const data = await res.json()
            setClosures(prev => [...prev, data].sort((a, b) => a.date.localeCompare(b.date)))
            setNewClosure({ date: '', note: '' })
        }
        setAddingClosure(false)
    }

    const deleteClosure = async (id: string) => {
        setDeletingId(id)
        const res = await fetch(`/api/closures/${id}`, { method: 'DELETE' })
        if (res.ok) setClosures(prev => prev.filter(c => c.id !== id))
        setDeletingId(null)
    }

    return (
        <div className="space-y-6 max-w-2xl">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Ayarlar</h1>
                <p className="text-sm text-gray-500 mt-0.5">Çalışma saatlerini ve tatil günlerini yönet</p>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#8D776C]" />
                    <h2 className="font-semibold text-gray-900 text-sm">Çalışma Saatleri</h2>
                </div>
                <div className="divide-y divide-gray-50">
                    {sortedHours.map(day => (
                        <div key={day.id} className="px-5 py-3">
                            {editingId === day.id ? (
                                <div className="flex items-center gap-3 flex-wrap">
                                    <span className="font-medium text-sm w-24 shrink-0 text-gray-700">{DAY_LABELS[day.dayOfWeek]}</span>
                                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={editForm.isOpen}
                                            onChange={e => setEditForm(f => ({ ...f, isOpen: e.target.checked }))}
                                            className="w-4 h-4 accent-[#8D776C] cursor-pointer"
                                        />
                                        Açık
                                    </label>
                                    {editForm.isOpen && (
                                        <div className="flex items-center gap-2">
                                            <input type="time" value={editForm.openTime}
                                                onChange={e => setEditForm(f => ({ ...f, openTime: e.target.value }))}
                                                className={`${inputCls} w-28`} />
                                            <span className="text-gray-400 text-sm">–</span>
                                            <input type="time" value={editForm.closeTime}
                                                onChange={e => setEditForm(f => ({ ...f, closeTime: e.target.value }))}
                                                className={`${inputCls} w-28`} />
                                        </div>
                                    )}
                                    <div className="flex gap-2 ml-auto">
                                        <button
                                            onClick={() => saveEdit(day.id)}
                                            disabled={savingId === day.id}
                                            className="flex items-center gap-1.5 text-sm px-3 py-1.5 bg-[#8D776C] text-white rounded-lg hover:bg-[#7a6760] disabled:opacity-50 cursor-pointer transition-colors"
                                        >
                                            {savingId === day.id && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                                            {savingId === day.id ? 'Kaydediliyor...' : 'Kaydet'}
                                        </button>
                                        <button
                                            onClick={() => setEditingId(null)}
                                            className="text-sm px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                                        >
                                            İptal
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center gap-3">
                                    <span className="font-medium text-sm w-24 shrink-0 text-gray-700">{DAY_LABELS[day.dayOfWeek]}</span>
                                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${
                                        day.isOpen
                                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                            : 'bg-red-50 text-red-600 border-red-200'
                                    }`}>
                                        {day.isOpen ? 'Açık' : 'Kapalı'}
                                    </span>
                                    {day.isOpen && (
                                        <span className="text-sm text-gray-600 tabular-nums">
                                            {day.openTime} – {day.closeTime}
                                        </span>
                                    )}
                                    <button
                                        onClick={() => startEdit(day)}
                                        className="ml-auto p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                                        aria-label="Düzenle"
                                    >
                                        <Pencil className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                    {sortedHours.length === 0 && (
                        <div className="px-5 py-8 text-center text-sm text-gray-400">
                            <div className="space-y-2">
                                {[1, 2, 3, 4, 5, 6, 7].map(i => (
                                    <div key={i} className="h-10 bg-gray-50 rounded-lg animate-pulse" />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Closures */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
                    <CalendarX className="w-4 h-4 text-[#8D776C]" />
                    <h2 className="font-semibold text-gray-900 text-sm">Tatil & Kapatma Günleri</h2>
                </div>

                {closures.length === 0 ? (
                    <div className="px-5 py-8 text-center text-sm text-gray-400">
                        Tanımlı kapatma günü yok.
                    </div>
                ) : (
                    <div className="divide-y divide-gray-50">
                        {closures.map(c => (
                            <div key={c.id} className="flex items-center justify-between px-5 py-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                                        <CalendarX className="w-4 h-4 text-red-500" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm text-gray-900">
                                            {new Date(c.date + 'T12:00:00').toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                        </p>
                                        {c.note && <p className="text-xs text-gray-400">{c.note}</p>}
                                    </div>
                                </div>
                                <button
                                    onClick={() => deleteClosure(c.id)}
                                    disabled={deletingId === c.id}
                                    className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                    aria-label="Sil"
                                >
                                    {deletingId === c.id
                                        ? <Loader2 className="w-4 h-4 animate-spin" />
                                        : <Trash2 className="w-4 h-4" />
                                    }
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Add closure form */}
                <div className="px-5 py-4 border-t border-gray-100 bg-gray-50/50">
                    <p className="text-xs font-medium text-gray-500 mb-3">Yeni Kapatma Günü Ekle</p>
                    <div className="flex gap-3 items-end flex-wrap">
                        <div>
                            <label className={labelCls}>Tarih *</label>
                            <input
                                type="date"
                                value={newClosure.date}
                                onChange={e => setNewClosure(p => ({ ...p, date: e.target.value }))}
                                className={inputCls}
                            />
                        </div>
                        <div className="flex-1 min-w-[160px]">
                            <label className={labelCls}>Not (isteğe bağlı)</label>
                            <input
                                type="text"
                                placeholder="Bayram, tadilat..."
                                value={newClosure.note}
                                onChange={e => setNewClosure(p => ({ ...p, note: e.target.value }))}
                                className={`${inputCls} w-full`}
                            />
                        </div>
                        <button
                            onClick={addClosure}
                            disabled={!newClosure.date || addingClosure}
                            className="flex items-center gap-2 px-4 py-2 bg-[#8D776C] text-white rounded-lg text-sm font-medium hover:bg-[#7a6760] disabled:opacity-50 cursor-pointer transition-colors"
                        >
                            {addingClosure ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Plus className="w-3.5 h-3.5" />}
                            Ekle
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
