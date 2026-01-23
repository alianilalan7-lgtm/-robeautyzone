
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import { randomUUID } from 'crypto'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing Supabase credentials in .env.local')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

const servicesData = [
    // --- KADIN HİZMETLERİ ---
    // Tırnak Hizmetleri
    { name: "STAMP – TEK TIRNAK", price: 100, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "NASIR ALIMI", price: 200, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "NAIL ART – TEK TIRNAK", price: 300, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "JEL TEK TIRNAK (EL) - TIRNAK TAMİRİ", price: 150, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "PROTEZ TIRNAK TAMİRİ  (EL)", price: 200, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "BATIK TIRNAK TAMPONLAMA", price: 200, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "JEL TEK TIRNAK (AYAK) - TIRNAK TAMİRİ", price: 200, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "CHARM – TEK TIRNAK", price: 400, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "BATIK (TEK TIRNAK)", price: 300, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "KALICI OJE ÇIKARTMA – EL – TÖRPÜ DAHİL", price: 350, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "DİSCO - SİMLİ OJE", price: 350, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "FRENCH", price: 350, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "İNCİ VEYA AYNA TOZU", price: 350, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "KEDİ GÖZÜ", price: 350, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "OMBRE", price: 350, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "KALICI OJE ÇIKARTMA – AYAK – TÖRPÜ DAHİL", price: 350, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "JEL ÇIKARTMA - TÖRPÜ DAHİL", price: 450, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "PROTEZ ÇIKARTMA - TÖRPÜ DAHİL", price: 450, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "DERİN TOPUK TEMİZLİĞİ", price: 500, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "NAIL PIERCING - TEK TIRNAK", price: 800, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "MANİKÜR", price: 850, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "KALICI OJE (EL)", price: 850, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "MANİKÜR + NORMAL OJE", price: 900, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "KALICI OJE (AYAK)", price: 950, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "PEDİKÜR", price: 950, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "ERKEK MANİKÜR", price: 950, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "PEDİKÜR + NORMAL OJE", price: 1000, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "ERKEK PEDİKÜR", price: 1050, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "MANİKÜR + DÜZ RENK KALICI OJE", price: 1350, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "PEDİKÜR + DÜZ RENK KALICI OJE", price: 1450, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "MANİKÜR + JEL GÜÇLENDİRME (JEL BAKIM) + DÜZ RENK KALICI OJE", price: 1550, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "PROTEZ TIRNAK BAKIMI (JEL) + MANİKÜR + DÜZ RENK KALICI OJE", price: 1750, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "SIFIRDAN PROTEZ TIRNAK (TİPS) + MANİKÜR + DÜZ RENK KALICI OJE", price: 1850, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "SIFIRDAN PROTEZ TIRNAK (JEL) + MANİKÜR (S - M) + DÜZ RENK KALICI OJE", price: 2000, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "SIFIRDAN PROTEZ TIRNAK (JEL) + MANİKÜR (L - XL) + DÜZ RENK KALICI OJE", price: 2250, category: "Tırnak Hizmetleri", group: "Kadın" },
    { name: "TIRNAK YEME TEDAVİSİ", price: 2500, category: "Tırnak Hizmetleri", group: "Kadın" },
    // Estetik ve Güzellik
    { name: "Bıyık Alımı", price: 200, category: "Estetik ve Güzellik", group: "Kadın" },
    { name: "Kaş Alımı", price: 500, category: "Estetik ve Güzellik", group: "Kadın" },
    { name: "ALTIN ORAN KAŞ ALIMI", price: 1000, category: "Estetik ve Güzellik", group: "Kadın" },
    { name: "KAŞ VİTAMİN BAKIM", price: 1100, category: "Estetik ve Güzellik", group: "Kadın" },
    { name: "KİRPİK LAMİNASYON + VİTAMİN BAKIM", price: 2000, category: "Estetik ve Güzellik", group: "Kadın" },
    { name: "KAŞ LAMİNASYON + VİTAMİN BAKIM", price: 2000, category: "Estetik ve Güzellik", group: "Kadın" },
    // Cilt Bakımı
    { name: "CİLT BAKIMI (Derin Temizlik + Cilt Yenileme)", price: 4000, category: "Cilt Bakımı", group: "Kadın" },
    { name: "CİLT BAKIM PROTOKOLÜ - Yoğun Nem", price: 4500, category: "Cilt Bakımı", group: "Kadın" },
    { name: "CİLT BAKIM PROTOKOLÜ - Leke Karşıtı", price: 4500, category: "Cilt Bakımı", group: "Kadın" },
    { name: "CİLT BAKIM PROTOKOLÜ - Anti Aging", price: 5000, category: "Cilt Bakımı", group: "Kadın" },
    { name: "KİMYASAL PEELING", price: 5000, category: "Cilt Bakımı", group: "Kadın" },
    { name: "GOLDEN THERAPY (Altın Ütü)", price: 6000, category: "Cilt Bakımı", group: "Kadın" },
    // Masaj
    { name: "G5 KARIN - 6 SEANS", price: 5000, category: "Masaj Hizmetleri", group: "Kadın" },
    { name: "G5 BACAK - 6 SEANS", price: 6000, category: "Masaj Hizmetleri", group: "Kadın" },
    { name: "G5 BACAK + G5 KARIN + SELÜLİT MASAJI - 6 SEANS", price: 10000, category: "Masaj Hizmetleri", group: "Kadın" },

    // --- ERKEK HİZMETLERİ ---
    // Tırnak
    { name: "PROTEZ TIRNAK TAMİRİ  (EL)", price: 200, category: "Tırnak Hizmetleri", group: "Erkek" },
    { name: "BATIK (TEK TIRNAK)", price: 300, category: "Tırnak Hizmetleri", group: "Erkek" },
    { name: "DERİN TOPUK TEMİZLİĞİ", price: 500, category: "Tırnak Hizmetleri", group: "Erkek" },
    { name: "ERKEK MANİKÜR", price: 950, category: "Tırnak Hizmetleri", group: "Erkek" },
    { name: "ERKEK PEDİKÜR", price: 1050, category: "Tırnak Hizmetleri", group: "Erkek" },
    { name: "TIRNAK YEME TEDAVİSİ", price: 2500, category: "Tırnak Hizmetleri", group: "Erkek" },
    // Estetik
    { name: "Kaş Alımı", price: 500, category: "Estetik ve Güzellik", group: "Erkek" },
    { name: "ALTIN ORAN KAŞ ALIMI", price: 1000, category: "Estetik ve Güzellik", group: "Erkek" },
    { name: "KAŞ VİTAMİN BAKIM", price: 1100, category: "Estetik ve Güzellik", group: "Erkek" },
    { name: "KİRPİK LAMİNASYON + VİTAMİN BAKIM", price: 2000, category: "Estetik ve Güzellik", group: "Erkek" },
    { name: "KAŞ LAMİNASYON + VİTAMİN BAKIM", price: 2000, category: "Estetik ve Güzellik", group: "Erkek" },
    // Cilt
    { name: "CİLT BAKIMI (Derin Temizlik + Cilt Yenileme)", price: 4000, category: "Cilt Bakımı", group: "Erkek" },
    { name: "CİLT BAKIM PROTOKOLÜ - Yoğun Nem", price: 4500, category: "Cilt Bakımı", group: "Erkek" },
    { name: "CİLT BAKIM PROTOKOLÜ - Leke Karşıtı", price: 4500, category: "Cilt Bakımı", group: "Erkek" },
    { name: "CİLT BAKIM PROTOKOLÜ - Anti Aging", price: 5000, category: "Cilt Bakımı", group: "Erkek" },
    { name: "KİMYASAL PEELING", price: 5000, category: "Cilt Bakımı", group: "Erkek" },
    { name: "GOLDEN THERAPY (Altın Ütü)", price: 6000, category: "Cilt Bakımı", group: "Erkek" },
    // Masaj
    { name: "G5 KARIN - 6 SEANS", price: 5000, category: "Masaj Hizmetleri", group: "Erkek" },
    { name: "G5 BACAK - 6 SEANS", price: 6000, category: "Masaj Hizmetleri", group: "Erkek" },
    { name: "G5 BACAK + G5 KARIN + SELÜLİT MASAJI - 6 SEANS", price: 10000, category: "Masaj Hizmetleri", group: "Erkek" },
]

