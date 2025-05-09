import React from 'react'
import Header from './Header'
import Netflix_bg from '../assets/Images/Netflix_bg.jpg'
import { useState} from 'react'

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div>
        <img src={Netflix_bg} className='  w-screen absolute'></img>
      </div>
      <form className='absolute bg-black/80 p-12 w-4/12 rounded-lg flex flex-col justify-center top-2/12 left-4/12'>
        <h1 className='font-bold text-3xl text-white py-4'>{isSignInForm ? "Sign In" : "Sign Up"} </h1>
        {isSignInForm ? "" : <input type = "text" placeholder="Enter Name" className='p-4 my-2 bg-black/90 w-full text-white border border-gray-400 rounded-md'/> }
        <input type = "text" placeholder="Email Address" className='p-4 my-2 bg-black/90 w-full text-white border border-gray-400 rounded-md'/>
        <input type = "password" placeholder="Password" className='p-4 my-2  bg-black/90 text-white border border-gray-400 w-full rounded-md'/>
        <button  className='p-2 my-2 bg-red-500 w-full rounded-md'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        {isSignInForm ? 
         <p className='text-gray-400 cursor-pointer' onClick={toggleSignUpForm}>New to Netflix? <span className='text-white'>Sign Up Now</span></p>:
        <p className='text-gray-400 cursor-pointer' onClick={toggleSignUpForm}>Already a User? <span className='text-white'>Sign In Now</span></p> 
       }
      </form>
    </div>
  )
}

export default Login