import axios, { AxiosInstance } from 'axios';
import { error } from 'console';

const HttpService = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return error;
    }
  );

  instance.interceptors.request.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return instance;
};
