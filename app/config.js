import axios from 'axios';

const baseUrl = "http://localhost:3000";

const httpConfig = {
  baseURL: baseUrl,
  timeout: 10000,
};

const http = axios.create(httpConfig);

const serverUrls = {
  perros: '/perros',
  usuarios: '/usuarios',
};

export {
  http,
  baseUrl,
  serverUrls,
};
