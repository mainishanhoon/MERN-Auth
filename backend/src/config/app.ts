import { getENV } from '../utils/get-env';

const appConfig = () => ({
  NODE_ENV: getENV('NODE_ENV', 'development'),
  APP_ORIGIN: getENV('APP_ORIGIN', 'localhost'),
  PORT: getENV('PORT', '5000'),
  BASE_PATH: getENV('BASE_PATH', '/api/v1'),
  MONGODB_URI: getENV('MONGODB_URI'),
  JWT: {
    SECRET: getENV('JWT_SECRET'),
    EXPIRES_IN: getENV('JWT_EXPIRES_IN', '15m'),
    REFRESH_SECRET: getENV('JWT_REFRESH_SECRET'),
    REFRESH_EXPIRES_IN: getENV('JWT_REFRESH_EXPIRES_IN', '30d'),
  },
  SENDER_MAIL: getENV('SENDER_MAIL'),
  RESEND_API_KEY: getENV('RESEND_API_KEY'),
});

export const config = appConfig();
