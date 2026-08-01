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
    unoptimized: true,
  },
  // ✅ Permettre les origines externes
  allowedDevOrigins: ['192.168.1.100', 'localhost', '192.168.1.*'],
  // ✅ Configuration pour l'upload de fichiers
  experimental: {
    serverActions: {
      bodySizeLimit: '20mb', // Augmenté à 20MB
    },
  },
  // ✅ Augmenter la limite de taille des requêtes
  api: {
    responseLimit: false, // Désactiver la limite de réponse
    bodyParser: {
      sizeLimit: '20mb', // Augmenté à 20MB
    },
  },
};

export default nextConfig;
