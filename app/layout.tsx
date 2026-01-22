import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: '--font-playfair',
    style: ['normal', 'italic'],
    weight: ['400', '700'],
});

export const metadata: Metadata = {
    title: "IRO beautyzone | Premium Nail Art Experience",
    description: "İstanbul'un kalbindeki premium nail art stüdyosu. Profesyonel nail art ve tırnak bakım hizmetleri.",
    keywords: ["nail art", "tırnak bakımı", "manikür", "pedikür", "kalıcı oje", "istanbul"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="font-sans antialiased flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
