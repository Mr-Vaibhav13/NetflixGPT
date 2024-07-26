import React from 'react'

const MovieCards = ({movies}) => {


  return (
    <div className='w-80'>
      
      <img className='h-48 p-1 pb-3'
      alt='MovieCard' src={movies} />

    </div>
  )
}

export default MovieCards