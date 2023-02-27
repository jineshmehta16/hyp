import axios from 'axios';
import { APP_CONFIG } from '../../appConfig';
import handleError from './handleError';
import handleGraphQlError from './handleGraphQlError';
const baseUrl = `${APP_CONFIG.API_URL}`;
const baseImageUrl = `${APP_CONFIG.IMAGE_URL}`;
const nodeBaseUrl = `${APP_CONFIG.NODE_URL}`;

function getAccessToken() {
  return localStorage.getItem('accessToken');
}

export const getHeaders = () => {
  return {
    headers: {
      Accept: 'application/json',
      'content-Type': 'application/json',
      'Hasura-Client-Name': 'hasura-console',
      ...(getAccessToken() && {
        authorization: `Bearer ${getAccessToken()}`,
        'x-hasura-role': 'user',
      }),
    },
  };
};

export const getHeadersForFileUpload = () => {
  return {
    headers: {
      'content-Type': 'multipart/form-data',
      'X-hasura-admin-secret': '2WheelR',
      'Hasura-Client-Name': 'hasura-console',
      ...(getAccessToken() && {
        authorization: `Bearer ${getAccessToken()}`,
        'x-hasura-role': 'user',
      }),
    },
  };
};

export const postNodeApi = (path, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${nodeBaseUrl}${path}`, data, getHeaders())
      .then((response) => {
        resolve(response?.data?.data);
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};

export const getNodeApi = (path, data) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${nodeBaseUrl}${path}`, getHeaders())
      .then((response) => {
        resolve(response?.data?.data);
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};

export const get = (path) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}${path}`, getHeaders())
      .then((response) => {
        if (response?.data?.errors?.length > 0) {
          reject(handleGraphQlError(response?.data?.errors[0]));
        } else {
          resolve(response?.data?.data);
        }
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
        if (response?.data?.errors?.length > 0) {
          reject(handleGraphQlError(response?.data?.errors[0]));
        } else {
          resolve(response?.data?.data);
        }
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};

export const postFormData = (path, formData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}${path}`, formData, getHeadersForFileUpload())
      .then((response) => {
        if (response?.data?.errors?.length > 0) {
          reject(handleGraphQlError(response?.data?.errors[0]));
        } else {
          resolve(response?.data?.data);
        }
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};

export const postFormDataForImage = (path, formData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${baseImageUrl}${path}`,
        createFormData(formData),
        getHeadersForFileUpload()
      )
      .then((response) => {
        resolve(response?.data?.data);
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
};

const createFormData = (body) => {
  const apiFormData = new FormData();
  Object.keys(body).forEach((key) => {
    if (body[key]) {
      if (body[key] instanceof Array) {
        apiFormData.append(key, JSON.stringify(body[key]));
      } else {
        apiFormData.append(key, body[key]);
      }
    }
  });

  return apiFormData;
};
