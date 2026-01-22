'use client'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-slate-200 dark:border-zinc-800 flex flex-col">
                <div className="p-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-display font-bold text-xl">
                            I
                        </div>
                        <div>
                            <h1 className="font-display font-bold text-lg leading-tight">IRO</h1>
                            <p className="text-[10px] tracking-[0.2em] uppercase opacity-70">Beautyzone</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    <a
                        href="/admin"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg bg-primary/10 text-primary"
                    >
                        <span className="text-xl">📊</span>
                        Dashboard
                    </a>
                    <a
                        href="/admin/appointments"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    >
                        <span className="text-xl">📅</span>
                        Appointments
                    </a>
                    <a
                        href="/admin/services"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    >
                        <span className="text-xl">💅</span>
                        Services
                    </a>
                    <a
                        href="/admin/gallery"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    >
                        <span className="text-xl">🖼️</span>
                        Gallery
                    </a>
                    <a
                        href="/admin/clients"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    >
                        <span className="text-xl">👥</span>
                        Clients
                    </a>
                </nav>

                <div className="p-4 mt-auto">
                    <a
                        href="/admin/settings"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    >
                        <span className="text-xl">⚙️</span>
                        Settings
                    </a>
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-zinc-800">
                        <button
                            onClick={() => document.documentElement.classList.toggle('dark')}
                            className="w-full flex items-center gap-3 px-4 py-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                        >
                            <span className="text-sm">🌓</span>
                            Switch Theme
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                {children}
            </main>
        </div>
    )
}
