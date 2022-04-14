import { Api } from '../providers';
import { Customer } from '../interfaces'

const createUser = (customer: Customer) => Api.post('/v1/customers', customer);

export const CustomerService = {
  createUser,
}