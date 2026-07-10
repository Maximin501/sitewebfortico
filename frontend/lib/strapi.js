// lib/strapi.js
// Utiliser la variable d'environnement ou une URL par défaut
const STRAPI_URL = process.env.STRAPI_URL || 'https://strapi-fortico.onrender.com';

// Détecter si on est en production
const isProduction = process.env.NODE_ENV === 'production';
const isStrapiConfigured = STRAPI_URL && !STRAPI_URL.includes('localhost') && !STRAPI_URL.includes('127.0.0.1');

console.log('🔑 STRAPI_URL configurée:', STRAPI_URL);
console.log('🔑 Environnement:', process.env.NODE_ENV);

export async function fetchAPI(path, query = {}) {
  // En production sans Strapi configuré, retourner des données vides
  if (isProduction && !isStrapiConfigured) {
    console.warn('⚠️ Strapi non configuré pour la production. Retour de données vides.');
    return { data: [] };
  }

  // Construire l'URL avec les paramètres pour Strapi v5
  const queryParams = new URLSearchParams();
  
  // ✅ Gestion du populate simplifié pour Strapi v5
  if (query.populate) {
    queryParams.append('populate', query.populate);
  }
  
  // ✅ Gestion du tri
  if (query.sort) {
    queryParams.append('sort', query.sort);
  }
  
  // ✅ Gestion des filtres
  if (query.filters) {
    Object.entries(query.filters).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        // Pour les filtres avec opérateurs (ex: $eq)
        Object.entries(value).forEach(([operator, operatorValue]) => {
          queryParams.append(`filters[${key}][${operator}]`, operatorValue);
        });
      } else {
        queryParams.append(`filters[${key}][$eq]`, value);
      }
    });
  }

  const url = `${STRAPI_URL}/api/${path}?${queryParams.toString()}`;
  
  console.log('📡 Appel API:', url);

  const options = {
    headers: {
      'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN || ''}`,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 },
  };

  try {
    const res = await fetch(url, options);
    console.log('📊 Status:', res.status);

    if (!res.ok) {
      const text = await res.text();
      console.error('❌ Erreur réponse:', text);
      throw new Error(`Failed to fetch: ${url} (${res.status}) - ${text}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('❌ Fetch error:', error.message);
    // En production, retourner des données vides au lieu de planter
    if (isProduction) {
      console.warn('⚠️ Erreur Strapi en production, retour de données vides.');
      return { data: [] };
    }
    throw error;
  }
}

export async function getAllProjects() {
  console.log('📚 getAllProjects called');
  try {
    const data = await fetchAPI('projects', {
      populate: '*', // ✅ Syntaxe simplifiée pour Strapi v5
      sort: 'year:desc', // ✅ Syntaxe simplifiée pour le tri
    });
    return data.data || [];
  } catch (error) {
    console.error('❌ Error in getAllProjects:', error);
    return [];
  }
}

export async function getProjectBySlug(slug) {
  console.log('📚 getProjectBySlug called:', slug);
  try {
    const data = await fetchAPI('projects', {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: '*', // ✅ Syntaxe simplifiée pour Strapi v5
    });
    return data.data?.[0] || null;
  } catch (error) {
    console.error('❌ Error in getProjectBySlug:', error);
    return null;
  }
}

export async function getCategories() {
  console.log('📚 getCategories called');
  try {
    const projects = await getAllProjects();
    const categories = [...new Set(projects.map((project) => project.category))];
    console.log('📚 Categories found:', categories);
    return categories;
  } catch (error) {
    console.error('❌ Error in getCategories:', error);
    return [];
  }
}

export async function getProjectsByCategory(category) {
  console.log('📚 getProjectsByCategory called:', category);
  try {
    if (category === 'Tous') {
      return getAllProjects();
    }
    const data = await fetchAPI('projects', {
      filters: {
        category: {
          $eq: category,
        },
      },
      populate: '*', // ✅ Syntaxe simplifiée pour Strapi v5
      sort: 'year:desc', // ✅ Syntaxe simplifiée pour le tri
    });
    return data.data || [];
  } catch (error) {
    console.error('❌ Error in getProjectsByCategory:', error);
    return [];
  }
}
