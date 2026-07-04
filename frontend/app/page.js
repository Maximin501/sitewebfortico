import Link from 'next/link';
import { ArrowRight, Cpu, Code, Cloud } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      
      <section className="relative bg-gradient-to-br from-arduino-dark to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_50%,_#00979D_0%,_transparent_70%)]"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[radial-gradient(circle_at_30%_80%,_#00979D_0%,_transparent_60%)]"></div>
        </div>

        <div className="relative container mx-auto px-4 md:px-6 py-20 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-arduino-green/20 border border-arduino-green/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-arduino-green rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm text-arduino-green font-medium">
                Expertise en systèmes embarqués
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Nous donnons de l'<br />
              <span className="text-arduino-green">intelligence</span> à vos systèmes
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
              Solutions embarquées & IoT sur-mesure. De la conception de PCB 
              au développement de plateformes connectées.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center bg-arduino-green text-white px-8 py-4 rounded-full font-semibold hover:bg-arduino-green/90 transition-all hover:scale-105"
              >
                Commencer votre projet
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Voir nos réalisations
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-arduino-green">50+</div>
                <div className="text-sm text-gray-400">Projets livrés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-arduino-green">4</div>
                <div className="text-sm text-gray-400">Secteurs d'activité</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-arduino-green">100%</div>
                <div className="text-sm text-gray-400">Confidentialité garantie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-arduino-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-arduino-dark">
              Notre <span className="text-arduino-green">expertise</span> en un coup d'œil
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Une maîtrise complète de la chaîne de valeur IoT
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-arduino-green">
              <div className="w-14 h-14 bg-arduino-green/10 rounded-full flex items-center justify-center mb-6">
                <Cpu className="text-arduino-green" size={28} />
              </div>
              <h3 className="text-xl font-bold text-arduino-dark mb-3">Hardware</h3>
              <p className="text-gray-600 leading-relaxed">
                Conception de schémas électroniques et routage de PCB multi-couches.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-arduino-green">
              <div className="w-14 h-14 bg-arduino-green/10 rounded-full flex items-center justify-center mb-6">
                <Code className="text-arduino-green" size={28} />
              </div>
              <h3 className="text-xl font-bold text-arduino-dark mb-3">Firmware</h3>
              <p className="text-gray-600 leading-relaxed">
                Programmation bas niveau, gestion de la basse consommation et protocoles industriels.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-arduino-green">
              <div className="w-14 h-14 bg-arduino-green/10 rounded-full flex items-center justify-center mb-6">
                <Cloud className="text-arduino-green" size={28} />
              </div>
              <h3 className="text-xl font-bold text-arduino-dark mb-3">IoT & Cloud</h3>
              <p className="text-gray-600 leading-relaxed">
                Connectivité cloud, traitement de données en temps réel et tableaux de bord.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-arduino-dark">
                Projets <span className="text-arduino-green">récents</span>
              </h2>
              <p className="text-gray-600 mt-2">Découvrez nos dernières réalisations</p>
            </div>
            <Link
              href="/portfolio"
              className="text-arduino-green font-medium hover:underline flex items-center"
            >
              Voir tout
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-arduino-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-medium">Voir le projet →</span>
                  </div>
                  <div className="w-full h-full bg-gradient-to-br from-arduino-green/20 to-arduino-dark/20 flex items-center justify-center">
                    <span className="text-gray-400">Image du projet</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-xs font-semibold text-arduino-green uppercase tracking-wider">
                    IoT
                  </span>
                  <h3 className="text-lg font-bold text-arduino-dark mt-1 group-hover:text-arduino-green transition-colors">
                    Projet de démonstration {i}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Solution complète de supervision à distance
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}