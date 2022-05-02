/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useRef, useState } from "react";
import { EMAIL_REGEX, PASSWORD_REGEX, CPF_REGEX, USERNAME_REGEX} from "../constants/constants";
import { defaultInputStyle } from "../constants/StyleConstants";
import MaskedInput from '../Components/Input/InputMask'
import { useCustomer } from "../hooks/useCustomer";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
    mode: 'onSubmit',
    
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
      console.log(err.response.data); 
     });
  }, [createUser, CPF]);

  return (
    <div className="bg-gradient-to-br to-purple-900 from-blue-400 min-h-screen flex flex-col">

    <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white px-6 py-8 rounded shadow-2xl shadow-black text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                      
            <input 
              {...register("userName", {required:true, maxLength:25})} 
              className={defaultInputStyle}
              id="Username"
              placeholder="Username"
              onBlur={() => clearErrors()}
              style={{outline: 0}}          
              autoComplete="off"                
            />
            {errors?.userName?.type === "required" && <p className="ml-1 mb-1 text-left text-rose-600">Username is required</p>}
            
            <input 
              {...register("firstName", {required:true, minLength:2})} 
              className={defaultInputStyle}
              id="firsName"
              placeholder="First Name"
              style={{outline: 0}}
              onBlur={() => clearErrors()}
              maxLength={20}
              autoComplete="off"
            />

            {errors?.firstName?.type === "required" && <p className="ml-1 mb-1 text-left text-rose-600">first Name is required</p>}
            {errors?.firstName?.type === "minLenght" && <p className="ml-1 mb-1 text-left text-rose-600">first Name is too short</p>}
            
            <input 
              {...register("lastName", {required:true, minLength:2})} 
              className={defaultInputStyle}
              id="lastName"
              placeholder="Last Name"
              style={{outline: 0}}
              onBlur={() => clearErrors()}
              maxLength={20}
              autoComplete="off"
            />

            {errors?.lastName?.type === "required" && <p className="ml-1 mb-1 text-left text-rose-600">Last Name is required</p>}
            {errors?.lastName?.type === "minLenght" && <p className="ml-1 mb-1 text-left text-rose-600">Last Name is too short</p>}
            
            <input 
              {...register("phoneNumber", {required:true, maxLength:9})}
              className={defaultInputStyle}
              id="phoneNumber"
              placeholder="Phone Number"
              style={{outline: 0}}
              maxLength={9}
              type="number"
              onBlur={() => clearErrors()}
              autoComplete="off"
            />

            {errors?.phoneNumber?.type === "required" && <p className="ml-1 mb-1 text-left text-rose-600">Phone Number is required</p>}
      
            <input 
              {...register("email", {required:true, maxLength:50, pattern: EMAIL_REGEX})} 
              className={defaultInputStyle}
              id="email"
              placeholder="Email"
              style={{outline: 0}}
              onBlur={() => clearErrors()}
              autoComplete="off"
            />

            {errors?.email?.type === "required" && <p className="ml-1 mb-1 text-left text-rose-600">Email is required</p>}
            {errors?.email?.type === "pattern" && <p className="ml-1 mb-1 text-left text-rose-600 ico">Invalid E-mail</p>}

            <MaskedInput 
              value={CPF} 
              onChange={(e:any) => setCPF(e.target.value)}
              className={defaultInputStyle}            
            />

            <input 
              {...register("password", {required:true, maxLength:15, pattern: PASSWORD_REGEX})} 
              className={defaultInputStyle}
              id="password"
              placeholder="Password"
              style={{outline: 0}}
              onBlur={() => clearErrors()}
              autoComplete="off"
            />

            {errors?.password?.type === "required" && <p className="ml-1 mb-1 text-left text-rose-600">Password is required</p>}
            {errors?.password?.type === "pattern" && <p className="ml-1 mb-1 text-left text-rose-600 ico">Password must have: 
              <br></br>
              1 Uppercase letter
              <br></br>
              1 Special character
              <br></br>
              1 Number
            </p>}
            
            <input 
              {...register("confirmPassword", {required:true, maxLength:15, pattern: PASSWORD_REGEX})}
              className={defaultInputStyle} 
              id="confirmPassword"
              placeholder="Retype Password"
              style={{outline: 0}}
              onBlur={() => clearErrors()} 
              autoComplete="off"         
            />
            {errors?.confirmPassword?.type === "required" && <p className="ml-1 mb-1 text-left text-rose-600">Confirm your Password</p>}
            
            <input
                type="submit"
                className="w-full block bg-purple-600 hover:bg-purple-800 text-white font-semibold rounded-lg px-4 py-3 mt-2"
                value="Register"
            ></input>
        </form>
              
        <Link className=" border-b border-blue text-white mt-6" to="/login">
          Already have an account? Log in
        </Link>
    </div>
  </div>
  )
}
export default Register;