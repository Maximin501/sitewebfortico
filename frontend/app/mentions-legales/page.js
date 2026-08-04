// app/mentions-legales/page.js
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-arduino-dark mb-8">
            Mentions <span className="text-arduino-green">Légales</span>
          </h1>
          
          <div className="space-y-8 text-gray-700">
            {/* 1. Informations légales */}
            <div>
              <h2 className="text-2xl font-bold text-arduino-dark mb-4">1. Informations légales</h2>
              <div className="bg-arduino-light rounded-xl p-6 space-y-2">
                <p><strong>Société :</strong> FORTICO</p>
                <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
                <p><strong>NIF :</strong> 3008460602</p>
                <p><strong>STAT :</strong> 47894 31 2025 0 01387</p>
                <p><strong>Adresse :</strong> Mangarivotra nord lot 0628Bis parcelle 11/12, Toamasina 501, Madagascar</p>
                <p><strong>Email :</strong> <a href="mailto:fortico261@gmail.com" className="text-arduino-green hover:underline">fortico261@gmail.com</a></p>
                <p><strong>Téléphone :</strong> +261 34 58 295 07</p>
                <p><strong>Directeur :</strong> Jean Fortuno Flavien</p>
              </div>
            </div>

            {/* 2. Hébergement */}
            <div>
              <h2 className="text-2xl font-bold text-arduino-dark mb-4">2. Hébergement</h2>
              <div className="bg-arduino-light rounded-xl p-6 space-y-2">
                <p><strong>Hébergeur du site :</strong></p>
                <p><strong>Vercel Inc.</strong></p>
                <p>340 S Lemon Ave #4133,</p>
                <p>Walnut, CA 91789, USA</p>
                <p><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-arduino-green hover:underline">https://vercel.com</a></p>
                <p className="mt-2"><strong>Hébergeur du CMS :</strong></p>
                <p><strong>Render Inc.</strong></p>
                <p>525 Brannan St, Suite 300,</p>
                <p>San Francisco, CA 94107, USA</p>
                <p><a href="https://render.com" target="_blank" rel="noopener noreferrer" className="text-arduino-green hover:underline">https://render.com</a></p>
              </div>
            </div>

            {/* 3. Propriété intellectuelle */}
            <div>
              <h2 className="text-2xl font-bold text-arduino-dark mb-4">3. Propriété intellectuelle</h2>
              <div className="bg-arduino-light rounded-xl p-6 space-y-2">
                <p>L'ensemble des contenus présents sur ce site (textes, images, logos, vidéos, icônes, etc.) est la propriété exclusive de FORTICO ou de ses partenaires.</p>
                <p className="mt-2">Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de FORTICO.</p>
              </div>
            </div>

            {/* 4. Confidentialité */}
            <div>
              <h2 className="text-2xl font-bold text-arduino-dark mb-4">4. Confidentialité et données personnelles</h2>
              <div className="bg-arduino-light rounded-xl p-6 space-y-2">
                <p>FORTICO s'engage à protéger vos données personnelles conformément à la réglementation en vigueur à Madagascar.</p>
                <p className="mt-2">Pour en savoir plus, consultez notre <Link href="/politique-confidentialite" className="text-arduino-green hover:underline">Politique de confidentialité</Link>.</p>
              </div>
            </div>

            {/* 5. Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-arduino-dark mb-4">5. Cookies</h2>
              <div className="bg-arduino-light rounded-xl p-6 space-y-2">
                <p>Ce site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.</p>
              </div>
            </div>

            {/* 6. Droit applicable */}
            <div>
              <h2 className="text-2xl font-bold text-arduino-dark mb-4">6. Droit applicable</h2>
              <div className="bg-arduino-light rounded-xl p-6 space-y-2">
                <p>Les présentes mentions légales sont régies par le droit malgache. En cas de litige, les tribunaux de Toamasina sont seuls compétents.</p>
              </div>
            </div>

            {/* 7. Contact */}
            <div>
              <h2 className="text-2xl font-bold text-arduino-dark mb-4">7. Contact</h2>
              <div className="bg-arduino-light rounded-xl p-6 space-y-2">
                <p>Pour toute question concernant ces mentions légales, vous pouvez nous contacter :</p>
                <p><strong>Email :</strong> <a href="mailto:fortico261@gmail.com" className="text-arduino-green hover:underline">fortico261@gmail.com</a></p>
                <p><strong>Téléphone :</strong> +261 34 58 295 07</p>
              </div>
            </div>

            {/* Date de mise à jour */}
            <div className="text-sm text-gray-400 border-t border-gray-200 pt-4 mt-4">
              <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
