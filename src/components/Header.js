import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addData, removeData } from '../utils/infoSlice';
import { toggleGPT } from '../utils/GPTinfoSlice';

import { NETFLIX_LOGO, langaugeIdentify } from '../utils/constants';
import lang from '../utils/LanguageConstraints';
import { selectLang } from '../utils/configSlice';

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector(store => store.info)
  // console.log(user)
  const GPTtoggle = useSelector((store)=> store.GPTinfo.currentGPT) 


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;

          dispatch(addData({id: uid, email: email, name: displayName, photo: photoURL}))
          navigate("/browse")

        } else {
          navigate("/")
          dispatch(removeData())
        }
      });

      return () => unsubscribe;

},[])



  const handleSignOut = () =>{

    signOut(auth).then(() => {
      dispatch(removeData())
    }).catch((error) => {
      console.log(error)
      navigate('/error')
    });

  }

  const toggleGPTpage = () =>{
    dispatch(toggleGPT())
  }

  const langSelect = (e) =>{
    dispatch(selectLang(e.target.value))
  }

  return (
    <div className='flex justify-between w-full z-10 absolute py-3 px-8 bg-gradient-to-b from-black'>
      <img className='w-44'
      src={NETFLIX_LOGO} alt='logo'/>
    
    
    {user && <div className='flex py-4 mx-1' >
    
    <select className='mr-6 h-9 mt-2 rounded-md'
    onClick={langSelect}>
      {langaugeIdentify.map((lan)=>(
        <option key={lan.identifier} value={lan.identifier}
        >{lan.lang}</option>
      ))}
    </select>
      
    {/* GPT search */}
    <button className='text-white p-2 mr-3 mb-4 rounded-lg bg-purple-800'
    onClick={toggleGPTpage}
    > {GPTtoggle? "GPT search" : "Home Page"}</button>


      <div>
      <img className='w-10 h-10 ml-auto mr-auto' 
      src={user.photo} alt='user-img'/>

      <h1 className='text-yellow-700 text-base font-bold'>{user.name}</h1> 
      </div>

      <button onClick={handleSignOut}
      className='px-2 text-slate-200 text-base'>Sign Out</button>

    </div>}
    
    
    </div>
  )
}

export default Header