async function main() {
    console.log('Start seeding services with Supabase Client...')

    // 1. Clean up
    console.log('Cleaning up existing data...')

    // Note: We need to respect FK constraints manually or use cascade if defined in DB level
    // Deleting appointments first
    const { error: err1 } = await supabase.from('appointments').delete().neq('id', '0')
    if (err1) console.log('Notice: ' + err1.message)

    const { error: err2 } = await supabase.from('services').delete().neq('id', '0')
    if (err2) console.log('Notice: ' + err2.message)

    const { error: err3 } = await supabase.from('service_categories').delete().neq('id', '0')
    if (err3) console.log('Notice: ' + err3.message)

    // 2. Create Categories & Services
    const categoriesMap = new Map()

    for (const service of servicesData) {
        const categoryName = `${service.group} - ${service.category}`

        // Create Category if not exists locally map (assuming we deleted all)
        // Actually, we should check if we already created it in this loop
        let categoryId = categoriesMap.get(categoryName)

        if (!categoryId) {
            const slug = categoryName.toLowerCase()
                .replace(/ /g, '-')
                .replace(/ğ/g, 'g')
                .replace(/ü/g, 'u')
                .replace(/ş/g, 's')
                .replace(/ı/g, 'i')
                .replace(/ö/g, 'o')
                .replace(/ç/g, 'c')
                .replace(/[^\w-]/g, '')

            console.log(`Creating category: ${categoryName}`)

            const { data: cat, error } = await supabase.from('service_categories').insert({
                id: randomUUID(), // Explicit ID
                name: categoryName,
                slug: slug + '-' + Math.random().toString(36).substring(7), // Ensure unique slug just in case
                order: service.group === 'Kadın' ? 1 : 2,
                updatedAt: new Date().toISOString()
            }).select().single()

            if (error) {
                console.error('Error creating category:', error)
                // Try to fetch existing if error
                const { data: existing } = await supabase.from('service_categories').select('id').eq('name', categoryName).single()
                if (existing) {
                    categoryId = existing.id
                    categoriesMap.set(categoryName, categoryId)
                }
            } else {
                categoryId = cat.id // Use the returned id which we sent (or DB generated if we didn't but here we sent it)
                // Wait, supabase insert returns what was inserted if select() is used.
                // If we sent ID, it returns it.
                categoriesMap.set(categoryName, categoryId)
            }
        }

        if (categoryId) {
            const serviceSlug = `${service.group}-${service.name}`.toLowerCase()
                .replace(/ /g, '-')
                .replace(/ğ/g, 'g')
                .replace(/ü/g, 'u')
                .replace(/ş/g, 's')
                .replace(/ı/g, 'i')
                .replace(/ö/g, 'o')
                .replace(/ç/g, 'c')
                .replace(/[^\w-]/g, '') + '-' + Math.random().toString(36).substring(7)

            console.log(`Creating service: ${service.name}`)

            const { error: sError } = await supabase.from('services').insert({
                id: randomUUID(), // Explicit ID
                name: service.name,
                slug: serviceSlug,
                description: `${service.group} için ${service.name} hizmeti.`,
                durationMin: 45,
                priceMin: service.price,
                priceMax: service.price,
                categoryId: categoryId,
                active: true,
                updatedAt: new Date().toISOString()
            })

            if (sError) console.error(`Error creating service ${service.name}:`, sError)
        }
    }

    console.log('Seeding finished.')
}

main()
