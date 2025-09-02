import crypto from 'crypto';
export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  jwtSecret: env('JWT_SECRET', crypto.randomBytes(16).toString('base64')),
  app: {
    keys: env.array('APP_KEYS', ['defaultKey1', 'defaultKey2']),
    // keys: env.array('APP_KEYS'),
  },
});
