import { useDispatch, useSelector } from "react-redux";
import { MOVIE_API_OPTIONS, MOVIE_API_URL_UK} from "../utils/constants";
import { addMovieUK} from "../utils/inMoviesSlice";
import { useEffect } from "react";

const useUkMovies = () =>{

    const dispatch = useDispatch();  
    const mov = useSelector((store)=> store.inMovies.ukMovies)

  
    const moviesFetch = async () =>{
  const data = await fetch(MOVIE_API_URL_UK, MOVIE_API_OPTIONS)
  
  const json = await data.json();
  // console.log(json)

  dispatch(addMovieUK(json.shows))

}

useEffect(()=>{
  mov && moviesFetch();
},[])
}

export default useUkMovies;