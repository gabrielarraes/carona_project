import axios from 'axios';
export * from './CustomerService';
export const Axios = axios.create({ baseURL: 'https://carona-project-api.herokuapp.com/api' });