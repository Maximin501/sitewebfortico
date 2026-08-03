// app/api/contact/route.js
import { NextResponse } from 'next/server';
import { send } from '@emailjs/nodejs';

// Vos identifiants EmailJS
const SERVICE_ID = 'service_t2iyyjq';
const TEMPLATE_ID = 'template_xmibcr4';
const PUBLIC_KEY = '0ZETnJ8ul1ZO4sHQZ';
const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY || 'VOTRE_PRIVATE_KEY';

export async function POST(request) {
  console.log('📨 Contact API called (EmailJS - Node.js)');
  
  try {
    const formData = await request.formData();
    
    const name = formData.get('name');
    const company = formData.get('company') || '';
    const email = formData.get('email');
    const phone = formData.get('phone') || '';
    const projectType = formData.get('projectType') || 'Général';
    const message = formData.get('message');
    
    console.log('📝 Données reçues:', { 
      name: name || 'non fourni', 
      email: email || 'non fourni', 
      projectType
    });

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 }
      );
    }

    const templateParams = {
      name: name,
      company: company || 'Non spécifié',
      email: email,
      phone: phone || 'Non spécifié',
      projectType: projectType,
      message: message,
      to_email: 'fortico261@gmail.com',
    };

    console.log('📧 Envoi via EmailJS...');

    // Envoyer l'email
    const response = await send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      {
        publicKey: PUBLIC_KEY,
        privateKey: PRIVATE_KEY,
      }
    );

    console.log('✅ Email envoyé avec succès !', response);

    return NextResponse.json({
      success: true,
      message: 'Votre message a été envoyé avec succès !',
    });

  } catch (error) {
    console.error('❌ Erreur EmailJS:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || "Une erreur est survenue." 
      },
      { status: 500 }
    );
  }
}
