import React from 'react'
import { Play } from 'lucide-react';
import { Info } from 'lucide-react';

const VideoTitle = ({title, type, overview}) => {
  return (

    <div className='pt-40 w-full pl-20 absolute bg-gradient-to-b from-black'>

        <h1 className='font-black text-5xl text-white'>{title}</h1>
        <h6 className='pt-9 font-bold text-xl text-white'>It is a {type.charAt(0).toUpperCase() + type.slice(1)}</h6>

        
        <div className='flex pt-5 '>
            <div className='rounded-lg flex border-2  text-white bg-zinc-600 w-24 py-1 opacity-90 hover:opacity-70'>
            <Play size={22} fill="white" 
            className='pt-1 pl-2'/>
            <button className='pl-2'>Play</button>
            </div>


            <div className=' rounded-lg flex border-2  bg-slate-200 opacity-85 w-28 py-1 px-1 ml-3 hover:opacity-70'>
            <Info size={22} fill="white" 
            className='pt-1'/>
            <button className='pl-1'>More info</button>
            </div>


        </div>

        <p className='pt-4 w-1/3 text-white text-base'>{overview}</p>



    </div>
  )
}

export default VideoTitle