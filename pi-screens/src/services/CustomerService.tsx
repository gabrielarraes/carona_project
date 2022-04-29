import { Axios } from './index';
import { Customer, User } from '../interfaces'

const createUser = (customer: Customer) => Axios.post('/v1/customers', customer, {
  headers: { 'Content-type': 'application/json' },
});

const signIn = (user: Pick<User, 'username' | 'password'>) => Axios.post('/v1/auth/sign-in', user, {
  headers: { 'Content-type': 'application/json' },
})

export const CustomerService = {
  createUser,
  signIn
}