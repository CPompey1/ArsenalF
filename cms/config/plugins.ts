import crypto from 'crypto';

export default () => ({
  'users-permissions': {
    config: {
      jwtSecret: process.env.JWT_SECRET || crypto.randomBytes(16).toString('base64'),
    },
  },
});
