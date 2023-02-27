export const APP_CONFIG = {};

APP_CONFIG.ENV = 'DEV';

if (APP_CONFIG.ENV === 'DEV') {
  APP_CONFIG.API_URL = 'http://3.109.190.149:8080/v1/graphql';
  APP_CONFIG.IMAGE_URL = 'http://3.109.190.149:8081/';
  APP_CONFIG.NODE_URL = 'http://3.109.190.149:8081/';
} else if (APP_CONFIG.ENV === 'PROD') {
  APP_CONFIG.API_URL = 'http://3.109.190.149:8080/';
} else {
  APP_CONFIG.API_URL = 'http://3.109.190.149:8080/';
}
