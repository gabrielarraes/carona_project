import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EMAIL_REGEX, PASSWORD_REGEX, CPF_REGEX, USERNAME_REGEX } from "../constants/constants";
import BasicInput from "../Components/Input/BasicInput";
import MaskedInput from '../Components/Input/InputMask'
import { useCustomer } from "../hooks/useCustomer";

const Register = () => {

  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const { createUser } = useCustomer();
  const errorRef = useRef();

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsEmailValid] = useState(false);

  const [username, setUsername] = useState('');
  const [isValidUsername, setIsValidUsername] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [isValidFirstName, setIsValidFirstName] = useState(false);

  const [lastName, setLastName] = useState('');
  const [isValidLastName, setIsValidLastName] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState(0);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);

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
    setIsValidUsername(USERNAME_REGEX.test(username))
  },[username])
  
  useEffect(() => {
    setIsValidFirstName(USERNAME_REGEX.test(firstName))
  },[firstName])

  useEffect(() => {
    setIsValidLastName(USERNAME_REGEX.test(lastName))
  },[lastName])

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

  //implementar await pra receber requisiçao do backend
  const handleRegisterButton = useCallback(async () => {
    await createUser({ 
      user: {
      username: username,
      password: password,
      email: email
    },
      cpf: CPF,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber
    })
  }, [createUser, email,password,username,CPF,firstName,lastName,phoneNumber])
  
  return (
    <div className="bg-gradient-to-br to-purple-900 from-blue-400 min-h-screen flex flex-col">

    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <form className="bg-white px-6 py-8 rounded shadow-2xl shadow-black text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            
            <BasicInput
                type="text"
                className={isValidUsername}
                placeHolder="Username"
                onChange={(e:any) => setUsername(e.target.value)}
                valid={isValidUsername} 
                maxLenght={19}/>

            <BasicInput
                type="text"
                className={isValidFirstName}
                placeHolder="First Name"
                onChange={(e:any) => setFirstName(e.target.value)}
                valid={isValidFirstName} 
                maxLenght={20}/>

            <BasicInput
                type="text"
                className={isValidLastName}
                placeHolder="Last Name"
                onChange={(e:any) => setLastName(e.target.value)}
                valid={isValidLastName} 
                maxLenght={19}/>

            <BasicInput
                type="text"
                className={isValidPhoneNumber}
                placeHolder="Phone Number"
                onChange={(e:any) => setPhoneNumber(e.target.value)}
                valid={isValidPhoneNumber} 
                maxLenght={12}/>
                

            <p className={username && !isValidUsername ? "text-red-600 text-xs mb-2 ml-1 mt-1" : "hidden"}
              > Invalid Username
            </p>

            <BasicInput 
                type="text"
                className={isValidEmail}
                placeHolder="Email"
                onChange={(e:any) => setEmail(e.target.value)}
                valid={isValidEmail} 
                maxLenght={50} />

            <p className={email && !isValidEmail ? "text-red-600 text-xs mb-2 ml-1 mt-1" : "hidden"}
              > Invalid E-mail
            </p>

            <MaskedInput 
              value={CPF} 
              onChange={(e:any) => setCPF(e.target.value)}
              className={ isValidCPF && CPF ?
                "block border border-purple-700 focus:border-purple-500 focus:ring-purple-700 bg-gray-50 focus:bg-white w-full p-3 rounded-lg mb-2.5" : 
                "block border border-gray-500 focus:border-rose-500 focus:ring-rose-700 bg-gray-50 focus:bg-white w-full p-3 rounded-lg mb-2.5" }             
            />

            <p className={CPF && !isValidCPF ? "text-red-600 text-xs mb-2 ml-1 mt-1" : "hidden"}
              > Invalid CPF
            </p>

            <BasicInput 
                type="password"
                className={isPasswordValid}
                placeHolder="Password"
                onChange={(e:any) => setPassword(e.target.value)}
                valid={isPasswordValid} 
                maxLenght={24} />

            <p className={password && !isPasswordValid ? "text-red-600 text-xs mb-2 ml-1 mt-1" : "hidden"}
              > Invalid Password <br></br>
                4 - 24 characters,
                At least 1 Special characcter <br></br>
                At least 1 Uppercase letter , 
                At least 1 Number
            </p>
                
            <input 
                type="password"
                className={isMatchPasswordValid && matchPassword ?
                  "block border border-purple-700 focus:border-purple-500 focus:ring-purple-700 bg-gray-50 focus:bg-white w-full p-3 rounded-lg mb-2.5" : 
                  "block border-gray-500 w-full focus:border-rose-500 focus:ring-white bg-gray-50 focus:bg-white p-3 rounded-lg mb-2.5"}
                required
                minLength={3}
                onChange={(e) => setMatchPassword(e.target.value)}
                placeholder="Retype Password" />

            <p className={matchPassword && !isMatchPasswordValid ? "text-red-600 text-xs mb-2 ml-1 mt-1" : "hidden"}
              >Passwords dont match <br></br>
            </p>

            <button
                type="submit"
                disabled={
                   isValidEmail === false ||
                   isPasswordValid === false || 
                   isMatchPasswordValid === false ||
                   isValidCPF === false ||
                   isValidUsername === false ||
                   isValidFirstName === false ||
                   isValidLastName === false ||
                   isValidPhoneNumber === false 
                }               
                className={isValidEmail === true && isPasswordValid === true && isMatchPasswordValid === true && isValidCPF === true && isValidUsername === true ?
                   "w-full text-center py-3 rounded bg-purple-700 text-white hover:bg-purple-900 focus:outline-none my-1" :
                   "w-full text-center py-3 rounded bg-purple-300 text-white focus:outline-none my-1"}
                onClick={handleRegisterButton}
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