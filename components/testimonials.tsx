
'use client'


import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
    {
        name: "Sıl...k",
        body: "Biraz yavaş ilerledik ama ilgili ve tatlıydı teşekkür ederim.",
        rating: 5,
    },
    {
        name: "Beh...r",
        body: "Her zamanki gibi çok mutlu ayrıldım Nazlıcan teşekkür ederim Iro Beauty çok teşekkür ediyorum.",
        rating: 5,
    },
    {
        name: "Dam...y",
        body: "Daha fazla yıldız olsa hepsini vermek isterdim.",
        rating: 5,
    },
    {
        name: "Sim...l",
        body: "Kübra hanıma geliyorum. Her seferinde çok memnun ayrılıyorum. Tavsiye ederim.",
        rating: 5,
    },
    {
        name: "Hil...s",
        body: "Memnun kalmak ne kelime bayıldım tekrar ve tekrar gelecegim (:",
        rating: 5,
    },
    {
        name: "Ece...y",
        body: "Kübra’dan başkasını yıllardır tercih etmiyorum asla. İrem hanım’ın ilgisi ve tatlı neşesiyle kendinizi terapide hissettiğiniz bir yer.",
        rating: 5,
    },
    {
        name: "Hül...u",
        body: "Her zaman çok başarılı.",
        rating: 5,
    },
    {
        name: "Bey...n",
        body: "Sen olmasan napardım Kübra ♥️",
        rating: 5,
    },
    {
        name: "Zeh...r",
        body: "Her zamanki gibi güleryüzünüz, Nasibanın titizliği için sonsuz teşekkürler ambiyansınız için ayrıca teşekkürler.",
        rating: 5,
    },
    {
        name: "Bur...i",
        body: "Pedikür için Kübra Hanım’a gittim; kendisi hem çok ilgili hem de çok tatlı. İşlemi çok detaylı ve acele etmeden özenle yaptı. Teşekkür ediyorum.",
        rating: 5,
    },
    {
        name: "Ayş...e",
        body: "Güler yüzlü hizmet, tavsiye ederim.",
        rating: 5,
    },
    {
        name: "Nur...n",
        body: "Memnun kaldım.",
        rating: 5,
    },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
    name,
    body,
    rating,
}: {
    name: string
    body: string
    rating: number
}) => {
    return (
        <Card className="w-80 cursor-pointer overflow-hidden mx-4 hover:-translate-y-1 transition-transform duration-300 bg-[#F7F5F4] dark:bg-[#F7F5F4] border-none shadow-lg">
            <CardContent className="p-6">
                <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium text-gray-900">
                            {name}
                        </figcaption>
                        <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span
                                    key={i}
                                    className={cn(
                                        "text-xs material-symbols-outlined",
                                        i < rating ? "text-yellow-500 fill-current" : "text-gray-300"
                                    )}
                                    style={{ fontVariationSettings: "'FILL' 1" }}
                                >
                                    star
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <blockquote className="mt-2 text-sm leading-relaxed text-gray-600">
                    {body}
                </blockquote>
            </CardContent>
        </Card>
    )
}

export function Testimonials() {
    return (
        <section className="py-24 overflow-hidden bg-[#8D776C] relative">
            <div className="container px-6 mx-auto mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                    Müşterilerimiz Ne Diyor?
                </h2>
                <p className="text-lg text-white/80">
                    Binlerce mutlu müşterimizin deneyimlerine göz atın.
                </p>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row w-full">
                    <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] w-max">
                        {firstRow.map((review, i) => (
                            <ReviewCard key={i} {...review} />
                        ))}
                    </div>
                    <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] w-max ml-[var(--gap)]">
                        {firstRow.map((review, i) => (
                            <ReviewCard key={i + 100} {...review} />
                        ))}
                    </div>
                </div>

                <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row w-full mt-4" dir="rtl">
                    <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] w-max">
                        {secondRow.map((review, i) => (
                            <ReviewCard key={i} {...review} />
                        ))}
                    </div>
                    <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] w-max ml-[var(--gap)]">
                        {secondRow.map((review, i) => (
                            <ReviewCard key={i + 100} {...review} />
                        ))}
                    </div>
                </div>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#8D776C] to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#8D776C] to-transparent"></div>
            </div>

            {/* Animation Styles */}
            <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - var(--gap))); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        [dir="rtl"] .animate-marquee {
          animation-direction: reverse;
        }
      `}</style>
        </section>
    )
}

