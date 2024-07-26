import { useDispatch, useSelector } from "react-redux";
import { MOVIE_API_OPTIONS, MOVIE_API_URL_BAT} from "../utils/constants";
import { addMovieBat} from "../utils/inMoviesSlice";
import { useEffect } from "react";

const useBatmanMovies = () =>{

    const dispatch = useDispatch();  
    const mov = useSelector((store)=> store.inMovies.batMovies)
    
  
    const moviesFetch = async () =>{
  const data = await fetch(MOVIE_API_URL_BAT, MOVIE_API_OPTIONS)
  
  const json = await data.json();
  // console.log(json)

  dispatch(addMovieBat(json)) // check problem here

}

useEffect(()=>{
  mov && moviesFetch();
},[])
}

export default useBatmanMovies;