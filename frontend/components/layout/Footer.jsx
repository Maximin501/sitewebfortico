import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

// Icônes de marques en SVG inline (Facebook, LinkedIn, Twitter/X
// ne sont plus exportées par lucide-react)
function FacebookIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={16}
      height={16}
      {...props}
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.23 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.23 22 17.08 22 12.06Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={16}
      height={16}
      {...props}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={16}
      height={16}
      {...props}
    >
      <path d="M18.9 2H22l-7.6 8.7L23.3 22H16.6l-5.2-6.8L5.4 22H2.3l8.2-9.3L1.6 2h6.9l4.7 6.2L18.9 2Zm-1.2 18h1.7L7.3 3.9H5.5L17.7 20Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-arduino-dark text-white" suppressHydrationWarning>
      <div
        className="container mx-auto px-4 md:px-6 py-16"
        suppressHydrationWarning
      >
        <div className="grid md:grid-cols-4 gap-12" suppressHydrationWarning>
          {/* Colonne 1 - Logo */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 relative flex-shrink-0">
                <Image
                  src="/images/logo_fortico.jpeg"
                  alt="Fortico"
                  fill
                  className="object-contain"
                  sizes="56px"
                />
              </div>
              <span className="text-xl font-bold">
                <span className="text-arduino-green">Fortico</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Solutions embarquées & IoT sur-mesure pour l'industrie 4.0.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex space-x-3 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61559025178075"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-arduino-green hover:text-arduino-dark hover:border-arduino-green transition-all duration-200"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/fortico"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-arduino-green hover:text-arduino-dark hover:border-arduino-green transition-all duration-200"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://twitter.com/fortico"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-arduino-green hover:text-arduino-dark hover:border-arduino-green transition-all duration-200"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Colonne 2 - Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-5 tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/services"
                  className="hover:text-arduino-green transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-arduino-green transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/methodologie"
                  className="hover:text-arduino-green transition-colors"
                >
                  Méthodologie
                </Link>
              </li>
              <li>
                <Link
                  href="/recrutement"
                  className="hover:text-arduino-green transition-colors"
                >
                  Recrutement
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-arduino-green transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-3">
                <Mail
                  size={18}
                  className="flex-shrink-0 mt-0.5 text-arduino-green"
                />
                <a
                  href="mailto:contact@fortico.com"
                  className="hover:text-white transition-colors"
                >
                  contact@fortico.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone
                  size={18}
                  className="flex-shrink-0 mt-0.5 text-arduino-green"
                />
                <a
                  href="tel:+261345829507"
                  className="hover:text-white transition-colors"
                >
                  +261 34 58 295 07
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="flex-shrink-0 mt-0.5 text-arduino-green"
                />
                <span>Toamasina, Madagascar</span>
              </li>
              <li className="flex items-center space-x-3 pt-3 mt-1 border-t border-white/10">
                <span className="text-arduino-green font-semibold text-xs uppercase tracking-wider min-w-[40px]">
                  NIF
                </span>
                <span className="text-sm text-gray-300">VOTRE_NIF_ICI</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-arduino-green font-semibold text-xs uppercase tracking-wider min-w-[40px]">
                  STAT
                </span>
                <span className="text-sm text-gray-300">VOTRE_STAT_ICI</span>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - NDA */}
          <div>
            <h4 className="font-semibold text-white mb-5 tracking-wide">
              Engagement
            </h4>
            <div
              className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-arduino-green/40 transition-colors duration-200"
              suppressHydrationWarning
            >
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="inline-flex items-center gap-2 font-semibold text-arduino-green mb-1">
                  NDA
                </span>
                <br />
                Confidentialité absolue de vos projets garantie.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
          suppressHydrationWarning
        >
          <p>© {new Date().getFullYear()} Fortico. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
