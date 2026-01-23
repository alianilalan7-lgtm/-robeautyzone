import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
    weight: ['300', '400', '500', '600'],
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    variable: '--font-cormorant',
    style: ['normal', 'italic'],
    weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
    title: "IRO beautyzone | Premium Nail Art Experience",
    description: "İstanbul'un kalbindeki premium nail art stüdyosu. Profesyonel nail art ve tırnak bakım hizmetleri.",
    keywords: ["nail art", "tırnak bakımı", "manikür", "pedikür", "kalıcı oje", "istanbul"],
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.ico',
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr" className={`${inter.variable} ${cormorant.variable} light`} style={{ colorScheme: 'light' }} suppressHydrationWarning>
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body
                className="font-sans antialiased flex flex-col min-h-screen bg-background-light text-gray-900"
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    <main className="flex-1 pt-20">
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
