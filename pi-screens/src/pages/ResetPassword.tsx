import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { PASSWORD_REGEX } from "../constants/constants";
import { defaultInputStyle } from "../constants/StyleConstants";

interface FormInput {
  password: string,
  confirmPassword: string,
}

const ResetPassword = () => {

  const { 
    register,
    handleSubmit,
    clearErrors,
    formState: { errors }
  } = useForm<FormInput>({ 
    mode: "onSubmit",
  });

  const onSubmit = useCallback (async (form:FormInput) => {
    
  }, [])
  
  return (
    <section className="flex flex-col md:flex-row h-screen items-center ">
      <div className="h-screen bg-gradient-to-br to-purple-900 from-blue-400 lg:block md:w-1/2 xl:w-2/3 ">
        <img className="object-scale-down pl-14 pt-28" src="security.svg " alt="" />
      </div>

      <div className="bg-white w-full md:w-1/2 xl:w-1/3 px-7 lg:px-18 xl:px-8 xl:py-20">
        <div className="w-full h-full">

          <h2 className="text-xl md:text-4xl font-serif -mt-10 font-bold text-left">Reset Your Password</h2>
          <h6 className="font-serif text-neutral-500 text-left"> Your E-mail has been verified with success ! <br /> Choose your new Password.</h6>
 
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">                                            
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
            <div className="mt-4">
                <input 
                  {...register("confirmPassword", {required:true})} 
                  className={defaultInputStyle}
                  id="ConfirmPassword"
                  placeholder="Retype Password"
                  style={{outline: 0}}
                  autoComplete="off"
              />
            </div>                                         
           <div className=" mt-10">                      
              <input 
                type="submit" 
                className="w-full block bg-purple-600 h-14 hover:bg-purple-800 text-white font-semibold rounded-lg px-4 py-3 mt-2"
                value="Send"
              ></input>
           </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ResetPassword;

