import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from '../Home_Page/MoviesList'

const GPTsuggestion = () => {

  const mov = useSelector((store)=> store.GPTinfo.moviesGPT)
  const movInfo = useSelector((store)=> store.GPTinfo.moviesInfoGPT)
 
  console.log(mov)
  // console.log(movInfo[3])

  return (
    
    <>
     {movInfo && movInfo.length >= 5 && mov && mov.length >= 5 ? (
        <div className='bg-black mt-28'>
          <MoviesList title={mov[0]} movies={movInfo[0]} />
          <MoviesList title={mov[1]} movies={movInfo[1]} />
          <MoviesList title={mov[2]} movies={movInfo[2]} />
          <MoviesList title={mov[3]} movies={movInfo[3]} />
          <MoviesList title={mov[4]} movies={movInfo[4]} />
        </div>
      ) : (
        <div>
          <p></p>
        </div>
      )}
    </>
  )
}

export default GPTsuggestion