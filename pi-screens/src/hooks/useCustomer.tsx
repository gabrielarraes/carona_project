import { useCallback } from 'react';
import { Customer, User } from '../interfaces';
import { CustomerService } from '../services';
import { useNavigate, useLocation } from 'react-router-dom';



export const useCustomer = () => {
  
  const navigate = useNavigate();
  
  const createUser = useCallback(async (customer: Customer) => {
    const resp = await CustomerService.createUser(customer);
    if (resp.status === 201) {
      navigate("/login")
    }
  }, [navigate])

  const signIn = useCallback(async (user: Pick<User, 'username' | 'password'>) => { 
    const resp = await CustomerService.signIn(user);
    console.log(resp.data)
  }, [])

  return {
    createUser,
    signIn
  }  
}