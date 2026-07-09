// app/recrutement/page.js
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getAllOffres } from '@/lib/strapi-offres';
import OffreCard from '@/components/recrutement/OffreCard';

export const revalidate = 60;

export default async function RecrutementPage() {
  const offres = await getAllOffres();

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-arduino-dark to-gray-900 text-white overflow-hidden py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_50%,_#00979D_0%,_transparent_70%)]"></div>
        </div>
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-arduino-green">FORTICO</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-2">Là où l'innovation devient réalité</p>
          <div className="inline-block bg-arduino-green/20 border border-arduino-green/30 rounded-full px-6 py-2 mt-4">
            <span className="text-arduino-green font-semibold">🚀 NOUS RECRUTONS</span>
          </div>
          <p className="text-xl text-gray-300 mt-6">
            {offres.length} offre{offres.length > 1 ? 's' : ''} disponible{offres.length > 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Liste des offres */}
      <section className="py-12 bg-arduino-light">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          {offres.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
              <p className="text-xl text-gray-500">Aucune offre de recrutement disponible pour le moment.</p>
              <p className="text-gray-400 mt-2">Revenez bientôt !</p>
            </div>
          ) : (
            <div className="space-y-8">
              {offres.map((offre) => (
                <OffreCard key={offre.id} offre={offre} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
