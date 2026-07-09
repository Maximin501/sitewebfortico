'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/methodologie', label: 'Méthodologie' },
    { href: '/recrutement', label: 'Recrutement' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo avec image */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 relative flex-shrink-0">
              <Image
                src="/images/logo_fortico.jpeg"
                alt="Fortico"
                fill
                className="object-contain"
                sizes="200px"
                priority
              />
            </div>
            <span className="text-xl font-bold text-arduino-dark">
              <span className="text-arduino-green">Fortico</span>
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-arduino-green transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-arduino-green text-white px-6 py-2 rounded-full hover:bg-arduino-green/90 transition-colors font-medium"
            >
              Demander un devis
            </Link>
          </nav>

          {/* Bouton Menu Mobile */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-gray-600 hover:text-arduino-green transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-4 bg-arduino-green text-white text-center px-6 py-3 rounded-full hover:bg-arduino-green/90 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Demander un devis
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
