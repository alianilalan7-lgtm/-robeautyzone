import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    console.log('🌱 Starting database seed...')

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10)
    const admin = await prisma.user.upsert({
        where: { email: 'admin@irobeautyzone.com' },
        update: {},
        create: {
            email: 'admin@irobeautyzone.com',
            name: 'Admin',
            password: hashedPassword,
            role: 'admin',
            emailVerified: new Date(),
        }
    })
    console.log('✅ Admin user created')

    // Create service categories
    const nailArt = await prisma.serviceCategory.upsert({
        where: { slug: 'nail-art' },
        update: {},
        create: {
            name: 'Nail Art',
            slug: 'nail-art',
            order: 1
        }
    })

    const manicure = await prisma.serviceCategory.upsert({
        where: { slug: 'manikur-pedikur' },
        update: {},
        create: {
            name: 'Manikür & Pedikür',
            slug: 'manikur-pedikur',
            order: 2
        }
    })

    const gelPolish = await prisma.serviceCategory.upsert({
        where: { slug: 'kalici-oje' },
        update: {},
        create: {
            name: 'Kalıcı Oje',
            slug: 'kalici-oje',
            order: 3
        }
    })

    console.log('✅ Service categories created')

    // Create services
    const services = [
        {
            categoryId: nailArt.id,
            name: 'Klasik Nail Art',
            slug: 'klasik-nail-art',
            description: 'Özel tasarım tırnak süslemesi. Sanatsal desenler ve renklerle tırnaklarınızı güzelleştirin.',
            durationMin: 60,
            priceMin: 350,
            priceMax: 500,
            images: ['/images/gallery/iro.jpeg'],
            preparationTips: 'Randevudan önce tırnaklarınızı temiz tutun. Oje varsa temizleyin.',
            order: 1
        },
        {
            categoryId: nailArt.id,
            name: 'Premium Nail Art',
            slug: 'premium-nail-art',
            description: 'Kristal, taş ve özel detaylarla lüks tırnak tasarımı. Özel günler için mükemmel.',
            durationMin: 90,
            priceMin: 600,
            priceMax: 800,
            images: ['/images/gallery/ıroBeatuy.jpeg'],
            preparationTips: 'Özel günleriniz için önceden randevu alın.',
            order: 2
        },
        {
            categoryId: gelPolish.id,
            name: 'Kalıcı Oje',
            slug: 'kalici-oje',
            description: 'Uzun ömürlü kalıcı oje uygulaması. 2-3 hafta bozulmadan kalır.',
            durationMin: 45,
            priceMin: 250,
            priceMax: null,
            images: ['/images/gallery/WhatsApp Image 2026-01-21 at 23.12.21.jpeg'],
            preparationTips: 'Tırnaklarınızın doğal ve sağlıklı olduğundan emin olun.',
            order: 1
        },
        {
            categoryId: gelPolish.id,
            name: 'Kalıcı Oje + Tasarım',
            slug: 'kalici-oje-tasarim',
            description: 'Kalıcı oje üzerine minimal tasarım. Şık ve kalıcı.',
            durationMin: 60,
            priceMin: 350,
            priceMax: 450,
            images: ['/images/gallery/WhatsApp Image 2026-01-21 at 23.12.24.jpeg'],
            order: 2
        },
        {
            categoryId: manicure.id,
            name: 'Klasik Manikür',
            slug: 'klasik-manikur',
            description: 'Tırnak bakımı, şekillendirme ve cilalama. Eller için spa deneyimi.',
            durationMin: 30,
            priceMin: 150,
            priceMax: null,
            images: ['/images/gallery/WhatsApp Image 2026-01-21 at 23.12.27.jpeg'],
            order: 1
        },
        {
            categoryId: manicure.id,
            name: 'Fransız Manikür',
            slug: 'fransiz-manikur',
            description: 'Klasik beyaz uçlu şık tırnak görünümü. Her zaman moda.',
            durationMin: 45,
            priceMin: 200,
            priceMax: null,
            images: ['/images/gallery/WhatsApp Image 2026-01-21 at 23.12.31.jpeg'],
            order: 2
        },
        {
            categoryId: manicure.id,
            name: 'Lüks Pedikür',
            slug: 'luks-pedikur',
            description: 'Ayak bakımı, peeling ve masaj ile tam bir rahatlama deneyimi.',
            durationMin: 60,
            priceMin: 300,
            priceMax: 400,
            images: ['/images/gallery/WhatsApp Image 2026-01-21 at 23.17.27.jpeg'],
            order: 3
        }
    ]

    for (const service of services) {
        await prisma.service.upsert({
            where: { slug: service.slug },
            update: {},
            create: service
        })
    }
    console.log('✅ Services created')

    // Create business hours
    const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']
    for (const day of days) {
        await prisma.businessHours.upsert({
            where: { dayOfWeek: day as any },
            update: {},
            create: {
                dayOfWeek: day as any,
                isOpen: day !== 'SUNDAY',
                openTime: '09:00',
                closeTime: day === 'SATURDAY' ? '18:00' : '20:00'
            }
        })
    }
    console.log('✅ Business hours created')

    // Create gallery items
    const galleryImages = [
        { imageUrl: '/images/gallery/iro.jpeg', caption: 'Kırmızı klasik oje', order: 1 },
        { imageUrl: '/images/gallery/ıroBeatuy.jpeg', caption: 'Yeşil taşlı elegant tasarım', order: 2 },
        { imageUrl: '/images/gallery/WhatsApp Image 2026-01-21 at 23.12.21.jpeg', caption: '3D çiçek detaylı nude', order: 3 },
        { imageUrl: '/images/gallery/WhatsApp Image 2026-01-21 at 23.12.24.jpeg', caption: 'Yeşil parlak nail art', order: 4 },
        { imageUrl: '/images/gallery/WhatsApp Image 2026-01-21 at 23.12.27.jpeg', caption: 'Fransız manikür', order: 5 },
        { imageUrl: '/images/gallery/WhatsApp Image 2026-01-21 at 23.12.29.jpeg', caption: 'Nude zarif tasarım', order: 6 },
        { imageUrl: '/images/gallery/WhatsApp Image 2026-01-21 at 23.12.31.jpeg', caption: 'Minimal çizgili', order: 7 },
        { imageUrl: '/images/gallery/WhatsApp Image 2026-01-21 at 23.12.32.jpeg', caption: 'Deniz yıldızlı nail art', order: 8 },
        { imageUrl: '/images/gallery/ıro.jpeg', caption: 'Gelin ojesi', order: 9 },
        { imageUrl: '/images/gallery/WhatsApp Image 2026-01-21 at 23.17.27.jpeg', caption: 'Pedikür', order: 10 },
    ]

    for (const item of galleryImages) {
        await prisma.galleryItem.create({
            data: item
        })
    }
    console.log('✅ Gallery items created')

    // Create legal documents
    await prisma.legalDocument.upsert({
        where: { type: 'KVKK' },
        update: {},
        create: {
            type: 'KVKK',
            title: 'KVKK Aydınlatma Metni',
            content: `# KVKK Aydınlatma Metni

IRO beautyzone olarak kişisel verilerinizin güvenliği bizim için önemlidir.

## Veri Sorumlusu
IRO beautyzone

## İşlenen Kişisel Veriler
- Ad, soyad
- Telefon numarası
- E-posta adresi
- Randevu bilgileri

## Verilerin İşlenme Amacı
- Randevu oluşturma ve yönetimi
- Randevu hatırlatmaları gönderme
- Hizmet kalitesini artırma

## Haklarınız
6698 sayılı KVKK kapsamında haklarınız için bizimle iletişime geçebilirsiniz.`
        }
    })

    await prisma.legalDocument.upsert({
        where: { type: 'CONSENT' },
        update: {},
        create: {
            type: 'CONSENT',
            title: 'Açık Rıza Metni',
            content: `# Açık Rıza Metni

Kişisel verilerimin IRO beautyzone tarafından randevu yönetimi ve hatırlatma amaçlı işlenmesine açık rızam ile onay veriyorum.

WhatsApp ve e-posta yoluyla randevu hatırlatmaları almayı kabul ediyorum.`
        }
    })

    await prisma.legalDocument.upsert({
        where: { type: 'PRIVACY' },
        update: {},
        create: {
            type: 'PRIVACY',
            title: 'Gizlilik Politikası',
            content: `# Gizlilik Politikası

IRO beautyzone müşteri gizliliğine önem verir.

## Veri Güvenliği
Tüm verileriniz şifreli ve güvenli şekilde saklanır.

## Veri Paylaşımı
Verileriniz üçüncü şahıslarla paylaşılmaz.`
        }
    })

    console.log('✅ Legal documents created')

    console.log('🎉 Seed completed successfully!')
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
