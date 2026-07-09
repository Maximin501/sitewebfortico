import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-arduino-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Colonne 1 - Logo */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image
                  src="/images/logo_fortico.jpeg"
                  alt="Fortico"
                  fill
                  className="object-contain"
                  sizes="100px"
                />
              </div>
              <span className="text-xl font-bold">
                <span className="text-arduino-green">Fortico</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Solutions embarquées & IoT sur-mesure pour l'industrie 4.0.
            </p>
            <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/profile.php?id=61559025178075" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Twitter</a>
              </div>
          </div>

          {/* Colonne 2 - Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/methodologie" className="hover:text-white transition-colors">Méthodologie</Link></li>
              <li><Link href="/recrutement" className="hover:text-white transition-colors">Recrutement</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Colonne 3 - Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <span>contact@fortico.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <span>+261 34 58 295 07</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>Tamatave Madagascar</span>
              </li>
              <li className="flex items-start space-x-3 pt-2 border-t border-white/10">
                <span className="text-arduino-green font-semibold text-sm min-w-[40px]">NIF</span>
                <span className="text-sm">VOTRE_NIF_ICI</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-arduino-green font-semibold text-sm min-w-[40px]">STAT</span>
                <span className="text-sm">VOTRE_STAT_ICI</span>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - NDA */}
          <div>
            <h4 className="font-semibold text-white mb-4">Engagement</h4>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-semibold text-arduino-green">🔒 NDA</span><br />
                Confidentialité absolue de vos projets garantie.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Fortico. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="#" className="hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
