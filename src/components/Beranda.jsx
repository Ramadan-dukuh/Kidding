function Beranda() {
    return (
        <div>
            {/* Hero Section */}
            <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 lg:py-24 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                        {/* Left Content */}
                        <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                                    Bikin Website{' '}
                                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                        Portofolio Profesional
                                    </span>
                                    , Dapat Kerja Lebih Cepat!
                                </h1>
                                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                                    Khusus untuk siswa SMK dan fresh graduate. Harga terjangkau, proses 1-3 hari, 
                                    <span className="font-semibold text-blue-600"> gratis 2x revisi</span> dan 
                                    <span className="font-semibold text-green-600"> hosting gratis!</span>
                                </p>
                            </div>
                            
                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a
                                    href="#template"
                                    className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-8 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    <span>Lihat Template</span>
                                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                                <a
                                    href="#kontak"
                                    className="group inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-8 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    <span>Hubungi Kami</span>
                                </a>
                            </div>
                            
                            {/* Stats */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600">100+</div>
                                    <div className="text-sm text-gray-500">Portfolio Dibuat</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-600">24 Jam</div>
                                    <div className="text-sm text-gray-500">Rata-rata Selesai</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-indigo-600">98%</div>
                                    <div className="text-sm text-gray-500">Kepuasan Klien</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Image */}
                        <div className="flex-1 flex justify-center lg:justify-end">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl transform rotate-6 opacity-20"></div>
                                <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                                        <img
                                            src="/lookback.jpeg"
                                            alt="Portfolio Website"
                                            className="w-full h-full object-contain-coverrounded-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Kenapa Pilih Kami?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Kami memberikan solusi terbaik untuk kebutuhan portfolio website Anda
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {/* Feature 1 */}
                        <div className="group text-center p-6 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
                            <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">💰</span>
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-gray-900">Harga Terjangkau</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Mulai dari <span className="font-semibold text-blue-600">Rp29rb</span>, 
                                cocok untuk budget pelajar dan fresh graduate!
                            </p>
                        </div>
                        
                        {/* Feature 2 */}
                        <div className="group text-center p-6 rounded-2xl hover:bg-green-50 transition-all duration-300 hover:shadow-lg">
                            <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-gray-900">Proses Kilat</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Selesai dalam <span className="font-semibold text-green-600">1-3 hari</span>, 
                                termasuk revisi dan setup hosting.
                            </p>
                        </div>
                        
                        {/* Feature 3 */}
                        <div className="group text-center p-6 rounded-2xl hover:bg-indigo-50 transition-all duration-300 hover:shadow-lg md:col-span-2 lg:col-span-1">
                            <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">📱</span>
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-gray-900">Mobile-Friendly</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Tampilan <span className="font-semibold text-indigo-600">sempurna </span> 
                                 di semua perangkat, HP hingga desktop.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Beranda;