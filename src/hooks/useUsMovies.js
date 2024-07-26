import { useDispatch, useSelector } from "react-redux";
import { MOVIE_API_OPTIONS, MOVIE_API_URL_US} from "../utils/constants";
import { addMovieUS} from "../utils/inMoviesSlice";
import { useEffect } from "react";

const useUsMovies = () =>{

    const dispatch = useDispatch();
    const mov = useSelector((store)=> store.inMovies.usMovies)
  
  
    const moviesFetch = async () =>{
  const data = await fetch(MOVIE_API_URL_US, MOVIE_API_OPTIONS)
  
  const json = await data.json();
  // console.log(json)

  dispatch(addMovieUS(json.shows))

}

useEffect(()=>{
  mov && moviesFetch();
},[])
}

export default useUsMovies;