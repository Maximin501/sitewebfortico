// components/portfolio/PortfolioGrid.jsx
import PortfolioCard from './PortfolioCard';

export default function PortfolioGrid({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Aucun projet trouvé.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <PortfolioCard key={project.id} project={project} />
      ))}
    </div>
  );
}