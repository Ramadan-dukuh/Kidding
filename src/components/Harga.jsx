function Harga() {
  const pricingPlans = [
    {
      name: "Basic",
      price: "39",
      originalPrice: "59",
      popular: false,
      description:
        "Cocok untuk pelajar/mahasiswa yang ingin punya web portofolio sederhana.",
      features: [
        "1 Halaman Portfolio Statis",
        "Responsive Design (Mobile & Desktop)",
        "Proses 1-3 hari",                
        "Hosting gratis (Vercel)",
        "1x Revisi minor",
      ],
      buttonText: "Mulai Sekarang",
      color: "blue",
      icon: (
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      name: "Standar",
      price: "49",
      originalPrice: "79",
      popular: true,
      description:
        "Lebih lengkap, cocok untuk yang ingin tampil lebih profesional.",
      features: [
        "Semua fitur Basic",
        "3 Halaman Statis (Home, About, Portfolio)",
        "Contact Form (via Email/WhatsApp)",
        "2x Revisi minor",
        "Custom warna & layout",
      ],
      buttonText: "Paling Populer",
      color: "indigo",
      icon: (
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
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2M9 3h10a2 2 0 012 2v12a4 4 0 01-4 4H9"
          />
        </svg>
      ),
    },
    {
      name: "Premium",
      price: "59",
      originalPrice: "99",
      popular: false,
      description: "Desain custom, cocok untuk personal branding maksimal.",
      features: [
        "Semua fitur Standar",
        "5 Halaman Statis Custom",
        "Desain 100% Custom",
        "Unlimited revisi minor selama proses",
        "Konsultasi desain gratis",
      ],
      buttonText: "Fitur Terlengkap",
      color: "purple",
      icon: (
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="harga"
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-200 rounded-full opacity-10 animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl mb-6">
            <span className="text-2xl">💰</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Paket
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Harga
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Pilih paket yang sesuai dengan kebutuhan dan budget Anda. Semua
            paket sudah termasuk hosting gratis!
          </p>

          {/* Discount Banner */}
          <div className="inline-flex items-center bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-full shadow-lg animate-bounce">
            <span className="text-sm font-semibold">
              🔥 Diskon 30% - Terbatas!
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                plan.popular
                  ? "scale-105 border-2 border-indigo-500 shadow-indigo-200"
                  : "border border-gray-200 hover:border-blue-300"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    🏆 TERPOPULER
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${
                      plan.color === "blue"
                        ? "from-blue-100 to-blue-200"
                        : plan.color === "indigo"
                        ? "from-indigo-100 to-indigo-200"
                        : "from-purple-100 to-purple-200"
                    } rounded-2xl mb-4`}
                  >
                    <span className="text-2xl">{plan.icon}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {plan.description}
                  </p>

                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-gray-400 line-through text-lg">
                        Rp{plan.originalPrice}rb
                      </span>
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded-lg text-xs font-semibold">
                        -30%
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center">
                      <span className="text-sm text-gray-500">Rp</span>
                      <span
                        className={`text-4xl font-bold ${
                          plan.color === "blue"
                            ? "text-blue-600"
                            : plan.color === "indigo"
                            ? "text-indigo-600"
                            : "text-purple-600"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span className="text-sm text-gray-500">rb</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      *Harga sudah termasuk hosting & domain
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Yang Anda Dapatkan:
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${
                            plan.color === "blue"
                              ? "from-blue-500 to-blue-600"
                              : plan.color === "indigo"
                              ? "from-indigo-500 to-indigo-600"
                              : "from-purple-500 to-purple-600"
                          } flex items-center justify-center mt-0.5`}
                        >
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href="#kontak"
                  className={`block w-full text-center py-4 px-6 rounded-2xl font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                    plan.popular
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                      : plan.color === "blue"
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                      : "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            ✨ Semua Paket Termasuk:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Fast Loading</h4>
              <p className="text-sm text-gray-600">
                Website statis super cepat
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">
                SSL Certificate
              </h4>
              <p className="text-sm text-gray-600">Akses https gratis</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zM2 20h20"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Support 1 Bulan
              </h4>
              <p className="text-sm text-gray-600">
                Bantuan setting & revisi minor
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M3 6h18M3 14h18M3 18h18"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Hosting Di Vercel</h4>
              <p className="text-sm text-gray-600">Gratis dan mudah</p>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
       
         
      </div>
    </section>
  );
}

export default Harga;
