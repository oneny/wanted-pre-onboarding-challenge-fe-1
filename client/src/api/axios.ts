import axios, { AxiosHeaders } from 'axios';
import { BASE_URL } from '@/config/baseURL';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('token') || '');
    console.log('toekn', token);

    if (!('authorization' in (config.headers as AxiosHeaders))) {
      (config.headers as AxiosHeaders).set('authorization', token);
    }

    return config;
  }
);