import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export interface ILoginPageProps {};

const Login: React.FunctionComponent<ILoginPageProps> = (props) => {

  const navigate = useNavigate();
  
  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="h-screen bg-blue-800 lg:block md:w-1/2 xl:w-2/3 ">
        <img src="logo.svg" alt=" n ta funcionando" className="w-full h-full object-fill"/>
      </div>

      <div className="bg-white w-full md:w-1/2 xl:w-1/3 px-7 lg:px-18 xl:px-12">
        <div className="w-full h-full">

          <h2 className="text-xl md:text-4xl font-bold text-center">Carona project login/landing</h2>

          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 text-center text-purple-700">Sign in</h1>
          
          <form action="" className="mt-4">
            <div className="">
              <label className="block text-black">E-mail</label>
              <input type="email" name="" placeholder="Enter Username or E-mail" className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-purple-400 focus:bg-white focus:outline-none"></input>
            </div>

            {/* input senha */}
            <div className="mt-4">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" 
              className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-purple-400 focus:bg-white focus:outline-none"></input>
            </div>


            {/* checkbox */}
            <div className="flex items-start mb-2 mt-3">
              <div className="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-blue-0 h-4 w-4 rounded"/>
              </div>
              <div className="text-sm ml-3">
                <label htmlFor="remember" className="font-medium text-black">Remember me</label>
              </div>
            </div>

            {/* link ref esqueci senha */}
            <div className="mt-1 text-sm text-purple-700 hover:underline cursor-pointer font-semibold">
              <a href="#">Forgot Password</a>
            </div>

            {/* botao sign in */}
            <button type="submit" onClick={() => {navigate("/register")}} 
                className="w-full block bg-purple-600 hover:bg-purple-800 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Sign In
            </button>

            {/* separador "or" */}
            <div className="text-center mt-1">
             <p> or </p>
            </div>
            
            {/* botao registrar */}
            <button type="submit" onClick={() => {navigate("/register")}} 
            className="w-full block bg-purple-600 hover:bg-purple-800 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-2">Register
            </button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Login;