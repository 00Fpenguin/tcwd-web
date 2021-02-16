import axios from 'axios';
import { BASE_URL } from './constants';

const Http = axios.create();

function requestHandler(config) {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}

Http.defaults.baseURL = BASE_URL;
Http.defaults.headers.common.Accept = 'application/json';

/**
 * Set authorization header every request
 */
Http.interceptors.request.use(requestHandler);

export default Http;
