// lib/strapi-offres.js
const STRAPI_URL = process.env.STRAPI_URL || 'https://strapi-fortico.onrender.com';

export async function fetchOffresAPI(path, query = {}) {
  // Construire l'URL avec les paramètres
  const queryParams = new URLSearchParams();
  
  // Ajouter les paramètres de population
  if (query.populate) {
    queryParams.append('populate', query.populate);
  }
  
  // Ajouter le tri
  if (query.sort) {
    queryParams.append('sort', query.sort);
  }
  
  // Ajouter les filtres
  if (query.filters) {
    Object.entries(query.filters).forEach(([key, value]) => {
      queryParams.append(`filters[${key}][$eq]`, value);
    });
  }
  
  const url = `${STRAPI_URL}/api/${path}?${queryParams.toString()}`;
  console.log('📡 Appel API Offres:', url);

  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${url} (${res.status})`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('❌ Erreur fetchOffresAPI:', error);
    throw error;
  }
}

export async function getAllOffres() {
  try {
    const data = await fetchOffresAPI('offres', {
      populate: '*',
      sort: 'createdAt:desc',
      filters: { actif: true },
    });
    return data.data || [];
  } catch (error) {
    console.error('❌ Erreur getAllOffres:', error);
    return [];
  }
}

export async function getOffreBySlug(slug) {
  try {
    const data = await fetchOffresAPI('offres', {
      populate: '*',
      filters: { slug: slug },
    });
    return data.data?.[0] || null;
  } catch (error) {
    console.error('❌ Erreur getOffreBySlug:', error);
    return null;
  }
}

export async function getOffresByType(type) {
  try {
    const data = await fetchOffresAPI('offres', {
      populate: '*',
      sort: 'createdAt:desc',
      filters: { actif: true, type: type },
    });
    return data.data || [];
  } catch (error) {
    console.error('❌ Erreur getOffresByType:', error);
    return [];
  }
}
