import { useCallback } from 'react';
import { Customer, User } from '../interfaces';
import { CustomerService } from '../services';

export const useCustomer = () => {

  const createUser = useCallback(async (customer: Customer) => {
    const resp = await CustomerService.createUser(customer);
    console.log(resp.data);
  }, [])

  const signIn = useCallback(async (user: Pick<User, 'username' | 'password'>) => { 
    const resp = await CustomerService.signIn(user);
    console.log(resp.data);
  }, [])

  return {
    createUser,
    signIn
  }  
}