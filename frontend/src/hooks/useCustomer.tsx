import { useCallback } from 'react';
import { Customer, User } from '../interfaces';
import { CustomerService } from '../services';
import { useNavigate } from 'react-router-dom';

export const useCustomer = () => {
  
  const navigate = useNavigate();
  
  const createUser = useCallback(async (customer: Customer) => {
    await CustomerService.createUser(customer)
    .then((resp) => {
      if (resp.status === 201) {
        console.log(resp.data);
        navigate("/login")
      } else if (resp.status === 400) {
        console.log(resp.data)
      }
    });
  }, [navigate])

  const signIn = useCallback(async (user: Pick<User, 'username' | 'password'>) => { 
    await CustomerService.signIn(user)
    .then((resp) => {
      if (resp.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(resp.data));
        console.log(localStorage.getItem("user"));
        navigate("/home");
      }
      return resp.data;
    });
  }, [navigate])

  const forgotPassword = useCallback(async (email: string) => {
    await CustomerService.forgotPassword(email)
    .then((resp) => {
      console.log(resp.data);
    })
  },[])

  const resetPassword = useCallback(async (newPassword: string,token:string) => {
    await CustomerService.resetPassword(newPassword,token)
    .then((resp) => {
      console.log(resp.data)
      if (resp.status === 200) {
        navigate("/login")
      }
    })
  },[navigate])

  return {
    createUser,
    signIn,
    forgotPassword,
    resetPassword
  }  
}