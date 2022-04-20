import { Axios } from './index';
import { Customer } from '../interfaces'

const createUser = (customer: Customer) => Axios.post('/v1/customers', customer, {
  headers: { 'Content-type': 'application/json' },
});

export const CustomerService = {
  createUser,
}