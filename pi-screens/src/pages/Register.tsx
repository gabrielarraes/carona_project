/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EMAIL_REGEX, PASSWORD_REGEX, CPF_REGEX, USERNAME_REGEX} from "../constants/constants";
import { defaultInputStyle } from "../constants/StyleConstants";
import MaskedInput from '../Components/Input/InputMask'
import { useCustomer } from "../hooks/useCustomer";
import { useForm } from "react-hook-form";

interface FormInput {
  userName: string;
  email: string;
  firstName: string;
  CPF: string;
  phoneNumber: number
  lastName: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {

  const { register, handleSubmit, formState: { errors }, clearErrors } = useForm<FormInput>({
    mode: 'all',
    
  });
  const { createUser} = useCustomer();
  const [CPF, setCPF] = useState('');
  
  const onSubmit = useCallback(async (data: FormInput) => 
  { 
    try {
      await createUser({ 
        user: {
        username: data.userName,
        password: data.password,
        email: data.email
      },
        cpf: CPF,
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber
      })
    } catch (e) {
      console.log(e);
    }
  }, [createUser, CPF]);

  return (
    <div className="bg-gradient-to-br to-purple-900 from-blue-400 min-h-screen flex flex-col">

    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white px-6 py-8 rounded shadow-2xl shadow-black text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                      
            <input 
              className={defaultInputStyle}
              {...register("userName", {required:true, maxLength:15, pattern: USERNAME_REGEX})} 
              id="Username"
              placeholder="Username"
              onBlur={() => clearErrors("userName")}
              style={{outline: 0}}          
              autoComplete="off"                
            />

            {errors?.userName?.type === "required" && <p className="ml-1 mb-1 text-left text-rose-600">Username is required</p>}
            {errors?.userName?.type === "pattern" && <p className="ml-1 mb-1 text-left text-rose-600 ico">Invalid Username</p>}

            <input 
              className={defaultInputStyle}
              {...register("firstName", {required:true, maxLength:20, pattern: USERNAME_REGEX})} 
              id="firsName"
              placeholder="First Name"
              style={{outline: 0}}
              autoComplete="off"
            />
            <input 
              className={defaultInputStyle}
              {...register("lastName", {required:true, maxLength:20, pattern: USERNAME_REGEX})} 
              id="lastName"
              placeholder="Last Name"
              style={{outline: 0}}
              autoComplete="off"
            />
            <input 
              className={defaultInputStyle}
              {...register("phoneNumber", {required:true, maxLength:9})} 
              id="phoneNumber"
              placeholder="Phone Number"
              style={{outline: 0}}
              autoComplete="off"
            />
            <input 
              className={defaultInputStyle}
              {...register("email", {required:true, maxLength:15, pattern: EMAIL_REGEX})} 
              id="email"
              placeholder="Email"
              style={{outline: 0}}
              autoComplete="off"
            />
            <input 
              className={defaultInputStyle}
              {...register("password", {required:true, maxLength:15, pattern: PASSWORD_REGEX})} 
              id="password"
              placeholder="Password"
              style={{outline: 0}}
              autoComplete="off"
            />
            <MaskedInput 
              value={CPF} 
              onChange={(e:any) => setCPF(e.target.value)}
              className={defaultInputStyle}            
            />
            <input 
              className={defaultInputStyle}
              {...register("confirmPassword", {required:true, maxLength:15, pattern: PASSWORD_REGEX})} 
              id="confirmPassword"
              placeholder="Retype Password"
              style={{outline: 0}}   
              autoComplete="off"         
            />
            <input
                type="submit"
                className="w-full text-center py-3 rounded bg-purple-700 text-white hover:bg-purple-900 focus:outline-none my-1"             
            ></input>
        </form>
              
        <a className=" border-b border-blue text-white mt-6" href="localhost:3000">
          Already have an account? Log in
        </a>
    </div>
  </div>
  )
}
export default Register;