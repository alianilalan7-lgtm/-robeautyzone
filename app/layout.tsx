import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: '--font-playfair',
});

export const metadata: Metadata = {
    title: "IRO beautyzone - Premium Nail Art Salon",
    description: "Profesyonel nail art ve tırnak bakım hizmetleri. İstanbul'un en iyi nail art salonu.",
    keywords: ["nail art", "tırnak bakımı", "manikür", "pedikür", "kalıcı oje", "istanbul"],
};

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
            <body className="font-sans antialiased flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
