
"use client"

import Image from "next/image"

const galleryItems = [
    {
        src: "/images/gallery/gallery-1.jpg",
        alt: "Nail Art Design 1",
        category: "Nail Art"
    },
    {
        src: "/images/gallery/gallery-2.jpg",
        alt: "Nail Art Design 2",
        category: "Nail Art"
    },
    {
        src: "/images/gallery/gallery-3.jpg",
        alt: "Manikür Uygulaması",
        category: "Manikür"
    },
    {
        src: "/images/gallery/gallery-4.jpg",
        alt: "Protez Tırnak",
        category: "Protez Tırnak"
    },
    {
        src: "/images/gallery/gallery-5.jpg",
        alt: "Nail Art Detay",
        category: "Nail Art"
    },
    {
        src: "/images/gallery/gallery-6.jpg",
        alt: "Kırmızı Kalıcı Oje",
        category: "Kalıcı Oje"
    },
    {
        src: "/images/gallery/gallery-7.jpg",
        alt: "Gelin Tırnağı Tasarım",
        category: "Protez Tırnak"
    },
    {
        src: "/images/gallery/gallery-8.jpg",
        alt: "Yılbaşı Özel Tasarım",
        category: "Nail Art"
    }
]

export default function GaleriPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-accent-dark py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="font-display text-4xl md:text-5xl text-gray-900 dark:text-gray-100 text-center mb-8">
                    Galeri
                </h1>

                <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
                    İşlerimizden örnekler. Her tırnak bir sanat eseri.
                </p>

                <div className="masonry-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800"
                        >
                            <div className="relative aspect-[4/5] w-full">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-2">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
