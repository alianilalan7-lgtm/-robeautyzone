'use client'

import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {


    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/images/logo/logo.jpg"
                        alt="IRO Beauty Zone"
                        width={180}
                        height={60}
                        className="h-16 w-auto object-contain"
                        priority
                    />
                </Link>

                <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
                    <Link href="/hizmetler" className="hover:text-primary transition-colors">
                        Hizmetler
                    </Link>
                    <Link href="/galeri" className="hover:text-primary transition-colors">
                        Galeri
                    </Link>
                    <Link href="/hakkimizda" className="hover:text-primary transition-colors">
                        Hakkımızda
                    </Link>
                    <ThemeToggle />
                    <Link
                        href="/randevu"
                        className="bg-primary text-white px-6 py-2.5 rounded-full hover:opacity-90 transition-all shadow-sm"
                    >
                        Randevu Al
                    </Link>
                </div>

                <button className="md:hidden p-2">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </nav>
    )
}
