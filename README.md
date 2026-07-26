# siteWeb-Fortico
# 🚀 Site Web Fortico

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sitewebfortico.vercel.app)
[![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://strapi-fortico.onrender.com/admin)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Strapi](https://img.shields.io/badge/Strapi-4945FF?style=for-the-badge&logo=strapi&logoColor=white)](https://strapi.io/)

Site web professionnel pour **Fortico** - spécialiste en systèmes embarqués et IoT. Une vitrine technologique moderne combinant Next.js et Strapi.

🌐 **Voir le site en ligne** : [sitewebfortico.vercel.app](https://sitewebfortico.vercel.app)

---

## 📋 Table des matières

- [Aperçu](#aperçu)
- [Stack Technique](#stack-technique)
- [Fonctionnalités](#fonctionnalités)
- [Architecture](#architecture)
- [Installation](#installation)
- [Variables d'environnement](#variables-denvironnement)
- [Déploiement](#déploiement)
- [Structure du projet](#structure-du-projet)
- [Contribution](#contribution)
- [Licence](#licence)

---

## 🎯 Aperçu

### Page d'accueil
![Page d'accueil](https://via.placeholder.com/800x400/1a2a3a/00979D?text=Hero+Section+avec+illustration+IoT)

### Portfolio
![Portfolio](https://via.placeholder.com/800x400/1a2a3a/00979D?text=Portfolio+dynamique)

---

## 🛠️ Stack Technique

### Frontend
| Technologie | Version | Rôle |
|-------------|---------|------|
| **Next.js** | 16.2.10 | Framework React |
| **React** | 19.x | Bibliothèque UI |
| **Tailwind CSS** | 3.x | Framework CSS |
| **Turbopack** | - | Bundler (développement) |
| **Lucide React** | - | Icônes |

### Backend (CMS)
| Technologie | Version | Rôle |
|-------------|---------|------|
| **Strapi** | 5.50.0 | Headless CMS |
| **Node.js** | 20.11.0 | Runtime |
| **PostgreSQL** | - | Base de données (production) |
| **SQLite** | - | Base de données (développement) |

### Hébergement
| Service | Rôle |
|---------|------|
| **Vercel** | Hébergement frontend |
| **Render** | Hébergement backend + PostgreSQL |
| **Resend** | Envoi d'emails |

---

## ✨ Fonctionnalités

### 🏠 Page d'accueil
- Hero section dynamique avec illustration IoT
- 6 piliers d'expertise (Hardware, Firmware, IoT, IA, API, Applications Web)
- Projets récents affichés dynamiquement
- Statistiques automatiques (nombre de projets)

### 📁 Portfolio
- Gestion des projets via Strapi (CRUD)
- Filtrage par catégorie (Énergie, Automatisation, IoT, Industriel)
- Fiches projets détaillées avec :
  - Défi / Problématique
  - Solution apportée
  - Fiche technique
  - Galerie d'images

### 📋 Recrutement
- Offres de stage gérées via Strapi
- Affichage des missions, profil recherché, qualités
- Bouton "Postuler" avec lien email

### 📧 Contact
- Formulaire de contact sécurisé
- Envoi d'emails via Resend
- Validation des champs

### 🎨 Design
- Design inspiré d'Arduino.cc
- Responsive (Mobile / Tablette / Desktop)
- Palette de couleurs personnalisée (vert #00979D)

---

## 🏗️ Architecture


---

## 🚀 Installation

### Prérequis
- Node.js >= 20.9.0
- npm >= 10.x
- Git

📄 Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d'informations.

📞 Contact
Maximin VITASOA

GitHub : @Maximin501

Email : vitasoam@gmail.com

LinkedIn : Mahefa Maximin VITASOA

🙏 Remerciements
Next.js

Strapi

Tailwind CSS

Vercel

Render

Lucide Icons


### Cloner le projet
```bash
git clone https://github.com/Maximin501/sitewebfortico.git
cd sitewebfortico

cd frontend
npm install
npm run dev

cd backend
npm install
npm run develop

