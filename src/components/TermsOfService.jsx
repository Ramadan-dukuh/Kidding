import React from "react";
import { Link } from "react-router-dom";

function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm font-medium text-gray-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-900">Ketentuan Layanan</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="px-8 py-10 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">Ketentuan Layanan</h1>
              <p className="text-indigo-100 max-w-2xl leading-relaxed">
                Syarat dan ketentuan penggunaan layanan jasa pembuatan website di Kidding.
              </p>
              <div className="mt-6 flex items-center text-sm text-indigo-100/80">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Berlaku efektif sejak: 16 April 2026
              </div>
            </div>

            {/* Body */}
            <div className="p-8 lg:p-12">
              <div className="prose prose-indigo max-w-none text-gray-600 space-y-8">
                
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Penerimaan Ketentuan</h2>
                  <p>
                    Dengan menggunakan layanan <strong>Kidding</strong>, Anda dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku di bawah ini. Jika Anda tidak menyetujui salah satu poin, mohon untuk tidak melanjutkan penggunaan layanan kami.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Ruang Lingkup Layanan</h2>
                  <p>Kidding menyediakan jasa pembuatan website portfolio, landing page, dan company profile yang meliputi:</p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>Penggunaan template yang telah disediakan atau custom sesuai paket.</li>
                    <li>Setup hosting gratis (sesuai ketentuan paket).</li>
                    <li>Integrasi domain (subdomain atau domain custom).</li>
                    <li>Gratis 2 kali revisi minor untuk memastikan hasil sesuai keinginan.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Proses & Waktu Pengerjaan</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Pengerjaan dilakukan setelah klien memberikan data lengkap (foto, teks, dll) dan melakukan pembayaran.</li>
                    <li>Estimasi waktu pengerjaan adalah <strong>1 hingga 3 hari kerja</strong>, tergantung pada antrean dan kompleksitas.</li>
                    <li>Kidding tidak bertanggung jawab atas keterlambatan yang disebabkan oleh keterlambatan pengiriman data dari pihak klien.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Kebijakan Pembayaran & Pembatalan</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Pembayaran dilakukan di awal atau sesuai kesepakatan sebelum pengerjaan dimulai.</li>
                    <li>Pesanan yang sudah masuk tahap pengerjaan <strong>tidak dapat dibatalkan</strong> atau dikembalikan uangnya (refund).</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Hak Cipta & Kepemilikan</h2>
                  <p>
                    Klien memiliki hak komersial penuh atas konten yang diberikan. Kidding berhak menampilkan hasil pekerjaan di portfolio kami untuk tujuan promosi, kecuali jika ada permintaan khusus dari klien untuk merahasiakannya.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Batasan Tanggung Jawab</h2>
                  <p>
                    Kidding tidak bertanggung jawab atas kerugian dalam bentuk apapun yang timbul akibat penyalahgunaan website oleh klien atau gangguan teknis dari pihak ketiga (seperti penyedia hosting/domain pihak luar).
                  </p>
                </section>

                <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100 italic text-center">
                  "Kami berkomitmen memberikan hasil terbaik untuk membantu karir profesional Anda."
                </div>

              </div>
            </div>

            {/* Footer Content */}
            <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500">
                © 2026 Kidding. Ketentuan Layanan.
              </p>
              <Link 
                to="/" 
                className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-700 transition-colors"
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

export default TermsOfService;
