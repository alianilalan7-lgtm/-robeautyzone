'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import {
    LayoutDashboard,
    CalendarDays,
    Calendar,
    Users,
    Settings,
    LogOut,
    Menu,
    X,
    Scissors,
    ImageIcon,
    ChevronRight,
} from 'lucide-react'

const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard, exact: true },
    { name: 'Randevular', href: '/admin/appointments', icon: CalendarDays },
    { name: 'Takvim', href: '/admin/calendar', icon: Calendar },
    { name: 'Hizmetler', href: '/admin/services', icon: Scissors },
    { name: 'Personel', href: '/admin/personel', icon: Users },
    { name: 'Galeri', href: '/admin/galeri', icon: ImageIcon },
    { name: 'Ayarlar', href: '/admin/settings', icon: Settings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const router = useRouter()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/login')
        router.refresh()
    }

    const isActive = (item: typeof navigation[0]) =>
        item.exact ? pathname === item.href : pathname.startsWith(item.href)

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Mobile overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-20 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-100 flex flex-col
                transform transition-transform duration-200 ease-in-out
                lg:translate-x-0 lg:static lg:h-screen
                ${isSidebarOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'}
            `}>
                {/* Brand */}
                <div className="h-16 flex items-center justify-between px-5 border-b border-gray-100 shrink-0">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#8D776C] flex items-center justify-center shrink-0">
                            <Scissors className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-900 leading-none">IRO Admin</p>
                            <p className="text-xs text-gray-400 leading-none mt-0.5">Beautyzone</p>
                        </div>
                    </div>
                    <button
                        className="lg:hidden p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
                        onClick={() => setIsSidebarOpen(false)}
                        aria-label="Menüyü kapat"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
                    {navigation.map((item) => {
                        const active = isActive(item)
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsSidebarOpen(false)}
                                className={`
                                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                                    transition-all duration-150 cursor-pointer group
                                    ${active
                                        ? 'bg-[#F7F5F3] text-[#8D776C]'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }
                                `}
                            >
                                <item.icon className={`w-4.5 h-4.5 shrink-0 ${active ? 'text-[#8D776C]' : 'text-gray-400 group-hover:text-gray-600'}`} />
                                <span className="flex-1">{item.name}</span>
                                {active && <ChevronRight className="w-3.5 h-3.5 text-[#8D776C]/60" />}
                            </Link>
                        )
                    })}
                </nav>

                {/* Footer */}
                <div className="px-3 py-4 border-t border-gray-100 shrink-0">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 hover:text-red-700 transition-colors cursor-pointer"
                    >
                        <LogOut className="w-4.5 h-4.5 shrink-0" />
                        Çıkış Yap
                    </button>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-6 shrink-0">
                    <button
                        className="lg:hidden p-2 -ml-1 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer"
                        onClick={() => setIsSidebarOpen(true)}
                        aria-label="Menüyü aç"
                    >
                        <Menu className="w-5 h-5" />
                    </button>

                    {/* Page breadcrumb hint */}
                    <div className="hidden lg:flex items-center gap-2 text-sm text-gray-400">
                        <span className="text-gray-900 font-medium">IRO Beautyzone</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                        <span>{navigation.find(n => isActive(n))?.name ?? 'Admin'}</span>
                    </div>

                    <div className="flex items-center gap-3 ml-auto">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#F3F0EF] flex items-center justify-center text-[#8D776C] font-bold text-sm border border-[#E8E2DE]">
                                A
                            </div>
                            <span className="hidden sm:block text-sm text-gray-600 font-medium">Admin</span>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-auto p-4 lg:p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
