import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-primary-900 text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1">
                        <h3 className="font-display text-2xl mb-4">IRO beautyzone</h3>
                        <p className="text-primary-200 text-sm">
                            Premium nail art ve tırnak bakım hizmetleri
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-medium mb-4">Hızlı Erişim</h4>
                        <ul className="space-y-2 text-sm text-primary-200">
                            <li>
                                <Link href="/hizmetler" className="hover:text-white transition-colors">
                                    Hizmetler
                                </Link>
                            </li>
                            <li>
                                <Link href="/galeri" className="hover:text-white transition-colors">
                                    Galeri
                                </Link>
                            </li>
                            <li>
                                <Link href="/randevu" className="hover:text-white transition-colors">
                                    Randevu Al
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* About */}
                    <div>
                        <h4 className="font-medium mb-4">Kurumsal</h4>
                        <ul className="space-y-2 text-sm text-primary-200">
                            <li>
                                <Link href="/hakkimizda" className="hover:text-white transition-colors">
                                    Hakkımızda
                                </Link>
                            </li>
                            <li>
                                <Link href="/misyon" className="hover:text-white transition-colors">
                                    Misyon & Vizyon
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-medium mb-4">Yasal</h4>
                        <ul className="space-y-2 text-sm text-primary-200">
                            <li>
                                <Link href="/kvkk" className="hover:text-white transition-colors">
                                    KVKK
                                </Link>
                            </li>
                            <li>
                                <Link href="/aydinlatma-metni" className="hover:text-white transition-colors">
                                    Aydınlatma Metni
                                </Link>
                            </li>
                            <li>
                                <Link href="/acik-riza" className="hover:text-white transition-colors">
                                    Açık Rıza
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-800 mt-8 pt-8 text-center text-sm text-primary-300">
                    <p>&copy; 2026 IRO beautyzone. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
}
