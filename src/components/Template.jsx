import { useState } from "react";

function Template() {
  const templates = [
    {
      id: 1,
      title: "Portfolio Developer Pro",
      description:
        "Template portfolio modern untuk developer dan programmer dengan showcase project terbaik.",
      category: "Portfolio",
      features: [
        "Responsive Design",
        "Dark/Light Mode",
        "Project Showcase",
        "Contact Form",
        "Skills Section",
      ],
      price: "Rp 299.000",
      image: "/template1.jpg",
      popular: true,
      recommended: false,
      icon: "code",
      rating: 5,
      demoUrl: "https://demo-portfolio.vercel.app",
    },
    {
      id: 2,
      title: "Portfolio Designer Creative",
      description:
        "Tampilkan karya desain Anda dengan layout yang menarik dan interaktif.",
      category: "Portfolio",
      features: [
        "Gallery Layout",
        "Animation Effects",
        "Typography Focus",
        "Mobile Optimized",
      ],
      price: "Rp 299.000",
      image: "/template2.jpg",
      popular: true,
      recommended: false,
      icon: "palette",
      rating: 5,
    },
    {
      id: 3,
      title: "Portfolio Personal Minimalis",
      description:
        "Design clean dan professional untuk fresh graduate dan mahasiswa.",
      category: "Portfolio",
      features: [
        "Clean Design",
        "Resume Section",
        "Achievement Display",
        "Social Links",
      ],
      price: "Rp 299.000",
      image: "/template3.jpg",
      popular: true,
      recommended: false,
      icon: "user",
      rating: 4,
    },
    {
      id: 4,
      title: "Undangan Pernikahan Elegant",
      description:
        "Template undangan digital yang elegan dengan animasi romantic dan RSVP system.",
      category: "Undangan",
      features: [
        "RSVP Form",
        "Photo Gallery",
        "Love Story Timeline",
        "Music Player",
      ],
      price: "Rp 450.000",
      image: "/template4.jpg",
      popular: false,
      recommended: false,
      icon: "heart",
      rating: 5,
    },
    {
      id: 5,
      title: "Undangan Acara Modern",
      description:
        "Perfect untuk undangan ulang tahun, graduation, atau acara spesial lainnya.",
      category: "Undangan",
      features: [
        "Event Details",
        "Location Map",
        "Guest List",
        "Countdown Timer",
      ],
      price: "Rp 350.000",
      image: "/template5.jpg",
      popular: false,
      recommended: false,
      icon: "calendar",
      rating: 4,
    },
    {
      id: 6,
      title: "Web Kado Surprise Romance",
      description:
        "Buat kejutan spesial untuk orang tersayang dengan website kado yang romantis.",
      category: "Web Kado",
      features: [
        "Surprise Animation",
        "Photo Memories",
        "Love Messages",
        "Music Background",
      ],
      price: "Rp 550.000",
      image: "/template6.jpg",
      popular: false,
      recommended: false,
      icon: "gift",
      rating: 5,
    },
  ];

  // Hanya kategori yang diinginkan
  const categories = ["Portfolio", "Undangan", "Web Kado"];
  const [activeCategory, setActiveCategory] = useState("Portfolio");

  const filteredTemplates = templates.filter(
    (template) =>
      (activeCategory === "Portfolio" && template.category === "Portfolio") ||
      (activeCategory === "Undangan" && template.category === "Undangan") ||
      (activeCategory === "Web Kado" && template.category === "Web Kado")
  );

  // Urutkan agar Portfolio selalu di depan
  const sortedTemplates = [
    ...templates.filter((t) => t.category === "Portfolio"),
    ...templates.filter((t) => t.category === "Undangan"),
    ...templates.filter((t) => t.category === "Web Kado"),
  ].filter((t) => t.category === activeCategory);

  return (
    <section
      id="template"
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pilih Template
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Favoritmu
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Koleksi template profesional untuk berbagai kebutuhan digital Anda
          </p>
          {/* Highlight Portfolio */}
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 mb-8 max-w-4xl mx-auto border border-blue-200">
            <div className="flex items-center justify-center mb-2">
              <svg
                className="w-8 h-8 text-blue-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4"
                />
              </svg>
              <h3 className="text-xl font-bold text-blue-800">
                Portfolio Website - Pilihan Utama!
              </h3>
            </div>
            <p className="text-blue-700 font-medium">
              Khusus untuk siswa SMK & fresh graduate. Tingkatkan peluang kerja
              dengan portfolio website profesional!
            </p>
          </div>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg"
                }`}
              >
                {category === "Portfolio" && (
                  <svg
                    className="w-4 h-4 inline mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                )}
                {category === "Undangan" && (
                  <svg
                    className="w-4 h-4 inline mr-2 text-pink-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                )}
                {category === "Web Kado" && (
                  <svg
                    className="w-4 h-4 inline mr-2 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                )}
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sortedTemplates.map((template) => (
            <div
              key={template.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative ${
                template.category === "Portfolio"
                  ? "ring-2 ring-blue-200 hover:ring-blue-400"
                  : ""
              }`}
            >
              {/* Recommended Badge for Portfolio */}
              {template.recommended && template.category === "Portfolio" && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                    REKOMENDASI
                  </div>
                </div>
              )}

              {/* Popular Badge */}
              {template.popular && !template.recommended && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                  </svg>
                  Popular
                </div>
              )}

              {/* Price Badge */}
              <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                {template.price}
              </div>

              {/* Image Container */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                <div
                  className={`w-full h-48 sm:h-56 flex items-center justify-center ${
                    template.category === "Portfolio"
                      ? "bg-gradient-to-br from-blue-100 to-indigo-200"
                      : template.category === "Undangan"
                      ? "bg-gradient-to-br from-pink-100 to-rose-200"
                      : "bg-gradient-to-br from-purple-100 to-violet-200"
                  }`}
                >
                  {/* Template Icon */}
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                      {template.icon === "code" && (
                        <svg
                          className="w-8 h-8 text-blue-600"
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
                      )}
                      {template.icon === "palette" && (
                        <svg
                          className="w-8 h-8 text-blue-600"
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
                      )}
                      {template.icon === "user" && (
                        <svg
                          className="w-8 h-8 text-blue-600"
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
                      )}
                      {template.icon === "heart" && (
                        <svg
                          className="w-8 h-8 text-pink-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      )}
                      {template.icon === "calendar" && (
                        <svg
                          className="w-8 h-8 text-pink-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                      {template.icon === "gift" && (
                        <svg
                          className="w-8 h-8 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                          />
                        </svg>
                      )}
                    </div>
                    <div
                      className={`text-xs font-medium ${
                        template.category === "Portfolio"
                          ? "text-blue-700"
                          : template.category === "Undangan"
                          ? "text-pink-700"
                          : "text-purple-700"
                      }`}
                    >
                      {template.category} Template
                    </div>
                  </div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="space-y-3 text-center">
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      Preview
                    </button>
                    <a
                      href={template.demoUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
                    >
                      <svg
                        className="w-4 h-4 inline mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      Lihat Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Template;
