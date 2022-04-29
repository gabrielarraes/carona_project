import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../constants/constants";
import { defaultInputStyle } from "../constants/StyleConstants";
import { useForm } from "react-hook-form";
import { useCustomer } from "../hooks/useCustomer";

interface FormInput {
  userName: string;
  password: string;
}

const Login = () => {

  const { 
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,

  } = useForm<FormInput>({ 
    mode: "onSubmit",
    
  });

  const { signIn } = useCustomer();

  const onSubmit = useCallback (async (form:FormInput) => {
    
    await signIn ({
    username: form.userName,
    password: form.password,

  }).catch (err => {
    if(err.response.status === 400 || 401) {
      console.log(err.response.data);
    }
  });
  console.log()
}, [signIn])
  
  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="h-screen bg-gradient-to-br to-purple-900 from-blue-400 lg:block md:w-1/2 xl:w-2/3 ">
        
      </div>

      <div className="bg-white w-full md:w-1/2 xl:w-1/3 px-7 lg:px-18 xl:px-12">
        <div className="w-full h-full">

          <h2 className="text-xl md:text-4xl font-bold text-center">Carona project login/landing</h2>

          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 text-center text-purple-700">Sign in</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <div className="">
                <input 
                {...register("userName", {required:true, maxLength:25, minLength:5})} 
                className={defaultInputStyle}
                id="Username"
                placeholder="Username"
                style={{outline: 0}}
                autoComplete="off"
                onFocus={() => clearErrors("userName")}
              />
            </div>
            
            {errors?.userName?.type === "required" && <p className="ml-1 mb-1 text-left text-rose-600">Username is required</p>}

            {/* input senha */}
            <div className="mt-4">
                <input 
                  {...register("password", {required:true, maxLength:15, pattern: PASSWORD_REGEX})} 
                  className={defaultInputStyle}
                  id="password"
                  placeholder="Password"
                  style={{outline: 0}}
                  autoComplete="off"
              />
            </div>
                        
            <div className="flex items-start mb-2 mt-3">
              <div className="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-blue-0 h-4 w-4 rounded"/>
              </div>
              <div className="text-sm ml-3">
                <label htmlFor="remember" className="font-medium text-black">Remember me</label>
              </div>
            </div>
       
            <div className="mt-1 text-sm text-purple-700 hover:underline cursor-pointer font-semibold">
              <a href="#">Forgot Password</a>
            </div>
           
            <input 
              type="submit" 
              className="w-full block bg-purple-600 hover:bg-purple-800 text-white font-semibold rounded-lg px-4 py-3 mt-2"
              value="Sign In"
            ></input>

            <div className="text-center mt-1">
             <p> or </p>
            </div>            
            
            <input 
              type="button" 
              className="w-full block bg-purple-600 hover:bg-purple-800 text-white font-semibold rounded-lg px-4 py-3 mt-2"
              value="Register"
            ></input>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Login;