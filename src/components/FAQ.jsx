import { useState } from "react";

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  // FAQ singkat, tanpa kategori, pakai icon SVG
  const faqData = [
    {
      id: 1,
      question: "Apakah web ini gratis hosting dan domain?",
      answer:
        "Ya, semua paket sudah termasuk hosting gratis di Vercel dan domain .my.id gratis tahun pertama.",
      icon: (
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
            d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v7m-7-7h14"
          />
        </svg>
      ),
    },
    {
      id: 2,
      question: "Apakah websitenya bisa diakses di HP dan laptop?",
      answer:
        "Tentu! Semua website yang kami buat sudah responsive dan mobile-friendly.",
      icon: (
        <svg
          className="w-6 h-6 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect width="16" height="12" x="4" y="6" rx="2" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 18h8"
          />
        </svg>
      ),
    },
    {
      id: 3,
      question: "Apakah websitenya statis atau bisa update sendiri?",
      answer:
        "Semua website bersifat statis (tanpa database/admin panel). Update konten bisa dibantu oleh tim kami selama masa support.",
      icon: (
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
            d="M4 4h16v16H4V4zm4 8h8"
          />
        </svg>
      ),
    },
    {
      id: 4,
      question: "Bagaimana cara pesan dan pembayaran?",
      answer:
        "Pesan bisa lewat WhatsApp atau form kontak. Pembayaran via transfer bank atau e-wallet.",
      icon: (
        <svg
          className="w-6 h-6 text-orange-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2z"
          />
        </svg>
      ),
    },
    {
      id: 5,
      question: "Apakah ada biaya tahunan?",
      answer:
        "Tahun pertama gratis domain & hosting. Tahun berikutnya hanya biaya domain (sekitar Rp12.000/tahun untuk .my.id). Hosting tetap gratis.",
      icon: (
        <svg
          className="w-6 h-6 text-yellow-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3"
          />
        </svg>
      ),
    },
  ];

  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <section
      id="faq"
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl mb-6">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01"
              />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            FAQ{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Kidding Web
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Pertanyaan yang sering ditanyakan seputar layanan web portfolio
            statis Kidding.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggleQuestion(item.id)}
                className="w-full p-6 text-left flex items-start gap-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-1 pr-4">
                    {item.question}
                  </h3>
                </div>
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center transition-transform duration-300 ${
                    openQuestion === item.id ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openQuestion === item.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-6 pb-6 pl-20">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
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
                d="M8 12h.01M12 12h.01M16 12h.01"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Masih Bingung? Tanya Kami!
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Hubungi tim Kidding Web untuk konsultasi gratis seputar pembuatan
            web portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontak"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-8 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01"
                />
              </svg>
              Hubungi Kami
            </a>
            <a
              href="https://wa.me/+62895359482091"
              className="inline-flex items-center justify-center border-2 border-green-500 text-green-600 py-3 px-8 rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300 font-semibold"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
