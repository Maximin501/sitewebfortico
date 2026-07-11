/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi-fortico.onrender.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Important pour Strapi
    domains: ['strapi-fortico.onrender.com'],
    // Désactiver l'optimisation si nécessaire
    unoptimized: process.env.NODE_ENV === 'production' ? true : false,
  },
};

export default nextConfig;
