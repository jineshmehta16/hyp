import axios from 'axios';
import { APP_CONFIG } from '../../appConfig';
import handleError from './handleError';

const baseUrl = `${APP_CONFIG.API_URL}`;

function getAccessToken() {
  return localStorage.getItem('accessToken');
}

export const getHeaders = () => {
  return {
    headers: {
      Accept: 'application/json',
      'content-Type': 'application/json',
      ...(getAccessToken() && {
        authorization: `Bearer ${getAccessToken()}`,
      }),
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
