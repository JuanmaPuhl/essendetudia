module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5e36a25d327eea116a08e0a92d85ccc5'),
  },
});
