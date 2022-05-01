import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { defaultInputStyle } from "../constants/StyleConstants";

interface FormInput {
  Email: string;
}

const ForgotPassword = () => {

  const { 
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,

  } = useForm<FormInput>({ 
    mode: "onSubmit",
  });

  const onSubmit = useCallback (async (form:FormInput) => {
    
  }, [])
  
  return (
    <section className="flex flex-col md:flex-row h-screen items-center ">
      <div className="h-screen bg-gradient-to-br to-purple-900 from-blue-400 lg:block md:w-1/2 xl:w-2/3 ">
        <h1>Seja Bem Vindo Ao Carona Project</h1>
      </div>

      <div className="bg-white w-full md:w-1/2 xl:w-1/3 px-7 lg:px-18 xl:px-8 xl:py-20">
        <div className="w-full h-full">

          <h2 className="text-xl md:text-4xl font-serif -mt-10 font-bold text-left">Recover Your Password</h2>
          <h6 className="font-serif text-neutral-500 text-left"> Enter your email address and we will send you a link to reset your password.</h6>
 
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">                                            
            <div className="mt-4">
                <input 
                  {...register("Email", {required:true, maxLength:28})} 
                  className={defaultInputStyle}
                  id="Email"
                  placeholder="Enter Your E-Mail"
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
           <div className="mt-12">
            <Link to={"/login"} className="text-purple-800" >Back To login</Link>
           </div> 
          </form>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword;