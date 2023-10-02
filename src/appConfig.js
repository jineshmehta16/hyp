export const APP_CONFIG = {};

APP_CONFIG.ENV = 'DEV';

if (APP_CONFIG.ENV === 'DEV') {
  APP_CONFIG.API_URL = 'http://sanralpharma.com/webservices/public';
  APP_CONFIG.REPORTS_URL = 'http://sanralpharma.com'
} else if (APP_CONFIG.ENV === 'PROD') {
  APP_CONFIG.API_URL = 'https://hyp.techpromiot.com/webservices/public';
  APP_CONFIG.REPORTS_URL = 'https://hyp.techpromiot.com'
} else {
  APP_CONFIG.API_URL = 'http://sanralpharma.com/webservices/public';
  APP_CONFIG.REPORTS_URL = 'http://sanralpharma.com'
}
