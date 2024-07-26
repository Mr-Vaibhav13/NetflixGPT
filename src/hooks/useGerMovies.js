import { useDispatch, useSelector } from "react-redux";
import { MOVIE_API_OPTIONS, MOVIE_API_URL_GERMAN} from "../utils/constants";
import { addMovieGerman} from "../utils/inMoviesSlice";
import { useEffect } from "react";

const useGerMovies = () =>{

    const dispatch = useDispatch();
    const mov = useSelector((store)=> store.inMovies.germanMovies)
  
  
    const moviesFetch = async () =>{
  const data = await fetch(MOVIE_API_URL_GERMAN, MOVIE_API_OPTIONS)
  
  const json = await data.json();
  // console.log(json)

  dispatch(addMovieGerman(json.shows))

}

useEffect(()=>{
  mov && moviesFetch();
},[])
}

export default useGerMovies;