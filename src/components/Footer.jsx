import { useState } from "react";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Pesan berhasil dikirim! Kami akan menghubungi Anda segera.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        package: "",
        message: "",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: "📱",
      title: "WhatsApp",
      value: "+62 895-3584-82091",
      link: "https://wa.me/62895359482091",
    },
    {
      icon: "📧",
      title: "Email",
      value: "kidding.web@gmail.com",
      link: "mailto:kidding.web@gmail.com",
    },
    {
      icon: "📍",
      title: "Lokasi",
      value: "Jakarta, Indonesia",
      link: "https://maps.google.com",
    },
    {
      icon: "⏰",
      title: "Jam Kerja",
      value: "Senin - Sabtu, 09:00 - 21:00",
      link: null,
    },
  ];

  const quickLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Template", href: "#template" },
    { name: "Harga", href: "#harga" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontak", href: "#kontak" },
  ];

  const services = [
    { name: "Kidding", href: "#" },
    { name: "Landing Page", href: "#" },
    { name: "Company Profile", href: "#" },
    { name: "E-Commerce", href: "#" },
    { name: "Custom Website", href: "#" },
  ];

  const socialMedia = [
    {
      name: "Instagram",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" strokeWidth={2} />
          <circle cx="12" cy="12" r="5" strokeWidth={2} />
          <circle cx="17" cy="7" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      ),
      href: "https://instagram.com/kidding.web",
      color: "hover:text-pink-500",
    },
    // {
    //   name: "Facebook",
    //   icon: (
    //     <svg
    //       className="w-5 h-5"
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //     >
    //       <rect width="20" height="20" x="2" y="2" rx="5" strokeWidth={2} />
    //       <path strokeWidth={2} d="M16 8h-2a2 2 0 00-2 2v2h4l-.5 3H12v7" />
    //     </svg>
    //   ),
    //   href: "https://facebook.com/webportfolio.id",
    //   color: "hover:text-blue-600",
    // },
    // {
    //   name: "Twitter",
    //   icon: (
    //     <svg
    //       className="w-5 h-5"
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //     >
    //       <path
    //         strokeWidth={2}
    //         d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1.64a9.09 9.09 0 01-2.88 1.1A4.48 4.48 0 0012 7.48v1A12.94 12.94 0 013 4.11s-4 9 5 13a13.07 13.07 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
    //       />
    //     </svg>
    //   ),
    //   href: "https://twitter.com/webportfolio_id",
    //   color: "hover:text-blue-400",
    // },
    {
      name: "LinkedIn",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" strokeWidth={2} />
          <path
            strokeWidth={2}
            d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6z"
          />
          <circle cx="8" cy="8" r="2" strokeWidth={2} />
        </svg>
      ),
      href: "https://www.linkedin.com/in/muhamad-rizki-ramadan-a83117289/",
      color: "hover:text-blue-700",
    },
    {
      name: "Email",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect width="20" height="16" x="2" y="4" rx="3" strokeWidth={2} />
          <path strokeWidth={2} d="M22 6l-10 7L2 6" />
        </svg>
      ),
      href: "mailto:kidding.web@gmail.com",
      color: "hover:text-yellow-400",
    },
  ];

  return (
    <section
      id="kontak"
      className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Footer */}
      <div className="relative border-t border-white/20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12  rounded-xl flex items-center justify-center mr-3 ">
                  <img src="/Logo_Submark 1.png" alt="Kidding Logo" />
                </div>
                <h3 className="text-2xl font-bold text-white">Kidding</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Solusi terpercaya untuk pembuatan website portfolio profesional.
                Kami membantu siswa SMK dan fresh graduate tampil lebih percaya
                diri dengan website portfolio yang menarik dan modern.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 ${social.color} transition-colors hover:bg-white/20`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Layanan</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Kidding. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
