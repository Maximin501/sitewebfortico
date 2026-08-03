// app/api/contact/route.js
import { NextResponse } from 'next/server';
import emailjs from '@emailjs/browser';

export async function POST(request) {
  console.log('📨 Contact API called (EmailJS)');
  
  try {
    // Récupérer les variables d'environnement
    const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
    
    console.log('🔑 SERVICE_ID existe:', !!SERVICE_ID);
    console.log('🔑 TEMPLATE_ID existe:', !!TEMPLATE_ID);
    console.log('🔑 PUBLIC_KEY existe:', !!PUBLIC_KEY);
    
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('❌ Configuration EmailJS manquante');
      return NextResponse.json(
        { success: false, error: 'Configuration email manquante.' },
        { status: 500 }
      );
    }

    // Récupérer les données du formulaire
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

    // Validation
    if (!name || !email || !message) {
      console.error('❌ Champs obligatoires manquants');
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 }
      );
    }

    // Préparer les paramètres pour EmailJS
    const templateParams = {
      name: name,
      company: company || 'Non spécifié',
      email: email,
      phone: phone || 'Non spécifié',
      projectType: projectType,
      message: message,
      to_email: 'fortico261@gmail.com', // Destinataire final
    };

    console.log('📧 Envoi via EmailJS...');

    // Envoyer l'email via EmailJS
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
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
