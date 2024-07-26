import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../../utils/LanguageConstraints'
import { addMoviesGPT } from '../../utils/GPTinfoSlice'
// import openai from '../utils/openAI'
import {MOVIE_API_OPTIONS} from "../../utils/constants"

const GPTinput = () => {
  
  const selectedLang = useSelector((store)=>store.config.langPresent)
  const inputText = useRef(null)
  const dispatch = useDispatch()
  const mov = useSelector((store)=> store.GPTinfo.moviesGPT)
  const movInfo = useSelector((store)=> store.GPTinfo.moviesInfoGPT)
 

  const searchMovieAPI = async(movie) =>{
    const data = await fetch(`https://streaming-availability.p.rapidapi.com/shows/search/title?country=in&title=${movie}&series_granularity=show&show_type=movie&output_language=en`,
    MOVIE_API_OPTIONS
    )
    const json = await data.json()
    //  console.log(json)

     return json
    
  }

  const moviesSearch= async () =>{
    const txt = inputText.current.value;

    const GPTquery = "Act like as a movie recommendation app where the input is " + txt + ". Give me the name of the 5 movies in one word as example like Srikant, Animal, Gadar, Welcome, Golmaal"
    

    // NOTE:- CHAT GPT API quota is exceded thus giving hardcoded movies

    // const moviesLst = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: GPTquery }],
    //   model: 'gpt-3.5-turbo',
    // });

    // console.log(moviesLst)
    const moviesList = ["Gadar", "Welcome", "Dhamaal", "Phir hera pheri", "Dead Poets society"]
    
    if(movInfo === null){
      const dtaPromises = moviesList.map((m)=> searchMovieAPI(m))
      const moviesInfo = await Promise.all(dtaPromises)
      
      dispatch(addMoviesGPT({moviesGPT: moviesList, moviesInfoGPT:moviesInfo}))
    }

    

    // console.log(moviesInfo)

    
    }

    
  

  return (

    
    <div className='w-1/2 
    mt-[20%] bg-black ml-[20%] mx-1 rounded-md'>
      <form className='p-2 flex' 
      onSubmit={(e)=> e.preventDefault()}>

      <input className='w-[90%] ml-1 py-2 px-2 rounded-lg' 
      type='text' ref={inputText}
      placeholder={lang[selectedLang].text}/>
      
      
      <button className='ml-4 text-white bg-red-600 hover:bg-red-500
       p-2 rounded-lg'
      onClick={moviesSearch}
      >{lang[selectedLang].search}</button>
      
      </form>
    </div>
  )
}

export default GPTinput