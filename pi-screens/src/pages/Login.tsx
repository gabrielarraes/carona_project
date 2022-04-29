import { useCallback } from "react";
import { defaultInputStyle } from "../constants/StyleConstants";
import { useForm } from "react-hook-form";
import { useCustomer } from "../hooks/useCustomer";
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";


interface FormInput {
  userName: string;
  password: string;
}

const Login = () => {

  const { signIn } = useCustomer();
  const navigate = useNavigate();

  const { 
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,

  } = useForm<FormInput>({ 
    mode: "onSubmit",
  });

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
        <h1>Seja Bem Vindo Ao Carona Project</h1>
      </div>

      <div className="bg-white w-full md:w-1/2 xl:w-1/3 px-7 lg:px-18 xl:px-8 xl:py-20">
        <div className="w-full h-full">

          <h2 className="text-xl md:text-4xl font-serif -mt-10 font-bold text-center mb-20">Sign In</h2>

          
          
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
                  {...register("password", {required:true, maxLength:15})} 
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

              <div className="flex text-sm space-x-80">
                <label htmlFor="remember" className="ml-2 font-medium text-black">Remember me</label>
                <Link to="/forgotPassword" className="">Forgot Password</Link>
              </div>
            </div>
       
           <div className=" mt-16">
            <input 
                type="submit" 
                className="w-full h-14 block bg-purple-600 hover:tracking-wider hover:bg-purple-800 text-white font-semibold rounded-lg px-4 py-3 mt-2"
                value="Sign In"
              ></input>

              <div className="text-center mt-1">
              <p> or </p>
              </div>            
              
              <input 
                type="button" 
                className="w-full block bg-purple-600 h-14 hover:bg-purple-800 text-white font-semibold rounded-lg px-4 py-3 mt-2"
                value="Register"
                onClick={() => {
                  navigate("/register")
                }}
              ></input>
           </div>
            
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login;