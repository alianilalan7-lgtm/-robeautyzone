export default function AdminDashboard() {
    return (
        <div className="p-8 bg-background-light dark:bg-background-dark">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Admin Dashboard</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Welcome back! Here&apos;s what&apos;s happening today.</p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="p-2 text-slate-400 hover:text-primary relative">
                        <span className="text-2xl">🔔</span>
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background-light dark:border-background-dark"></span>
                    </button>
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary/20">
                        <div className="w-full h-full bg-primary/20 flex items-center justify-center text-lg">👤</div>
                    </div>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-slate-200 dark:border-zinc-800 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <span className="p-2 bg-primary/10 text-primary rounded-lg text-2xl">👥</span>
                        <span className="text-xs font-semibold text-emerald-500">+12%</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Clients</p>
                    <h3 className="text-2xl font-bold mt-1">1,284</h3>
                </div>

                <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-slate-200 dark:border-zinc-800 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <span className="p-2 bg-amber-100 text-amber-600 rounded-lg text-2xl">⏳</span>
                        <span className="text-xs font-semibold text-amber-500">4 New</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Pending Requests</p>
                    <h3 className="text-2xl font-bold mt-1">18</h3>
                </div>

                <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-slate-200 dark:border-zinc-800 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <span className="p-2 bg-indigo-100 text-indigo-600 rounded-lg text-2xl">💰</span>
                        <span className="text-xs font-semibold text-emerald-500">+8%</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Monthly Revenue</p>
                    <h3 className="text-2xl font-bold mt-1">$12,450</h3>
                </div>

                <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-slate-200 dark:border-zinc-800 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <span className="p-2 bg-primary/10 text-primary rounded-lg text-2xl">📅</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Today&apos;s Appts</p>
                    <h3 className="text-2xl font-bold mt-1">14</h3>
                </div>
            </div>

            {/* Appointments Table & Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-xl border border-slate-200 dark:border-zinc-800 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-zinc-800 flex justify-between items-center">
                        <h3 className="font-bold text-lg">Today&apos;s Appointments</h3>
                        <button className="text-primary text-sm font-semibold hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50 dark:bg-zinc-800/50 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider">
                                    <th className="px-6 py-4 font-semibold">Client</th>
                                    <th className="px-6 py-4 font-semibold">Service</th>
                                    <th className="px-6 py-4 font-semibold">Time</th>
                                    <th className="px-6 py-4 font-semibold">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
                                {appointments.map((apt, idx) => (
                                    <tr key={idx}>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-xs">
                                                    {apt.initials}
                                                </div>
                                                <span className="text-sm font-medium">{apt.client}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm">{apt.service}</td>
                                        <td className="px-6 py-4 text-sm font-mono">{apt.time}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded ${apt.statusClass}`}>
                                                {apt.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-slate-200 dark:border-zinc-800 shadow-sm">
                        <h3 className="font-bold text-lg mb-6">Revenue Growth</h3>
                        <div className="h-48 flex items-end gap-2 px-2">
                            {[40, 60, 55, 80, 75, 95].map((height, idx) => (
                                <div
                                    key={idx}
                                    className="flex-1 bg-primary/20 rounded-t hover:bg-primary transition-all cursor-pointer"
                                    style={{ height: `${height}%` }}
                                ></div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                            <span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span>
                        </div>
                    </div>

                    <div className="bg-primary text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
                        <div className="relative z-10">
                            <h4 className="font-display text-xl font-bold mb-2">Grow your business</h4>
                            <p className="text-white/80 text-sm mb-4">
                                You have 4 pending appointment requests waiting for approval.
                            </p>
                            <button className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold shadow-sm">
                                Review Now
                            </button>
                        </div>
                        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const appointments = [
    {
        client: "Melisa Yılmaz",
        initials: "MY",
        service: "Luxury Gel Extensions",
        time: "10:30 AM",
        status: "In Progress",
        statusClass: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
    },
    {
        client: "Selen Aktaş",
        initials: "SA",
        service: "Minimal Nail Art",
        time: "12:00 PM",
        status: "Confirmed",
        statusClass: "bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-slate-400"
    },
    {
        client: "Burcu Eser",
        initials: "BE",
        service: "Removal + New Set",
        time: "01:30 PM",
        status: "Confirmed",
        statusClass: "bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-slate-400"
    }
]
