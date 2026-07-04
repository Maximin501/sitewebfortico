// app/portfolio/page.js
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import PortfolioFilter from '@/components/portfolio/PortfolioFilter';
import { getAllProjects, getCategories, getProjectsByCategory } from '@/lib/strapi';

export const revalidate = 60; // Revalidation toutes les 60 secondes

export default async function PortfolioPage({ searchParams }) {
  const params = await searchParams;
  const category = params?.category || 'Tous';
  
  const categories = await getCategories();
  const projects = await getProjectsByCategory(category);

  return (
    <>
      <Header />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-arduino-dark">
              Notre <span className="text-arduino-green">Portfolio</span>
            </h1>
            <p className="text-gray-600 mt-4">
              Découvrez nos réalisations par secteur d'activité
            </p>
            <p className="text-sm text-gray-400 mt-2">
              {projects.length} projet{projects.length > 1 ? 's' : ''} trouvé{projects.length > 1 ? 's' : ''}
            </p>
          </div>

          <PortfolioFilter categories={categories} />
          <PortfolioGrid projects={projects} />
        </div>
      </section>
      <Footer />
    </>
  );
}