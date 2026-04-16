import React from "react";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation Breadcrumb (Optional but good) */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm font-medium text-gray-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-900">Kebijakan Privasi</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header Content */}
            <div className="px-8 py-10 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">Kebijakan Privasi</h1>
              <p className="text-blue-100 max-w-2xl leading-relaxed">
                Informasi mengenai bagaimana Kidding menjaga dan melindungi data pribadi Anda.
              </p>
              <div className="mt-6 flex items-center text-sm text-blue-100/80">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Terakhir diperbarui: 16 April 2026
              </div>
            </div>

            {/* Body Content */}
            <div className="p-8 lg:p-12">
              <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
                
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-base">1</span>
                    Pendahuluan
                  </h2>
                  <p className="leading-relaxed">
                    Selamat datang di <strong>Kidding</strong>. Kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
                    Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat menggunakan layanan kami di website ini. 
                    Dengan menggunakan layanan kami, Anda dianggap menyetujui praktik yang dijelaskan dalam kebijakan ini.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-base">2</span>
                    Informasi yang Kami Kumpulkan
                  </h2>
                  <p className="mb-4">Kami mengumpulkan informasi terbatas yang Anda berikan secara sukarela melalui formulir kontak kami, yang mencakup:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: "👤", text: "Nama Lengkap" },
                      { icon: "📧", text: "Alamat Email" },
                      { icon: "📱", text: "Nomor WhatsApp/Telepon" },
                      { icon: "📦", text: "Detail Paket & Pesan" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                        <span className="text-xl mr-3">{item.icon}</span>
                        <span className="font-medium text-gray-800">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-base">3</span>
                    Penggunaan Informasi
                  </h2>
                  <p>Informasi yang kami kumpulkan digunakan semata-mata untuk:</p>
                  <ul className="list-none space-y-3 mt-4">
                    {[
                      "Menghubungi Anda kembali terkait permintaan layanan kami.",
                      "Memberikan informasi mengenai paket pembuatan website portfolio.",
                      "Proses administrasi dan pengerjaan proyek website Anda.",
                      "Meningkatkan kualitas layanan dan pengalaman pengguna."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-base">4</span>
                    Perlindungan Data
                  </h2>
                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                    <p className="text-blue-900 leading-relaxed italic">
                      "Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang wajar untuk menjaga keamanan data pribadi Anda. 
                      Kami tidak akan menjual, menyewakan, atau memberikan data pribadi Anda kepada pihak ketiga manapun tanpa izin Anda, kecuali diwajibkan oleh hukum."
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-base">5</span>
                    Hubungi Kami
                  </h2>
                  <p className="mb-6 text-gray-600">Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, silakan hubungi kami melalui saluran resmi berikut:</p>
                  <div className="space-y-4">
                    <a href="https://wa.me/62895359482091" target="_blank" rel="noreferrer" className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all group">
                       <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">📱</div>
                       <div>
                         <div className="text-sm text-gray-500">WhatsApp</div>
                         <div className="font-bold text-gray-900">+62 895-3584-82091</div>
                       </div>
                    </a>
                    <a href="mailto:kidding.web@gmail.com" className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                       <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">📧</div>
                       <div>
                         <div className="text-sm text-gray-500">Email</div>
                         <div className="font-bold text-gray-900">kidding.web@gmail.com</div>
                       </div>
                    </a>
                  </div>
                </section>
              </div>
            </div>

            {/* Footer Content */}
            <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500 text-center sm:text-left">
                © 2026 Kidding. Hak Cipta Dilindungi.
              </p>
              <Link 
                to="/" 
                className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
