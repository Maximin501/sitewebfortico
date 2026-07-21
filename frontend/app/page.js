// app/page.js
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Cpu, Code, Cloud, Brain, Link as LinkIcon, MonitorSmartphone } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getAllProjects } from '@/lib/strapi';
import { fetchHomepage } from '@/lib/strapi-homepage'; // ✅ IMPORT AJOUTÉ

// URL du backend
const STRAPI_URL = process.env.STRAPI_URL || 'https://strapi-fortico.onrender.com';

export default async function HomePage() {
  // ✅ Récupérer les données de la homepage
  const homepage = await fetchHomepage();
  console.log('📚 Homepage data:', homepage);

  // Récupérer tous les projets
  const allProjects = await getAllProjects();
  const totalProjects = allProjects.length; // ✅ Nombre total de projets
  console.log('📚 Nombre total de projets:', totalProjects);
  
  // Prendre les 3 plus récents
  const recentProjects = allProjects.slice(0, 3);
  console.log('📚 Projets récents:', recentProjects.map(p => p.title));

  return (
    <>
      <Header />
      
      {/* HERO SECTION - DYNAMIQUE */}
      {/* HERO SECTION - AVEC IMAGE ILLUSTRATION */}
<section className="relative bg-gradient-to-br from-arduino-dark to-gray-900 text-white overflow-hidden">
  {/* Effet de fond */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_50%,_#00979D_0%,_transparent_70%)]"></div>
    <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[radial-gradient(circle_at_30%_80%,_#00979D_0%,_transparent_60%)]"></div>
  </div>

  <div className="relative container mx-auto px-4 md:px-6 py-20 md:py-32">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* Colonne Gauche - Texte */}
      <div className="max-w-2xl">
        {/* Badge */}
        <div className="inline-flex items-center bg-arduino-green/20 border border-arduino-green/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 bg-arduino-green rounded-full mr-2 animate-pulse"></span>
          <span className="text-sm text-arduino-green font-medium">
            {homepage?.badge_text || 'Expertise en systèmes embarqués'}
          </span>
        </div>

        {/* Titre */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          {homepage?.title || "Nous donnons de l'"}
          <br />
          <span className="text-arduino-green">
            {homepage?.title_highlight || 'intelligence'}
          </span>{' '}
          {homepage?.title_end || 'à vos systèmes'}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          {homepage?.description || "Solutions embarquées & IoT sur-mesure. De la conception de PCB au développement de plateformes connectées, en passant par l'IA."}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center bg-arduino-green text-white px-8 py-4 rounded-full font-semibold hover:bg-arduino-green/90 transition-all hover:scale-105"
          >
            {homepage?.cta_primary_text || 'Commencer votre projet'}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
          >
            {homepage?.cta_secondary_text || 'Voir nos réalisations'}
          </Link>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
          <div>
            <div className="text-3xl font-bold text-arduino-green">{totalProjects}+</div>
            <div className="text-sm text-gray-400">Projets livrés</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-arduino-green">6</div>
            <div className="text-sm text-gray-400">Domaines d'expertise</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-arduino-green">100%</div>
            <div className="text-sm text-gray-400">Confidentialité garantie</div>
          </div>
        </div>
      </div>

      {/* ✅ Colonne Droite - IMAGE ILLUSTRATION */}
      <div className="hidden md:flex justify-center items-center">
        <div className="relative w-full max-w-md">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/images/hero-illustration.svg"
              alt="Illustration IoT - Systèmes embarqués"
              width={500}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
            {/* Effet de surbrillance */}
            <div className="absolute inset-0 bg-gradient-to-t from-arduino-green/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
          {/* Petit badge flottant */}
          <div className="absolute -bottom-4 -left-4 bg-arduino-dark/90 backdrop-blur-sm border border-arduino-green/30 rounded-xl px-4 py-2 text-sm hidden lg:block">
            <span className="text-arduino-green font-semibold">✦</span> IoT & Systèmes Embarqués
          </div>
          <div className="absolute -top-4 -right-4 bg-arduino-dark/90 backdrop-blur-sm border border-arduino-green/30 rounded-xl px-4 py-2 text-sm hidden lg:block">
            <span className="text-arduino-green font-semibold">✦</span> Sécurité & Fiabilité
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* 6 PILIERS - Expertise */}
      <section className="py-16 md:py-20 bg-arduino-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-arduino-dark">
              Notre <span className="text-arduino-green">expertise</span> en un coup d'œil
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Une maîtrise complète de la chaîne de valeur, du hardware à l'intelligence artificielle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Hardware */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-arduino-green">
              <div className="w-14 h-14 bg-arduino-green/10 rounded-full flex items-center justify-center mb-6">
                <Cpu className="text-arduino-green" size={28} />
              </div>
              <h3 className="text-xl font-bold text-arduino-dark mb-3">Hardware</h3>
              <p className="text-gray-600 leading-relaxed">
                Conception de schémas électroniques et routage de PCB multi-couches.
              </p>
            </div>

            {/* Firmware */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-arduino-green">
              <div className="w-14 h-14 bg-arduino-green/10 rounded-full flex items-center justify-center mb-6">
                <Code className="text-arduino-green" size={28} />
              </div>
              <h3 className="text-xl font-bold text-arduino-dark mb-3">Firmware</h3>
              <p className="text-gray-600 leading-relaxed">
                Programmation bas niveau, gestion de la basse consommation et protocoles industriels.
              </p>
            </div>

            {/* IoT & Cloud */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-arduino-green">
              <div className="w-14 h-14 bg-arduino-green/10 rounded-full flex items-center justify-center mb-6">
                <Cloud className="text-arduino-green" size={28} />
              </div>
              <h3 className="text-xl font-bold text-arduino-dark mb-3">IoT & Cloud</h3>
              <p className="text-gray-600 leading-relaxed">
                Connectivité cloud, traitement de données en temps réel et tableaux de bord.
              </p>
            </div>

            {/* Intelligence Artificielle */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-arduino-green">
              <div className="w-14 h-14 bg-arduino-green/10 rounded-full flex items-center justify-center mb-6">
                <Brain className="text-arduino-green" size={28} />
              </div>
              <h3 className="text-xl font-bold text-arduino-dark mb-3">Intelligence Artificielle</h3>
              <p className="text-gray-600 leading-relaxed">
                Intégration de modèles d'IA pour l'analyse de données, la prédiction et l'automatisation.
              </p>
              <ul className="mt-3 space-y-1">
                <li className="flex items-center text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 bg-arduino-green rounded-full mr-2"></span>
                  Analyse prédictive
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 bg-arduino-green rounded-full mr-2"></span>
                  Traitement du langage
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 bg-arduino-green rounded-full mr-2"></span>
                  Vision par ordinateur
                </li>
              </ul>
            </div>

            {/* API & Microservices */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-arduino-green">
              <div className="w-14 h-14 bg-arduino-green/10 rounded-full flex items-center justify-center mb-6">
                <LinkIcon className="text-arduino-green" size={28} />
              </div>
              <h3 className="text-xl font-bold text-arduino-dark mb-3">API & Microservices</h3>
              <p className="text-gray-600 leading-relaxed">
                Conception et développement d'API RESTful et GraphQL pour connecter vos systèmes.
              </p>
              <ul className="mt-3 space-y-1">
                <li className="flex items-center text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 bg-arduino-green rounded-full mr-2"></span>
                  RESTful API
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 bg-arduino-green rounded-full mr-2"></span>
                  GraphQL
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 bg-arduino-green rounded-full mr-2"></span>
                  Documentation OpenAPI
                </li>
              </ul>
            </div>

            {/* Applications Web & Mobile */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-arduino-green">
              <div className="w-14 h-14 bg-arduino-green/10 rounded-full flex items-center justify-center mb-6">
                <MonitorSmartphone className="text-arduino-green" size={28} />
              </div>
              <h3 className="text-xl font-bold text-arduino-dark mb-3">Applications Web & Mobile</h3>
              <p className="text-gray-600 leading-relaxed">
                Développement d'applications web responsives et mobiles pour une expérience optimale.
              </p>
              <ul className="mt-3 space-y-1">
                <li className="flex items-center text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 bg-arduino-green rounded-full mr-2"></span>
                  React Native
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 bg-arduino-green rounded-full mr-2"></span>
                  Flutter
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 bg-arduino-green rounded-full mr-2"></span>
                  PWA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETS RÉCENTS */}
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

          {recentProjects.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-2xl">
              <p className="text-gray-500">Aucun projet disponible pour le moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {recentProjects.map((project) => {
                let coverUrl = null;
                if (project.cover_image?.url) {
                  const baseUrl = STRAPI_URL.replace(/\/+$/, '');
                  const imagePath = project.cover_image.url.replace(/^\/+/, '');
                  coverUrl = `${baseUrl}/${imagePath}`;
                }

                return (
                  <Link
                    key={project.id}
                    href={`/portfolio/${project.slug || project.id}`}
                    className="group cursor-pointer"
                  >
                    <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[4/3] relative">
                      {coverUrl ? (
                        <Image
                          src={coverUrl}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          unoptimized={true}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-arduino-green/20 to-arduino-dark/20 flex items-center justify-center">
                          <span className="text-gray-400 text-4xl">🔧</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-arduino-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <span className="text-white font-medium">Voir le projet →</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="text-xs font-semibold text-arduino-green uppercase tracking-wider">
                        {project.category || 'Projet'}
                      </span>
                      <h3 className="text-lg font-bold text-arduino-dark mt-1 group-hover:text-arduino-green transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                        {project.challenge?.substring(0, 80) || ''}
                      </p>
                      {project.year && (
                        <p className="text-xs text-gray-400 mt-1">{project.year}</p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
