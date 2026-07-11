/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi-fortico.onrender.com',
        port: '',
        pathname: '/uploads/**',
      },
    ],
    // Désactiver l'optimisation pour les images Strapi (solution de secours)
    unoptimized: true,
  },
};

export default nextConfig;

