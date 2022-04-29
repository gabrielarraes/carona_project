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

  const { 
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,

  } = useForm<FormInput>({ 
    mode: 'all',
    
  });

  const { createUser } = useCustomer();
  const [CPF, setCPF] = useState('');
  
  const onSubmit = useCallback(async (form: FormInput) => 
  { 
    await createUser({ 
      user: {
      username: form.userName,
      password: form.password,
      email: form.email
    },
      cpf: CPF,
      firstName: form.firstName,
      lastName: form.lastName,
      phoneNumber: form.phoneNumber
    }).catch( err => {
      if(err.response.status === 400) {
        console.log(err.response.data);
      }
     });
     console.log(Response)
  }, [createUser, CPF]);

  return (
    <div className="bg-gradient-to-br to-purple-900 from-blue-400 min-h-screen flex flex-col">

    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white px-6 py-8 rounded shadow-2xl shadow-black text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                      
            <input 
              {...register("userName", {required:true, maxLength:25, pattern: USERNAME_REGEX})} 
              className={defaultInputStyle}
              id="Username"
              placeholder="Username"
              onBlur={() => clearErrors("userName")}
              style={{outline: 0}}          
              autoComplete="off"                
            />

            {errors?.userName?.type === "required" && <p className="ml-1 mb-1 text-left text-rose-600">Username is required</p>}
            {errors?.userName?.type === "pattern" && <p className="ml-1 mb-1 text-left text-rose-600 ico">Invalid Username</p>}

            <input 
              {...register("firstName", {required:true, maxLength:20, pattern: USERNAME_REGEX})} 
              className={defaultInputStyle}
              id="firsName"
              placeholder="First Name"
              style={{outline: 0}}
              autoComplete="off"
            />
            <input 
              {...register("lastName", {required:true, maxLength:20, pattern: USERNAME_REGEX})} 
              className={defaultInputStyle}
              id="lastName"
              placeholder="Last Name"
              style={{outline: 0}}
              autoComplete="off"
            />
            <input 
              {...register("phoneNumber", {required:true, maxLength:9})}
              className={defaultInputStyle}
              id="phoneNumber"
              placeholder="Phone Number"
              style={{outline: 0}}
              autoComplete="off"
            />
            <input 
              {...register("email", {required:true, maxLength:15, pattern: EMAIL_REGEX})} 
              className={defaultInputStyle}
              id="email"
              placeholder="Email"
              style={{outline: 0}}
              autoComplete="off"
            />
            <input 
              {...register("password", {required:true, maxLength:15, pattern: PASSWORD_REGEX})} 
              className={defaultInputStyle}
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
              {...register("confirmPassword", {required:true, maxLength:15, pattern: PASSWORD_REGEX})}
              className={defaultInputStyle} 
              id="confirmPassword"
              placeholder="Retype Password"
              style={{outline: 0}}   
              autoComplete="off"         
            />
            <input
                type="submit"
                className="w-full block bg-purple-600 hover:bg-purple-800 text-white font-semibold rounded-lg px-4 py-3 mt-2"
                value="Register"
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