// components/portfolio/PortfolioCard.jsx
import Link from 'next/link';
import Image from 'next/image';

const STRAPI_URL = 'https://strapi-fortico.onrender.com';

export default function PortfolioCard({ project }) {
  // Récupérer l'URL de l'image de couverture
  const coverUrl = project.cover_image?.url
    ? `${STRAPI_URL}${project.cover_image.url}`
    : null;

  return (
    <Link href={`/portfolio/${project.slug || project.id}`} className="group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="relative h-56 w-full bg-gradient-to-br from-arduino-green/20 to-arduino-dark/20">
          {coverUrl ? (
            <Image
              src={coverUrl}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">
              🔧
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <span className="text-white font-medium">Voir le projet →</span>
          </div>
        </div>
        <div className="p-6">
          <span className="text-xs font-semibold text-arduino-green uppercase tracking-wider">
            {project.category || 'Projet'}
          </span>
          <h3 className="text-xl font-bold text-arduino-dark mt-2 group-hover:text-arduino-green transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {project.challenge?.substring(0, 120) || 'Découvrez ce projet...'}
          </p>
          {project.year && (
            <p className="text-xs text-gray-400 mt-3">{project.year}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
