import { Axios } from './index';
import { Customer, User } from '../interfaces'

const createUser = (customer: Customer) => Axios.post('/v1/customers', customer, {
  headers: { 'Content-type': 'application/json' },
  params: { loginUrl: 'http://localhost:3000/login' }
});

const signIn = (user: Pick<User, 'username' | 'password'>) => Axios.post('/v1/auth/sign-in', user, {
  headers: { 'Content-type': 'application/json' },
});

const forgotPassword = (email : string) => Axios.post('/v1/users/forgot-password', {email}, {
  headers: { 'Content-type': 'application/json' },
  params: { resetUrl: 'http://localhost:3000/resetPassword?token=' }
});

const resetPassword = (newPassword: string, token:string) => Axios.post('/v1/users/reset-password', 
  {newPassword},
  { 
    headers: { 'Content-type': 'application/json' },
    params: { token: token, loginUrl: 'http://localhost:3000/login' }
  }
);

export const CustomerService = {
  createUser,
  signIn,
  forgotPassword,
  resetPassword
}