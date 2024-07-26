import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const SecondCnt = () => {

    const moviesIndia = useSelector((store)=> store.inMovies?.indiaMovies)
    const moviesCanada = useSelector((store)=> store.inMovies?.canadaMovies)
    const moviesUS = useSelector((store)=> store.inMovies?.usMovies)
    const moviesBra = useSelector((store)=> store.inMovies?.brazilMovies)
    const moviesGer = useSelector((store)=> store.inMovies?.germanMovies)
    const moviesSa = useSelector((store)=> store.inMovies?.saMovies)
    const moviesUk = useSelector((store)=> store.inMovies?.ukMovies)
    const moviesBat = useSelector((store)=> store.inMovies?.batMovies)

    // console.log(moviesBat)
    

    if(!moviesIndia || !moviesCanada || !moviesUS || !moviesBra || !moviesGer|| !moviesSa|| !moviesUk || !moviesUk) return

    // console.log(movies[1]?.imageSet?.horizontalPoster.w360)


  return (
    <div className='bg-black -mt-64'>
        <MoviesList title={"Indian Movies"}  movies={moviesIndia}/>
        
        <MoviesList title={"Harry Potter Movies"}  movies={moviesCanada}/>
      
        <MoviesList title={"United States Movies"}  movies={moviesUS}/>
        
        <MoviesList title={"Brazilian Movies"}  movies={moviesBra}/>
        
        <MoviesList title={"German Movies"}  movies={moviesGer}/>
        
        <MoviesList title={"South African Movies"}  movies={moviesSa}/>
    
        <MoviesList title={"UK Movies"}  movies={moviesUk}/> 
 
        <MoviesList title={"Batman Movies"}  movies={moviesBat}/> 
       
    </div>
  )
}

export default SecondCnt