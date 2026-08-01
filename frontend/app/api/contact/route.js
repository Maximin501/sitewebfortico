// app/api/contact/route.js
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request) {
  console.log('📨 Contact API called');
  
  try {
    // 1. Vérifier la clé API
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    console.log('🔑 RESEND_API_KEY existe:', !!RESEND_API_KEY);
    console.log('🔑 RESEND_API_KEY (début):', RESEND_API_KEY?.substring(0, 10) || 'non défini');
    
    if (!RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY is not defined');
      return NextResponse.json(
        { success: false, error: 'Configuration email manquante.' },
        { status: 500 }
      );
    }

    // 2. Récupérer les données du formulaire
    console.log('📝 Récupération du FormData...');
    const formData = await request.formData();
    
    const name = formData.get('name');
    const company = formData.get('company') || '';
    const email = formData.get('email');
    const phone = formData.get('phone') || '';
    const projectType = formData.get('projectType') || 'Général';
    const message = formData.get('message');
    const files = formData.getAll('files');
    
    console.log('📝 Données reçues:', { 
      name: name || 'non fourni', 
      email: email || 'non fourni', 
      projectType, 
      filesCount: files.length 
    });

    // 3. Validation
    if (!name || !email || !message) {
      console.error('❌ Champs obligatoires manquants');
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 }
      );
    }

    // 4. Préparer les pièces jointes
    console.log('📎 Préparation des pièces jointes...');
    const attachments = await Promise.all(
      files.map(async (file) => {
        const buffer = await file.arrayBuffer();
        console.log(`📎 Fichier: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`);
        return {
          filename: file.name,
          content: Buffer.from(buffer),
        };
      })
    );

    console.log(`📎 ${attachments.length} pièce(s) jointe(s) préparée(s)`);

    // 5. Construction du HTML
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #00979D; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f5f7fa; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 12px; }
            .label { font-weight: bold; color: #2C3E50; }
            .value { color: #333; margin-top: 4px; }
            .footer { margin-top: 20px; color: #6C7A89; font-size: 12px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0;">📩 Nouvelle demande de devis</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Nom complet</div>
              <div class="value">${name}</div>
            </div>
            ${company ? `
              <div class="field">
                <div class="label">🏢 Entreprise</div>
                <div class="value">${company}</div>
              </div>
            ` : ''}
            <div class="field">
              <div class="label">📧 Email</div>
              <div class="value">${email}</div>
            </div>
            ${phone ? `
              <div class="field">
                <div class="label">📱 Téléphone</div>
                <div class="value">${phone}</div>
              </div>
            ` : ''}
            <div class="field">
              <div class="label">🔧 Type de projet</div>
              <div class="value">${projectType}</div>
            </div>
            <div class="field">
              <div class="label">📝 Message</div>
              <div class="value" style="background: white; padding: 12px; border-radius: 4px; border: 1px solid #ddd;">${message}</div>
            </div>
            ${files.length > 0 ? `
              <div class="field">
                <div class="label">📎 Pièces jointes (${files.length})</div>
                <div class="value">${files.map(f => f.name).join(', ')}</div>
              </div>
            ` : ''}
          </div>
          <div class="footer">
            <p>Cet email a été envoyé depuis le formulaire de contact du site web.</p>
            <p>© ${new Date().getFullYear()} Fortico</p>
          </div>
        </body>
      </html>
    `;

    // 6. Envoyer l'email
    const fromEmail = process.env.EMAIL_FROM || 'onboarding@resend.dev';
    const toEmail = process.env.EMAIL_TO || 'fortico261@gmail.com';
    
    console.log(`📧 Envoi de l'email...`);
    console.log(`📧 From: ${fromEmail}`);
    console.log(`📧 To: ${toEmail}`);
    console.log(`📧 Subject: Nouvelle demande de devis - ${projectType}`);
    console.log(`📧 Attachments: ${attachments.length}`);

    const resend = new Resend(RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `Nouvelle demande de devis - ${projectType}`,
      replyTo: email,
      html: htmlContent,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error('❌ Erreur Resend détaillée:', JSON.stringify(error, null, 2));
      console.error('❌ Status Code:', error.statusCode);
      console.error('❌ Message:', error.message);
      return NextResponse.json(
        { 
          success: false, 
          error: error.message || "Erreur lors de l'envoi de l'email." 
        },
        { status: error.statusCode || 500 }
      );
    }

    console.log('✅ Email envoyé avec succès !');
    console.log('📧 Data:', data);
    return NextResponse.json({
      success: true,
      message: 'Votre message a été envoyé avec succès !',
    });

  } catch (error) {
    console.error('❌ Erreur générale détaillée:', error);
    console.error('❌ Stack:', error.stack);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || "Une erreur est survenue." 
      },
      { status: 500 }
    );
  }
}
