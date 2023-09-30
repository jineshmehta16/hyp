export const APP_CONFIG = {};

APP_CONFIG.ENV = 'DEV';

if (APP_CONFIG.ENV === 'DEV') {
  APP_CONFIG.API_URL = 'http://sanralpharma.com/webservices/public';
  APP_CONFIG.REPORTS_URL = 'http://sanralpharma.com'
} else if (APP_CONFIG.ENV === 'PROD') {
  APP_CONFIG.API_URL = 'http://sanralpharma.com/webservices/public';
} else {
  APP_CONFIG.API_URL = 'http://sanralpharma.com/webservices/public';
}
