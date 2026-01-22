'use client'

export default function AdminAppointments() {
    return (
        <div className="flex flex-col h-screen">
            {/* Header */}
            <header className="p-6 bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 flex justify-between items-center">
                <div className="flex items-center gap-8">
                    <div>
                        <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                            Appointment Calendar
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-xs">
                            Manage and schedule your nail studio sessions
                        </p>
                    </div>

                    <div className="flex items-center bg-slate-100 dark:bg-zinc-800 rounded-lg p-1">
                        <button className="px-3 py-1.5 text-xs font-semibold rounded-md bg-white dark:bg-zinc-700 shadow-sm">
                            Week
                        </button>
                        <button className="px-3 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                            Day
                        </button>
                        <button className="px-3 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                            Month
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg">
                            ◀
                        </button>
                        <span className="text-sm font-semibold">Oct 23 - Oct 29, 2023</span>
                        <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg">
                            ▶
                        </button>
                    </div>
                </div>

                <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
                    <span>➕</span> New Appointment
                </button>
            </header>

            {/* Calendar */}
            <div className="flex-1 overflow-auto bg-white dark:bg-zinc-900">
                {/* Days Header */}
                <div className="grid grid-cols-8 border-b border-slate-200 dark:border-zinc-800 sticky top-0 bg-white dark:bg-zinc-900 z-10">
                    <div className="h-12 border-r border-slate-200 dark:border-zinc-800"></div>
                    {days.map((day, idx) => (
                        <div
                            key={idx}
                            className={`h-12 flex flex-col items-center justify-center border-r border-slate-100 dark:border-zinc-800 ${day.isToday ? 'bg-primary/5' : ''
                                }`}
                        >
                            <span className={`text-[10px] font-bold uppercase ${day.isToday ? 'text-primary' : 'text-slate-400'}`}>
                                {day.name}
                            </span>
                            <span className={`text-sm font-bold ${day.isToday ? 'text-primary' : ''}`}>{day.date}</span>
                        </div>
                    ))}
                </div>

                {/* Time Grid */}
                <div className="grid grid-cols-8 relative">
                    {/* Time Column */}
                    <div className="flex flex-col">
                        {times.map((time, idx) => (
                            <div
                                key={idx}
                                className="flex justify-center pt-2 text-[10px] font-bold text-slate-400 border-r border-slate-200 dark:border-zinc-800 h-20 border-b border-slate-100 dark:border-zinc-800"
                            >
                                {time}
                            </div>
                        ))}
                    </div>

                    {/* Day Columns */}
                    {days.map((day, dayIdx) => (
                        <div key={dayIdx} className="flex flex-col">
                            {times.map((_, timeIdx) => (
                                <div
                                    key={timeIdx}
                                    className={`h-20 border-r border-b border-slate-100 dark:border-zinc-800 ${day.isToday ? 'bg-primary/5' : day.isWeekend ? 'bg-slate-100/30' : ''
                                        }`}
                                ></div>
                            ))}
                        </div>
                    ))}

                    {/* Events */}
                    <div className="absolute inset-0 left-[12.5%] pointer-events-none">
                        {events.map((event, idx) => (
                            <div
                                key={idx}
                                className={`absolute rounded-lg px-3 py-2 text-xs font-medium border-l-4 shadow-sm cursor-pointer pointer-events-auto transition-all hover:scale-[1.02] ${event.className}`}
                                style={event.style}
                            >
                                <p className="font-bold truncate">{event.client}</p>
                                <p className="opacity-80 truncate text-[10px]">{event.service}</p>
                                <p className="mt-1 text-[10px] font-bold">{event.time}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const days = [
    { name: 'Mon', date: '23', isToday: false, isWeekend: false },
    { name: 'Tue', date: '24', isToday: false, isWeekend: false },
    { name: 'Wed', date: '25', isToday: true, isWeekend: false },
    { name: 'Thu', date: '26', isToday: false, isWeekend: false },
    { name: 'Fri', date: '27', isToday: false, isWeekend: false },
    { name: 'Sat', date: '28', isToday: false, isWeekend: true },
    { name: 'Sun', date: '29', isToday: false, isWeekend: true },
]

const times = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM']

const events = [
    {
        client: 'Melisa Yılmaz',
        service: 'Gel Extensions',
        time: '10:00 - 11:30 AM',
        className: 'bg-primary/20 border-primary text-primary-dark',
        style: { top: '80px', left: '4px', width: 'calc(14.28% - 8px)', height: '110px' }
    },
    {
        client: 'Selen Aktaş',
        service: 'Minimal Nail Art',
        time: '11:00 - 12:00 PM',
        className: 'bg-primary border-primary-dark text-white ring-4 ring-primary/20',
        style: { top: '160px', left: 'calc(14.28% * 2 + 4px)', width: 'calc(14.28% - 8px)', height: '70px' }
    },
    {
        client: 'Burcu Eser',
        service: 'Removal + New Set',
        time: '01:00 - 02:30 PM',
        className: 'bg-primary/40 border-primary-dark text-slate-900 dark:text-white',
        style: { top: '320px', left: 'calc(14.28% * 2 + 4px)', width: 'calc(14.28% - 8px)', height: '110px' }
    },
]
