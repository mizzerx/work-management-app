/**
 * @format
 */

import axios from 'axios';
import queryString from 'query-string';
import localStorage from '../../commons/localStorage';
import { BASE_URL } from './endpoints';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  paramsSerializer: params => {
    return queryString.stringify(params, { arrayFormat: 'bracket' });
  },
});

axiosClient.interceptors.request.use(
  async config => {
    const token = await localStorage.getData('accessToken');

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosClient;
