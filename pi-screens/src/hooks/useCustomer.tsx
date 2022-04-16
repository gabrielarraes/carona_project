import { useCallback, useState } from 'react';
import { Customer } from '../interfaces';
import { CustomerService } from '../services';

export const useCustomer = () => {

  const createUser = useCallback(async (customer: Customer) => {
    const { status } = await CustomerService.createUser(customer);

    if(status !== 201) throw new Error();
  }, [])

  return {
    createUser,
  }
}