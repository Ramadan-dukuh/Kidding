import React, { useState } from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <div className="w-10 h-10 lg:w-12 lg:h-12  flex items-center justify-center ">
                            <img src="/Logo Kidding.png" alt="" />
                        </div>
                        <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                            Kidding
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-1 lg:gap-2">
                            {[
                                { href: "#home", text: "Beranda" },
                                { href: "#template", text: "Template" },
                                { href: "#harga", text: "Harga" },
                                { href: "#faq", text: "FAQ" },
                                { href: "#kontak", text: "Kontak" }
                            ].map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href={item.href} 
                                        className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 relative group"
                                    >
                                        {item.text}
                                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen 
                        ? "max-h-96 opacity-100 pb-6" 
                        : "max-h-0 opacity-0 overflow-hidden"
                }`}>
                    <nav className="pt-4 border-t border-gray-100">
                        <ul className="space-y-2">
                            {[
                                { href: "#home", text: "Beranda" },
                                { href: "#template", text: "Template" },
                                { href: "#harga", text: "Harga" },
                                { href: "#faq", text: "FAQ" },
                                { href: "#kontak", text: "Kontak" }
                            ].map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href={item.href}
                                        onClick={closeMenu}
                                        className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 border-l-4 border-transparent hover:border-blue-500"
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;