// app/api/contact/route.js
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// ✅ La configuration bodyParser se fait via route.config dans Next.js 16
// Mais pour l'upload de fichiers, on utilise directement request.formData()

export async function POST(request) {
  console.log('📨 Contact API called');
  
  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    
    if (!RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY is not defined');
      return NextResponse.json(
        { success: false, error: 'Configuration email manquante.' },
        { status: 500 }
      );
    }

    // ✅ Récupérer les données du formulaire multipart
    const formData = await request.formData();
    
    const name = formData.get('name');
    const company = formData.get('company') || '';
    const email = formData.get('email');
    const phone = formData.get('phone') || '';
    const projectType = formData.get('projectType') || 'Général';
    const message = formData.get('message');
    
    // ✅ Récupérer tous les fichiers
    const files = formData.getAll('files');
    
    console.log('📝 Données reçues:', { name, email, projectType, filesCount: files.length });

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    // ✅ Préparer les pièces jointes
    const attachments = await Promise.all(
      files.map(async (file) => {
        const buffer = await file.arrayBuffer();
        return {
          filename: file.name,
          content: Buffer.from(buffer),
        };
      })
    );

    // ✅ Construction du HTML
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

    // ✅ Envoyer l'email
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: [process.env.EMAIL_TO || 'vitasoam@gmail.com'],
      subject: `Nouvelle demande de devis - ${projectType}`,
      replyTo: email,
      html: htmlContent,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error('❌ Erreur Resend:', error);
      return NextResponse.json(
        { success: false, error: "Erreur lors de l'envoi de l'email." },
        { status: 500 }
      );
    }

    console.log('✅ Email envoyé avec succès !');
    return NextResponse.json({
      success: true,
      message: 'Votre message a été envoyé avec succès !',
    });

  } catch (error) {
    console.error('❌ Erreur générale:', error);
    return NextResponse.json(
      { success: false, error: "Une erreur est survenue." },
      { status: 500 }
    );
  }
}
