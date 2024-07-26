import { useDispatch, useSelector } from "react-redux";
import { MOVIE_API_OPTIONS, MOVIE_API_URL_CANADA} from "../utils/constants";
import { addMovieCanada } from "../utils/inMoviesSlice";
import { useEffect } from "react";

const useCanMovies = () =>{

    const dispatch = useDispatch();  
    const mov = useSelector((store)=> store.inMovies.canadaMovies)

  
    const moviesFetch = async () =>{
  const data = await fetch(MOVIE_API_URL_CANADA, MOVIE_API_OPTIONS)
  
  const json = await data.json();
  // console.log(json)

  dispatch(addMovieCanada(json))

}

useEffect(()=>{
  mov && moviesFetch();
},[])
}

export default useCanMovies;