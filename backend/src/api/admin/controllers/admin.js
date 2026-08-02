'use strict';

module.exports = {
  async create(ctx) {
    try {
      const adminService = strapi.admin.services.user;

      // Vérifier si l'admin existe déjà
      const existingAdmin = await adminService.findOne({
        email: 'admin@fortico.com',
      });

      if (existingAdmin) {
        return ctx.send({
          message: '✅ Admin existe déjà',
          email: existingAdmin.email,
          id: existingAdmin.id,
        });
      }

      // Créer un nouvel admin
      const newAdmin = await adminService.create({
        email: 'admin@fortico.com',
        password: 'admin123',
        firstname: 'Admin',
        lastname: 'Fortico',
        username: 'admin',
        isActive: true,
      });

      return ctx.send({
        message: '✅ Admin créé avec succès !',
        email: newAdmin.email,
        id: newAdmin.id,
      });
    } catch (error) {
      return ctx.badRequest('Erreur', error.message);
    }
  },
};
