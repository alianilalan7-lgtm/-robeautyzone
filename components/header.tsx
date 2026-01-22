import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white border-b border-primary-100 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="font-display text-2xl text-primary-700">
                        IRO beautyzone
                    </Link>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/hizmetler"
                            className="text-primary-700 hover:text-primary-900 transition-colors font-medium"
                        >
                            Hizmetler
                        </Link>
                        <Link
                            href="/galeri"
                            className="text-primary-700 hover:text-primary-900 transition-colors font-medium"
                        >
                            Galeri
                        </Link>
                        <Link
                            href="/hakkimizda"
                            className="text-primary-700 hover:text-primary-900 transition-colors font-medium"
                        >
                            Hakkımızda
                        </Link>
                        <Link
                            href="/randevu"
                            className="bg-primary-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                        >
                            Randevu Al
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button className="md:hidden text-primary-700">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}
