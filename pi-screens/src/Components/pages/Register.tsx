import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EMAIL_REGEX, PASSWORD_REGEX, CPF_REGEX } from "../../constants/constants";
import MaskedInput from '../InputMasks/InputMask'

const Register = () => {

  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef();

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsEmailValid] = useState(false);
  
  const [CPF, setCPF] = useState('');
  const [isValidCPF, setIsValidCPF] = useState(false);
  
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  
  const [matchPassword, setMatchPassword] = useState('');
  const [isMatchPasswordValid, setIsMatchPasswordValid] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');
  const [succes, setSucces] = useState(false);

  useEffect(() => {
    emailRef.current?.focus();
  }, [])

  useEffect(() => {
    setIsValidCPF(CPF_REGEX.test(CPF))
  },[CPF])

  useEffect(() => {
    setErrorMsg('');
  }, [email, password, matchPassword])

  useEffect(() => {
    setIsEmailValid(EMAIL_REGEX.test(email));
  }, [email])

  useEffect(() => {
    setIsPasswordValid(PASSWORD_REGEX.test(password));
    setIsMatchPasswordValid(password === matchPassword);
  },[password, matchPassword])

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  }
  
  return (
    <div className="bg-purple-900 min-h-screen flex flex-col">

    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form onSubmit={handleSubmit} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            
            <input
                type="text"
                className="block border border-gray-500-light w-full p-3 rounded mb-2.5"
                name=""
                placeholder="Username" />

            <input ref={emailRef}
                type="text"
                id="email"
                className = {isValidEmail ?
                   "block border border-purple-700 focus:border-purple-500 focus:ring-purple-700 w-full p-3 rounded mb-2.5" : 
                   "block border-gray-500 w-full focus:border-rose-500 focus:ring-white p-3 rounded mb-2.5"}
                name="E-mail"
                required
                minLength={3}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                placeholder="E-mail" />

            <p className={email && !isValidEmail ? "text-red-600 text-xs mb-2 ml-1 mt-1" : "hidden"}
              > Invalid E-mail
            </p>

            <MaskedInput 
              value={CPF} 
              onChange={(e:any) => setCPF(e.target.value)}
              className={ isValidCPF ?
                "block border border-purple-700 focus:border-purple-500 focus:ring-purple-700 w-full p-3 rounded mb-2.5" : 
                "block border border-gray-500 focus:border-rose-500 focus:ring-rose-700 w-full p-3 rounded mb-2.5" }
              
            />

            <p className={CPF && !isValidCPF ? "text-red-600 text-xs mb-2 ml-1 mt-1" : "hidden"}
              > Invalid CPF
            </p>

            <input 
                type="password"
                id="password"
                className={isPasswordValid ?
                   "block border border-purple-700 focus:border-purple-500 focus:ring-purple-700 w-full p-3 rounded mb-2.5" : 
                   "block border-gray-500 w-full focus:border-rose-500 focus:ring-white p-3 rounded mb-2.5"}
                required
                minLength={3}
                onChange={(e) => setPassword(e.target.value)}
                
                placeholder="Password" />

            <p className={password && !isPasswordValid ? "text-red-600 text-xs mb-2 ml-1 mt-1" : "hidden"}
              > Invalid Password <br></br>
                4 - 24 characters,
                At least 1 Special characcter <br></br>
                At least 1 Uppercase letter , 
                At least 1 Number
            </p>
                
            <input 
                type="password"
                className={isMatchPasswordValid && matchPassword?
                  "block border border-purple-700 focus:border-purple-500 focus:ring-purple-700 w-full p-3 rounded mb-2.5" : 
                  "block border-gray-500 w-full focus:border-rose-500 focus:ring-white p-3 rounded mb-2.5"}

                required
                minLength={3}
                onChange={(e) => setMatchPassword(e.target.value)}
                
                placeholder="Retype Password" />

            <p className={matchPassword && !isMatchPasswordValid ? "text-red-600 text-xs mb-2 ml-1 mt-1" : "hidden"}
              >Passwords dont match <br></br>
            </p>

            <button
                type="submit"
                disabled={isValidEmail === false || isPasswordValid === false || isMatchPasswordValid === false || isValidCPF === false}               
                className={isValidEmail === true && isPasswordValid === true && isMatchPasswordValid === true && isValidCPF === true ?
                   "w-full text-center py-3 rounded bg-purple-700 text-white hover:bg-purple-900 focus:outline-none my-1" :
                   "w-full text-center py-3 rounded bg-purple-300 text-white focus:outline-none my-1"}
                onClick= {() => navigate("/")}
            >Create Account</button>
        </form>
              
        <a className=" border-b border-blue text-white mt-6" href="localhost:3000">
          Already have an account? Log in
        </a>
  
    </div>
  </div>
  )
}

export default Register;