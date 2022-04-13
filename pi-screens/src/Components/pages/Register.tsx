import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EMAIL_REGEX, PASS_RGX_EXP, ValidRegisterPageInput } from "../../constants/constants";

const Register = () => {

  const navigate = useNavigate();
  const userRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef();

  const [user, setUser] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passowrdFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState('');
  const [isMatchPasswordValid, setIsMatchPasswordValid] = useState(false);
  const [isMatchPasswordFocus, setIsMatchPasswordFocus] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');
  const [succes, setSucces] = useState(false);

  useEffect(() => {
    userRef.current?.focus();
  }, [])

  useEffect(() => {
    setErrorMsg('');
  }, [user, password, matchPassword])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(user));
  }, [user])

  useEffect(() => {
    setIsPasswordValid(PASS_RGX_EXP.test(password));
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
                className="block border border-grey-light w-full p-3 rounded mb-2.5"
                name=""
                placeholder="Username" />

            <input ref={userRef}
                type="text"
                id="email"
                className = {validEmail ?
                   "block border border-purple-700 focus:border-purple-500 focus:ring-purple-700 w-full p-3 rounded mb-2.5" : 
                   "block border-grey w-full focus:border-rose-500 focus:ring-white p-3 rounded mb-2.5"}
                name="E-mail"
                required
                minLength={3}
                onChange={(e) => setUser(e.target.value)}
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                autoComplete="off"
                placeholder="E-mail" />

                <p className={user && !validEmail ? "text-red-600 text-xs mb-2 ml-1 mt-1" : "hidden"}
                > Invalid E-mail
                </p>

            <input 
                type="password"
                id="password"
                className={isPasswordValid ?
                   "block border border-purple-700 focus:border-purple-500 focus:ring-purple-700 w-full p-3 rounded mb-2.5" : 
                   "block border-grey w-full focus:border-rose-500 focus:ring-white p-3 rounded mb-2.5"}
                required
                minLength={3}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                placeholder="Password" />

                <p className={password && !isPasswordValid ? "text-red-600 text-xs mb-2 ml-1 mt-1" : "hidden"}
                > Invalid Password <br></br>
                   4 - 24 characters <br></br>
                   At least 1 special characcter <br></br>
                   At least 1 Uppercase letter
                </p>
                
            <input 
                type="password"
                className={isMatchPasswordValid && matchPassword?
                  "block border border-purple-700 focus:border-purple-500 focus:ring-purple-700 w-full p-3 rounded mb-2.5" : 
                  "block border-grey w-full focus:border-rose-500 focus:ring-white p-3 rounded mb-2.5"}

                required
                minLength={3}
                onChange={(e) => setMatchPassword(e.target.value)}
                onFocus={() => setIsMatchPasswordFocus(true)}
                onBlur={() => setIsMatchPasswordFocus(false)}

                placeholder="Retype Password" />

              <p className={matchPassword && !isMatchPasswordValid ? "text-red-600 text-xs mb-2 ml-1 mt-1" : "hidden"}
                  > Passwords dont match <br></br>
                  
              </p>

            <button
                type="submit"

                disabled={validEmail === false || isPasswordValid === false || isMatchPasswordValid === false}
               
                className={validEmail === true && isPasswordValid === true && isMatchPasswordValid === true ?
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