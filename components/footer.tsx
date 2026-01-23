import Link from "next/link"

export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center space-x-2">
                    <span className="text-2xl font-display font-bold tracking-tight text-primary">
                        IRO <span className="text-xs uppercase font-sans tracking-widest text-gray-500">beautyzone</span>
                    </span>
                </div>

                <div className="flex space-x-6 text-gray-500">
                    <Link href="https://www.instagram.com/irobeautyzone/" target="_blank" className="hover:text-primary transition-colors">Instagram</Link>
                    <Link href="#" className="hover:text-primary transition-colors">TikTok</Link>
                </div>

                <div className="text-sm text-gray-400">
                    © 2026 IRO beautyzone. Tüm hakları saklıdır.
                </div>
            </div>

            {/* Mobile Bottom Nav */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] bg-white/90 backdrop-blur-lg border border-gray-100 rounded-2xl shadow-2xl p-2 flex justify-around">
                <Link href="/" className="p-3 text-primary flex flex-col items-center">
                    <span className="text-xl">🏠</span>
                    <span className="text-[10px] uppercase font-bold mt-1">Ana Sayfa</span>
                </Link>
                <Link href="/hizmetler" className="p-3 text-gray-400 flex flex-col items-center">
                    <span className="text-xl">💅</span>
                    <span className="text-[10px] uppercase font-bold mt-1">Hizmetler</span>
                </Link>
                <Link href="/randevu" className="p-3 text-gray-400 flex flex-col items-center">
                    <span className="text-xl">📅</span>
                    <span className="text-[10px] uppercase font-bold mt-1">Randevu</span>
                </Link>
            </div>
        </footer>
    )
}
