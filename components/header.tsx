'use client'

import Link from "next/link"
import { useState } from "react"

export default function Header() {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDark = () => {
        setDarkMode(!darkMode)
        document.documentElement.classList.toggle('dark')
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-display font-bold tracking-tight text-primary">
                        IRO <span className="text-xs uppercase font-sans tracking-widest text-gray-500">beautyzone</span>
                    </span>
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
                    <button
                        onClick={toggleDark}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <span className="material-symbols-outlined text-sm">dark_mode</span>
                    </button>
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
