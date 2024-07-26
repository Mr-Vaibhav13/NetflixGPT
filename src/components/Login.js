import React, { useRef, useState } from 'react'
import Header from './Header'
import {validationEntry} from '../utils/validationEntry'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addData } from '../utils/infoSlice';
import { LOGIN_BG_IMG, USER_PHOTO } from '../utils/constants';


const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true)
  
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const [validateError, setValidateError] = useState(null)


  const dispatch = useDispatch()

  const toggleSignIn = () =>{
    
    if(isSignIn === true){
      setIsSignIn(false)
    }

    else{
      setIsSignIn(true)
    }

  }

  const validateEntry = () =>{
    const isValid = validationEntry(email.current.value, password.current.value)
    
    setValidateError(isValid)
    if(isValid) return;


    if(!isSignIn){
      // SignUP
      
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {
     
      const user = userCredential.user;
      
      updateProfile(user, {
        displayName: name.current.value, 
        photoURL: USER_PHOTO
      }).then(() => {

        const {uid, email, displayName, photoURL} = auth.currentUser;
        dispatch(addData({id: uid, email: email, name: displayName, photo: photoURL}))

      }).catch((error) => {
        setValidateError(error)
      });


    
  })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      setValidateError(errorCode +" "+errorMessage)
    
  });


    }

    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {

    // const user = userCredential.user;
    // console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    setValidateError(errorCode +" "+errorMessage)
  });


    }


  }

  return (
    <div className=''>
      <Header />
      
      <div className='absolute'>
        <img className='max-[1096px]:h-screen'
        src={LOGIN_BG_IMG} alt='bg'/>         
      </div>
      



      <form onSubmit={(e) =>{ e.preventDefault()}}
      className='absolute bg-black w-3/12 my-24 right-0 left-0 mx-auto
      p-10 bg-opacity-80
      max-[1262px]:w-1/3
      max-[950px]:w-1/2
      max-[630px]:w-full'
      id='loginForm'>
          
          <h2 className='text-neutral-50 my-3 font-bold text-4xl pb-5'>
             {isSignIn? "Sign In": "Sign Up"}
          </h2>
          
          {!isSignIn && 
             <input ref={name}  
             className='w-11/12 p-4 m-2 text-white	bg-transparent border-2 border-gray-500 rounded-md focus:border-teal-500 focus:outline-none' 
            type='text' placeholder='Username'/>
          }

          <input ref={email}
          className='w-11/12 p-4 m-2 text-white	bg-transparent border-2 border-gray-500 rounded-md focus:border-teal-500 focus:outline-none' 
          type='text' placeholder='Email or mobile number'/>
          
          <input ref={password}
          className='w-11/12 p-4 m-2 text-white	 bg-transparent border-2 border-gray-500 rounded-md  focus:border-teal-500 focus:outline-none'
          type='password' placeholder='Password'/>
          
          <p className='text-red-500 mx-3'>
          {validateError}</p>

          <button onClick={validateEntry} 
          className='bg-red-600 p-2 m-2 w-11/12 rounded-md text-white	'>
          {isSignIn? "Sign In": "Sign Up"}</button>

          {/* <p className='text-slate-500 mx-10'>OR</p>  

          <button className='bg-slate-400 p-2 m-2 bg-opacity-40	 w-11/12 rounded-md text-white	'>
            Use a sign-in code</button>

            <p className='m-3'><a className='text-white text-center'
            href='/'
            >Forgot password?</a></p>

            <div className='py-2 m-3'>
            <input type='checkbox' name='rem'/>
            <label for="rem" className='px-2 text-white'>Remember me</label>
            
            <p className='my-4 text-xs text-slate-500'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            </div>
           */}

            <p className='my-3 mx-2 text-slate-400'>{isSignIn? 'New to Netflix?': "Already a user?"} 
            <button onClick={toggleSignIn}
            className='text-white px-2 font-semibold'>{isSignIn? "Sign Up Now": "Sign In"}</button></p> 

      </form>

    </div>
  )
}

export default Login