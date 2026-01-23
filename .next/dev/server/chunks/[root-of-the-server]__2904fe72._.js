module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAdminClient",
    ()=>getAdminClient,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://pptaezqnufdgagxvnifo.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwdGFlenFudWZkZ2FneHZuaWZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzOTk5MjQsImV4cCI6MjA4MTk3NTkyNH0.KLDkmKwmRNEH9kr1nCsYocVgWBWiFEkSHGaCjGffR78"));
const getAdminClient = ()=>{
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
        throw new Error('Missing env.SUPABASE_SERVICE_ROLE_KEY');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://pptaezqnufdgagxvnifo.supabase.co"), process.env.SUPABASE_SERVICE_ROLE_KEY, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    });
};
}),
"[project]/lib/whatsapp.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateAppointmentMessage",
    ()=>generateAppointmentMessage,
    "sendWhatsAppNotification",
    ()=>sendWhatsAppNotification
]);
async function sendWhatsAppNotification(text) {
    const phone = process.env.CALLMEBOT_PHONE;
    const apiKey = process.env.CALLMEBOT_API_KEY;
    if (!phone || !apiKey) {
        console.warn('WhatsApp NOTIFICATION SKIPPED: Missing env vars');
        return;
    }
    try {
        const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(text)}&apikey=${apiKey}`;
        const res = await fetch(url);
        if (!res.ok) {
            console.error('WhatsApp API Error:', await res.text());
        } else {
            console.log('WhatsApp notification sent');
        }
    } catch (error) {
        console.error('WhatsApp Send Failed:', error);
    }
}
function generateAppointmentMessage(appointment, serviceName) {
    const date = new Date(appointment.startAt).toLocaleDateString('tr-TR');
    const time = new Date(appointment.startAt).toLocaleTimeString('tr-TR', {
        hour: '2-digit',
        minute: '2-digit'
    });
    const confirmLink = `${("TURBOPACK compile-time value", "http://localhost:3000")}/api/appointments/confirm?token=${appointment.confirmationToken}&action=confirm`;
    const cancelLink = `${("TURBOPACK compile-time value", "http://localhost:3000")}/api/appointments/confirm?token=${appointment.confirmationToken}&action=cancel`;
    return `📅 *YENİ RANDEVU TALEBİ*\n\n` + `👤 Müşteri: ${appointment.customerName}\n` + `📞 Tel: ${appointment.customerPhone}\n` + `💅 Hizmet: ${serviceName}\n` + `📆 Tarih: ${date} ${time}\n\n` + `Onaylamak için:\n${confirmLink}\n\n` + `Reddetmek için:\n${cancelLink}`;
}
}),
"[project]/lib/appointments.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppointmentSchema",
    ()=>AppointmentSchema,
    "checkAvailability",
    ()=>checkAvailability,
    "createAppointment",
    ()=>createAppointment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addMinutes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isBefore.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isAfter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parse.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/whatsapp.ts [app-route] (ecmascript)");
;
;
;
;
const AppointmentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    serviceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    customerName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2),
    customerPhone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10),
    customerEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('')),
    date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    time: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    kvkkConsent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().refine((val)=>val === true, "KVKK onayı gereklidir")
});
async function checkAvailability(date, time, durationMin) {
    const startAt = new Date(`${date}T${time}`);
    const endAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addMinutes"])(startAt, durationMin);
    // 1. Check Business Hours
    const dayOfWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(startAt, 'EEEE').toUpperCase();
    const { data: businessHours, error: bhError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('business_hours').select('*').eq('dayOfWeek', dayOfWeek).single();
    if (bhError || !businessHours?.isOpen) {
        return {
            available: false,
            reason: 'İş yeri kapalı'
        };
    }
    // Convert "09:00" to comparison mechanism
    const openTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(`${date}T${businessHours.openTime}`, "yyyy-MM-dd'T'HH:mm", new Date());
    const closeTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(`${date}T${businessHours.closeTime}`, "yyyy-MM-dd'T'HH:mm", new Date());
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBefore"])(startAt, openTime) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAfter"])(endAt, closeTime)) {
        return {
            available: false,
            reason: 'Çalışma saatleri dışında'
        };
    }
    // 2. Check Closures (Holidays)
    const { data: closure } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('closures').select('id').eq('date', date).maybeSingle();
    if (closure) {
        return {
            available: false,
            reason: 'Bu tarihte kapalıyız'
        };
    }
    // 3. Check Overlapping Appointments
    // Overlap formula: (StartA < EndB) and (EndA > StartB)
    const { data: conflicts, error: conflictError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('appointments').select('id').neq('status', 'CANCELED').neq('status', 'NO_RESPONSE').lt('startAt', endAt.toISOString()).gt('endAt', startAt.toISOString());
    if (conflictError) {
        console.error('Conflict check error:', conflictError);
        throw new Error('Müsaitlik kontrolü yapılamadı');
    }
    if (conflicts && conflicts.length > 0) {
        return {
            available: false,
            reason: 'Seçilen saat dolu'
        };
    }
    return {
        available: true
    };
}
async function createAppointment(input) {
    // 1. Get Service Details
    const { data: service } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('services').select('*').eq('slug', input.serviceId) // UI sends slug
    .single();
    if (!service) throw new Error('Hizmet bulunamadı');
    // 2. Check Availability
    const check = await checkAvailability(input.date, input.time, service.durationMin);
    if (!check.available) {
        throw new Error(check.reason);
    }
    // 3. Calculate Timestamps
    const startAt = new Date(`${input.date}T${input.time}`).toISOString();
    const endAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addMinutes"])(new Date(`${input.date}T${input.time}`), service.durationMin).toISOString();
    // 4. Insert Appointment
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('appointments').insert({
        id: crypto.randomUUID(),
        serviceId: service.id,
        customerName: input.customerName,
        customerPhone: input.customerPhone,
        customerEmail: input.customerEmail || null,
        startAt,
        endAt,
        status: 'PENDING_CONFIRMATION',
        kvkkConsent: input.kvkkConsent,
        consentAt: new Date().toISOString(),
        confirmationToken: crypto.randomUUID(),
        updatedAt: new Date().toISOString()
    }).select().single();
    if (error) {
        console.error('Create error:', error);
        throw new Error('Randevu oluşturulamadı');
    }
    // 5. Send Notification (Async - don't block response)
    const message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateAppointmentMessage"])(data, service.name);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendWhatsAppNotification"])(message).catch((err)=>console.error('Notification failed:', err));
    return data;
}
}),
"[project]/app/api/slots/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appointments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/appointments.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addMinutes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isBefore.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parse.js [app-route] (ecmascript) <locals>");
;
;
;
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    const serviceSlug = searchParams.get('service');
    const duration = searchParams.get('duration');
    if (!date || !duration) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Tarih ve süre gereklidir'
        }, {
            status: 400
        });
    }
    const durationMin = parseInt(duration);
    const slots = [];
    // Start from 09:00 to 20:00 (simple loop, real logic uses business hours in checkAvailability)
    // We generated logic in lib/appointments to check business hours, so we can just loop widely
    // and let the checker filter them.
    // But to be efficient, we should roughly know open hours.
    // Let's assume 09:00 - 19:30 (last slot)
    let current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(`${date}T09:00`, "yyyy-MM-dd'T'HH:mm", new Date());
    const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(`${date}T20:00`, "yyyy-MM-dd'T'HH:mm", new Date());
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBefore"])(current, end)){
        const timeStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(current, 'HH:mm');
        // Skip past times if today
        const now = new Date();
        const slotDateTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(`${date}T${timeStr}`, "yyyy-MM-dd'T'HH:mm", new Date());
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBefore"])(slotDateTime, now)) {
            current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addMinutes"])(current, 30); // 30 min intervals
            continue;
        }
        const check = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appointments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkAvailability"])(date, timeStr, durationMin);
        if (check.available) {
            slots.push(timeStr);
        }
        current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addMinutes"])(current, 30);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        slots
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2904fe72._.js.map