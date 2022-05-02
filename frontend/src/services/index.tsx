import axios from 'axios';
export * from './CustomerService';
export const Axios = axios.create({ baseURL: 'http://localhost:8080/api' });