import { Resend } from 'resend';

// Vérifier si la clé API existe
const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(request) {
  // Si la clé n'est pas définie, retourner une erreur explicite
  if (!RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY is not defined in environment variables');
    return Response.json(
      { 
        success: false, 
        error: 'Configuration email manquante. Veuillez contacter l\'administrateur.' 
      },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(RESEND_API_KEY);
    const body = await request.json();
    const { name, company, email, phone, projectType, message } = body;

    // Validation des champs obligatoires
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 }
      );
    }

    // Envoyer l'email
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: [process.env.EMAIL_TO || 'contact@votre-entreprise.com'],
      subject: `Nouvelle demande de devis - ${projectType || 'Général'}`,
      replyTo: email,
      html: `
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
                <div class="value">${projectType || 'Non spécifié'}</div>
              </div>
              <div class="field">
                <div class="label">📝 Message</div>
                <div class="value" style="background: white; padding: 12px; border-radius: 4px; border: 1px solid #ddd;">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>Cet email a été envoyé depuis le formulaire de contact du site web.</p>
              <p>© ${new Date().getFullYear()} Fortico</p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return Response.json(
        { error: "Erreur lors de l'envoi de l'email. Veuillez réessayer." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: 'Votre message a été envoyé avec succès !',
      data: data
    });

  } catch (error) {
    console.error('Erreur:', error);
    return Response.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
