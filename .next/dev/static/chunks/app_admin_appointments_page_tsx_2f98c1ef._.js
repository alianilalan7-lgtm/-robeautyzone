(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/admin/appointments/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminAppointments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function AdminAppointments() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "p-6 bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-display font-bold text-slate-900 dark:text-white leading-tight",
                                        children: "Appointment Calendar"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/appointments/page.tsx",
                                        lineNumber: 10,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 dark:text-slate-400 text-xs",
                                        children: "Manage and schedule your nail studio sessions"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/appointments/page.tsx",
                                        lineNumber: 13,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/appointments/page.tsx",
                                lineNumber: 9,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-slate-100 dark:bg-zinc-800 rounded-lg p-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-3 py-1.5 text-xs font-semibold rounded-md bg-white dark:bg-zinc-700 shadow-sm",
                                        children: "Week"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/appointments/page.tsx",
                                        lineNumber: 19,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-3 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-400",
                                        children: "Day"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/appointments/page.tsx",
                                        lineNumber: 22,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-3 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-400",
                                        children: "Month"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/appointments/page.tsx",
                                        lineNumber: 25,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/appointments/page.tsx",
                                lineNumber: 18,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-1.5 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg",
                                        children: "◀"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/appointments/page.tsx",
                                        lineNumber: 31,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold",
                                        children: "Oct 23 - Oct 29, 2023"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/appointments/page.tsx",
                                        lineNumber: 34,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-1.5 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg",
                                        children: "▶"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/appointments/page.tsx",
                                        lineNumber: 35,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/appointments/page.tsx",
                                lineNumber: 30,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/appointments/page.tsx",
                        lineNumber: 8,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "➕"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/appointments/page.tsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, this),
                            " New Appointment"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/appointments/page.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/appointments/page.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto bg-white dark:bg-zinc-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-8 border-b border-slate-200 dark:border-zinc-800 sticky top-0 bg-white dark:bg-zinc-900 z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-12 border-r border-slate-200 dark:border-zinc-800"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/appointments/page.tsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this),
                            days.map((day, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-12 flex flex-col items-center justify-center border-r border-slate-100 dark:border-zinc-800 ${day.isToday ? 'bg-primary/5' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[10px] font-bold uppercase ${day.isToday ? 'text-primary' : 'text-slate-400'}`,
                                            children: day.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/appointments/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-sm font-bold ${day.isToday ? 'text-primary' : ''}`,
                                            children: day.date
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/appointments/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/admin/appointments/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/appointments/page.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-8 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: times.map((time, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center pt-2 text-[10px] font-bold text-slate-400 border-r border-slate-200 dark:border-zinc-800 h-20 border-b border-slate-100 dark:border-zinc-800",
                                        children: time
                                    }, idx, false, {
                                        fileName: "[project]/app/admin/appointments/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/admin/appointments/page.tsx",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this),
                            days.map((day, dayIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: times.map((_, timeIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-20 border-r border-b border-slate-100 dark:border-zinc-800 ${day.isToday ? 'bg-primary/5' : day.isWeekend ? 'bg-slate-100/30' : ''}`
                                        }, timeIdx, false, {
                                            fileName: "[project]/app/admin/appointments/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 33
                                        }, this))
                                }, dayIdx, false, {
                                    fileName: "[project]/app/admin/appointments/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 25
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 left-[12.5%] pointer-events-none",
                                children: events.map((event, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute rounded-lg px-3 py-2 text-xs font-medium border-l-4 shadow-sm cursor-pointer pointer-events-auto transition-all hover:scale-[1.02] ${event.className}`,
                                        style: event.style,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold truncate",
                                                children: event.client
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/appointments/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "opacity-80 truncate text-[10px]",
                                                children: event.service
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/appointments/page.tsx",
                                                lineNumber: 101,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-[10px] font-bold",
                                                children: event.time
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/appointments/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/app/admin/appointments/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/admin/appointments/page.tsx",
                                lineNumber: 93,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/appointments/page.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/appointments/page.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/appointments/page.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
_c = AdminAppointments;
const days = [
    {
        name: 'Mon',
        date: '23',
        isToday: false,
        isWeekend: false
    },
    {
        name: 'Tue',
        date: '24',
        isToday: false,
        isWeekend: false
    },
    {
        name: 'Wed',
        date: '25',
        isToday: true,
        isWeekend: false
    },
    {
        name: 'Thu',
        date: '26',
        isToday: false,
        isWeekend: false
    },
    {
        name: 'Fri',
        date: '27',
        isToday: false,
        isWeekend: false
    },
    {
        name: 'Sat',
        date: '28',
        isToday: false,
        isWeekend: true
    },
    {
        name: 'Sun',
        date: '29',
        isToday: false,
        isWeekend: true
    }
];
const times = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM'
];
const events = [
    {
        client: 'Melisa Yılmaz',
        service: 'Gel Extensions',
        time: '10:00 - 11:30 AM',
        className: 'bg-primary/20 border-primary text-primary-dark',
        style: {
            top: '80px',
            left: '4px',
            width: 'calc(14.28% - 8px)',
            height: '110px'
        }
    },
    {
        client: 'Selen Aktaş',
        service: 'Minimal Nail Art',
        time: '11:00 - 12:00 PM',
        className: 'bg-primary border-primary-dark text-white ring-4 ring-primary/20',
        style: {
            top: '160px',
            left: 'calc(14.28% * 2 + 4px)',
            width: 'calc(14.28% - 8px)',
            height: '70px'
        }
    },
    {
        client: 'Burcu Eser',
        service: 'Removal + New Set',
        time: '01:00 - 02:30 PM',
        className: 'bg-primary/40 border-primary-dark text-slate-900 dark:text-white',
        style: {
            top: '320px',
            left: 'calc(14.28% * 2 + 4px)',
            width: 'calc(14.28% - 8px)',
            height: '110px'
        }
    }
];
var _c;
__turbopack_context__.k.register(_c, "AdminAppointments");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_admin_appointments_page_tsx_2f98c1ef._.js.map