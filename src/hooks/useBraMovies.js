import { useDispatch, useSelector } from "react-redux";
import { MOVIE_API_OPTIONS, MOVIE_API_URL_BRAZIL} from "../utils/constants";
import { addMovieBrazil} from "../utils/inMoviesSlice";
import { useEffect } from "react";

const useBraMovies = () =>{

    const dispatch = useDispatch(); 
    const mov = useSelector((store)=> store.inMovies.brazilMovies)
 
  
    const moviesFetch = async () =>{
  const data = await fetch(MOVIE_API_URL_BRAZIL, MOVIE_API_OPTIONS)
  
  const json = await data.json();
  // console.log(json)

  dispatch(addMovieBrazil(json.shows))

}

useEffect(()=>{
  mov && moviesFetch();
},[])
}

export default useBraMovies;