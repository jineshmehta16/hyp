import axios from 'axios';
import { APP_CONFIG } from '../../appConfig';
import handleError from './handleError';

const baseUrl = `${APP_CONFIG.API_URL}`;

function getAccessToken() {
  return sessionStorage.getItem('token');
}

export const getHeaders = () => {
  return {
    headers: {
      Accept: 'application/json',
      'content-Type': 'application/json',
      ...(getAccessToken() && {
        token: `${getAccessToken()}`,
      }),
    },
  };
};

export const getHeadersLogin = () => {
  return {
    headers: {
      token: `login`,
    },
  };
};

export const get = (path) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}${path}`, getHeaders())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};

export const post = (path, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}${path}`, data, getHeaders())
      .then((response) => {
        resolve(response?.data?.data);
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};

export const postLogin = (path, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}${path}`, data, getHeadersLogin())
      .then((response) => {
        resolve(response?.data);
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};
