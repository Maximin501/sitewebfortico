// app/politique-confidentialite/page.js
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-arduino-dark mb-8">
            Politique de <span className="text-arduino-green">Confidentialité</span>
          </h1>
          
          <div className="space-y-8 text-gray-700">
            {/* 1. Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-arduino-dark mb-4">1. Introduction</h2>
              <div className="bg-arduino-light rounded-xl p-6 space-y-2">
                <p>Chez <strong>FORTICO</strong>, la protection de vos données personnelles est une priorité. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations.</p>
                <p className="mt-2">En utilisant notre site web, vous acceptez les pratiques décrites dans cette politique.</p>
              </div>
            </div>

            {/* 2. Données collectées */}
            <div>
              <h2 className="text-2xl font-bold text-arduino-dark mb-4">2. Données collectées</h2>
              <div className="bg-arduino-light rounded-xl p-6 space-y-3">
                <p>Nous collectons les données suivantes :</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li><strong>Données d'identification :</strong> Nom, prénom, adresse email, numéro de téléphone</li>
                  <li><strong>Données de contact :</strong> Entreprise, secteur d'activité</li>
                  <li><strong>Données de navigation :</strong> Pages visitées, temps passé sur le site</li>
                  <li><strong>Données de formulaire :</strong> Messages envoyés via le formulaire de contact</li>
                </ul>
              </div>
            </div>

            {/* 3. Utilisation des données */}
            <div>
              <h2 className="text-2xl font-bold text-arduino-dark mb-4">3. Utilisation des données</h2>
              <div className="bg-arduino-light rounded-xl p-6 space-y-3">
                <p>Vos données sont utilisées pour :</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Répondre à vos demandes de devis et questions</li>
                  <li>Vous envoyer des informations sur nos services</li>
                  <li>Améliorer notre site et nos services</li>
                  <li>Gérer les recrutements (candidatures)</li>
                </ul>
              </div>
            </div>

            {/* 4. Partage des données */}
            <div>
              <h2 className="text-2xl font-bold text-arduino-dark mb-4">4. Partage des données</h2>
              <div className="bg-arduino-light rounded-xl p-6 space-y-2">
                <p>FORTICO ne vend, ne loue et ne partage pas vos données personnelles avec des tiers, sauf dans les cas suivants :</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Avec votre consentement explicite</li>
                  <li>Pour répondre à une obligation légale</li>
                  <li>Avec nos prestataires de services (EmailJS, Vercel, Render) dans le strict cadre de l'exécution de leurs missions</li>
                </ul>
              </div>
            </div>

            {/* 5. Sécurité des données */}
            <div>
              <h2 className="text-2xl font-bold text-arduino-dark mb-4">5. Sécurité des données</h2>
              <div className="bg-arduino-light rounded-xl p-6 space-y-2">
                <p>Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, toute modification, divulgation ou destruction.</p>
                <p className="mt-2">Toutes les communications entre votre navigateur et notre serveur sont chiffrées via le protocole HTTPS.</p>
              </div>
            </div>

            {/* 6. Vos droits */}
            <div>
              <h2 className="text-2xl font-bold text-arduino-dark mb-4">6. Vos droits</h2>
              <div className="bg-arduino-light rounded-xl p-6 space-y-3">
                <p>Conformément à la réglementation en vigueur, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li><strong>Droit d'accès :</strong> Consulter les données que nous détenons sur vous</li>
                  <li><strong>Droit de rectification :</strong> Modifier vos données si elles sont inexactes</li>
                  <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                  <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                </ul>
              </div>
            </div>

            {/* 7. Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-arduino-dark mb-4">7. Cookies</h2>
              <div className="bg-arduino-light rounded-xl p-6 space-y-2">
                <p>Ce site utilise des cookies pour améliorer votre expérience utilisateur. Vous pouvez à tout moment gérer vos préférences de cookies dans les paramètres de votre navigateur.</p>
                <p className="mt-2">Types de cookies utilisés :</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
                  <li><strong>Cookies analytiques :</strong> Pour comprendre comment vous utilisez le site</li>
                  <li><strong>Cookies de performance :</strong> Pour améliorer les performances du site</li>
                </ul>
              </div>
            </div>

            {/* 8. Conservation des données */}
            <div>
              <h2 className="text-2xl font-bold text-arduino-dark mb-4">8. Conservation des données</h2>
              <div className="bg-arduino-light rounded-xl p-6 space-y-2">
                <p>Nous conservons vos données personnelles aussi longtemps que nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées, ou pour répondre à des obligations légales.</p>
                <p className="mt-2">Les données de contact sont conservées pendant 3 ans après le dernier contact.</p>
              </div>
            </div>

            {/* 9. Contact */}
            <div>
              <h2 className="text-2xl font-bold text-arduino-dark mb-4">9. Contact</h2>
              <div className="bg-arduino-light rounded-xl p-6 space-y-2">
                <p>Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter :</p>
                <p><strong>Email :</strong> <a href="mailto:fortico261@gmail.com" className="text-arduino-green hover:underline">fortico261@gmail.com</a></p>
                <p><strong>Téléphone :</strong> +261 34 58 295 07</p>
                <p><strong>Adresse :</strong> Mangarivotra nord lot 0628Bis parcelle 11/12, Toamasina 501, Madagascar</p>
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
