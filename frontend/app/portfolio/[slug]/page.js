// app/portfolio/[slug]/page.js
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getProjectBySlug, getAllProjects } from '@/lib/strapi';

// Générer les pages statiques
export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Métadonnées pour le SEO
export async function generateMetadata({ params }) {
  const paramsData = await params;
  const project = await getProjectBySlug(paramsData.slug);
  
  if (!project) {
    return {
      title: 'Projet non trouvé',
    };
  }

  return {
    title: `${project.title} | YourTech`,
    description: project.challenge?.substring(0, 160) || '',
  };
}

export default async function ProjectPage({ params }) {
  const paramsData = await params;
  const project = await getProjectBySlug(paramsData.slug);

  if (!project) {
    notFound();
  }

  const coverUrl = project.cover_image?.url
    ? `${process.env.STRAPI_URL}${project.cover_image.url}`
    : null;

  return (
    <>
      <Header />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {/* En-tête du projet */}
          <div className="mb-8">
            <span className="text-sm font-semibold text-arduino-green uppercase tracking-wider">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-arduino-dark mt-2">
              {project.title}
            </h1>
            {project.year && (
              <p className="text-gray-400 mt-2">{project.year}</p>
            )}
            {project.client && (
              <p className="text-gray-500 mt-1">Client : {project.client}</p>
            )}
          </div>

          {/* Image de couverture */}
          {coverUrl && (
            <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-12">
              <Image
                src={coverUrl}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Défi / Problématique */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-arduino-dark mb-4 flex items-center">
              <span className="w-1 h-8 bg-arduino-green rounded-full mr-3"></span>
              Défi / Problématique
            </h2>
            <div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.challenge }}
            />
          </div>

          {/* Solution Apportée */}
          <div className="mb-12 bg-arduino-light rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-arduino-dark mb-4 flex items-center">
              <span className="w-1 h-8 bg-arduino-green rounded-full mr-3"></span>
              Solution Apportée
            </h2>
            <div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.solution }}
            />
          </div>

          {/* Fiche Technique */}
          {project.tech_sheet && (
            <div className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-arduino-dark mb-4 flex items-center">
                <span className="w-1 h-8 bg-arduino-green rounded-full mr-3"></span>
                Fiche Technique
              </h2>
              <div className="font-mono text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                {project.tech_sheet}
              </div>
            </div>
          )}

          {/* Galerie d'images */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-arduino-dark mb-6 flex items-center">
                <span className="w-1 h-8 bg-arduino-green rounded-full mr-3"></span>
                Galerie
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={`${process.env.STRAPI_URL}${image.url}`}
                      alt={`${project.title} - ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bouton retour */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a
              href="/portfolio"
              className="text-arduino-green hover:underline font-medium inline-flex items-center"
            >
              ← Retour au portfolio
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}