import { useCallback, useState } from 'react';
import { Customer } from '../interfaces';
import { CustomerService } from '../services';

export const useCustomer = () => {

  const createUser = useCallback(async (customer: Customer) => {
    const { status , data} = await CustomerService.createUser(customer);

    if(status !== 201) {
      console.log (status)
    } 
    else {
      console.log(JSON.stringify(data));
    }
  }, [])

  return {
    createUser,
  }
}