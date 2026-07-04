// lib/strapi.js - Version compatible avec Strapi v5
const STRAPI_URL = 'http://localhost:1337';
const TOKEN = '3b960424f0e96f52bbb5b2cac805b24837869174441add38070e4712a40459f4ae2847a5f7901d7922cf6fc479bcccbab8d72ad2ed3aa9aa6785f5901c351e7a324410aaf16b9534e588303b3ef591d98363c796ce8c9d9c6fdc14dfe9aea5a9e8ca013853fa60bd886bd2f5e52f5ff5ee8ec08c5d6fcf9cfcdbc620feff3eca';

export async function fetchAPI(path) {
  const url = `${STRAPI_URL}/api/${path}`;
  console.log('📡 Appel:', url);
  
  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`
    }
  });
  
  console.log('📊 Status:', res.status);
  
  if (!res.ok) {
    const text = await res.text();
    console.error('❌ Erreur:', text);
    throw new Error(`Erreur ${res.status}`);
  }
  
  return res.json();
}

export async function getAllProjects() {
  console.log('📚 getAllProjects');
  const data = await fetchAPI('projects');
  return data.data || [];
}

export async function getCategories() {
  console.log('📚 getCategories');
  const projects = await getAllProjects();
  const categories = [...new Set(projects.map(p => p.category))];
  return categories;
}

export async function getProjectsByCategory(category) {
  console.log('📚 getProjectsByCategory:', category);
  if (category === 'Tous') {
    return getAllProjects();
  }
  const all = await getAllProjects();
  return all.filter(p => p.category === category);
}

export async function getProjectBySlug(slug) {
  console.log('📚 getProjectBySlug:', slug);
  const all = await getAllProjects();
  return all.find(p => p.slug === slug) || null;
}