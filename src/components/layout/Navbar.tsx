import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Tienda', href: '/shop' },
    { label: 'Destacados', href: '/featured' },
    { label: 'Accesorios', href: '/accessories' },
];

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Announcement Bar */}
            <div className="bg-gray-200 text-center py-2 text-xs font-medium tracking-wide text-gray-600">
                Envío gratis en pedidos superiores a $100
            </div>

            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-2xl font-bold tracking-tighter text-mobix-black">
                                MOBIX
                            </Link>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex space-x-8">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.label}
                                    to={link.href}
                                    className="text-sm font-medium text-gray-500 hover:text-mobix-black transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Icons */}
                        <div className="flex items-center space-x-4 sm:space-x-6 text-gray-600">
                            <button className="hover:text-mobix-black transition-colors">
                                <span className="material-icons text-[20px]">search</span>
                            </button>
                            <button className="hidden sm:block hover:text-mobix-black transition-colors">
                                <span className="material-icons text-[20px]">person_outline</span>
                            </button>
                            <button className="hidden sm:block hover:text-mobix-black transition-colors">
                                <span className="material-icons text-[20px]">favorite_border</span>
                            </button>
                            <button className="hover:text-mobix-black transition-colors relative">
                                <span className="material-icons text-[20px]">shopping_bag</span>
                                <span className="absolute -top-1 -right-1 bg-mobix-black text-white text-[10px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">
                                    2
                                </span>
                            </button>
                            
                            {/* Mobile Menu Button */}
                            <button 
                                className="md:hidden hover:text-mobix-black transition-colors"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <span className="material-icons text-[24px]">{isMenuOpen ? 'close' : 'menu'}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-100 bg-white absolute w-full left-0 shadow-lg">
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.href}
                                    className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};