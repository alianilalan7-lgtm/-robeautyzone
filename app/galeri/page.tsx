export default function GaleriPage() {
    return (
        <div className="min-h-screen bg-cream-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="font-display text-4xl md:text-5xl text-primary-800 text-center mb-8">
                    Galeri
                </h1>

                <p className="text-center text-primary-600 mb-16 max-w-2xl mx-auto">
                    İşlerimizden örnekler. Her tırnak bir sanat eseri.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {mockGallery.map((item, index) => (
                        <div
                            key={index}
                            className="aspect-square bg-gradient-to-br from-primary-100 to-cream-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
                        >
                            <div className="w-full h-full bg-primary-900/5 group-hover:bg-primary-900/0 transition-colors flex items-center justify-center">
                                <span className="text-4xl opacity-50 group-hover:opacity-100 transition-opacity">
                                    💅
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const mockGallery = Array(12).fill(null)
