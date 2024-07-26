import React from 'react'
import Header from './Header'
import useInMovies from '../hooks/useInMovies'
import MainCnt from './Home_Page/MainCnt';
import SecondCnt from './Home_Page/SecondCnt';
import useCanMovies from '../hooks/useCanMovies';
import useUsMovies from '../hooks/useUsMovies';
import useBraMovies from '../hooks/useBraMovies';
import useGerMovies from '../hooks/useGerMovies';
import useSaMovies from '../hooks/useSaMovies';
import useUkMovies from '../hooks/useUkMovies';
import useBatmanMovies from '../hooks/useBatmanMovies';
import { useSelector } from 'react-redux';
import  GPTsearch from "./GPT_page/GPTsearch"



const Browser = () => {
  
  // fetch indian movies and store in redux
  useInMovies();
  useCanMovies();
  useUsMovies();
  useBraMovies();
  useGerMovies();
  useSaMovies();
  useUkMovies();
  useBatmanMovies();

  const GPTtoggle = useSelector((store) => store.GPTinfo.currentGPT)
  // console.log(GPTtoggle)
  
  return (
    <div className="overflow-hidden">
      <Header />
      
      {GPTtoggle ? <GPTsearch />:
      <div>
        <MainCnt />
         <SecondCnt />
      </div>
      }

      
    </div>
  )
}

export default Browser