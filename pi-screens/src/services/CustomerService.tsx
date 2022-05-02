import { Axios } from './index';
import { Customer, User } from '../interfaces'

const createUser = (customer: Customer) => Axios.post('/v1/customers', customer, {
  headers: { 'Content-type': 'application/json' },
  params: { loginUrl: 'localhost:3000/login' }
});

const signIn = (user: Pick<User, 'username' | 'password'>) => Axios.post('/v1/auth/sign-in', user, {
  headers: { 'Content-type': 'application/json' },
});

const resetPassword = (password :string) => Axios.post('/v1/auth/', password, {
  headers: { 'Content-type': 'application/json' },
  params: {}
})

export const CustomerService = {
  createUser,
  signIn
}