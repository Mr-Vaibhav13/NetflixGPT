import React from 'react'
import MovieCards from './MovieCards'

const MoviesList = ({title, movies}) => {
  
  // console.log(movies[0]?.imageSet?.horizontalPoster.w360)

  return (
    <div className='pl-11 pt-7'>
      
      
        <h1 className='text-white text-lg'>{title}</h1>

        <div className='flex overflow-x-scroll scrollbar-hide'>
        <div className='flex'>
        {movies.map((m)=> 
           <MovieCards key={m.id}
           movies = {m?.imageSet?.horizontalPoster.w360} />
        ) }
        </div>
        </div>
        </div>
  )
}

export default MoviesList