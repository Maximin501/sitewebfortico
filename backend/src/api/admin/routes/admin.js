module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/admin/create',
      handler: 'admin.create',
      config: {
        auth: false,
      },
    },
  ],
};
