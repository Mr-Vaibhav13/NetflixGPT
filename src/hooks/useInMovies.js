import { useDispatch, useSelector } from "react-redux";
import { MOVIE_API_OPTIONS, MOVIE_API_URL_INDIA } from "../utils/constants";
import { addMovie } from "../utils/inMoviesSlice";
import { useEffect } from "react";

const useInMovies = () =>{

    const dispatch = useDispatch(); 
    const mov = useSelector((store)=> store.inMovies.indiaMovies)
 
  
    const moviesFetch = async () =>{
  const data = await fetch(MOVIE_API_URL_INDIA, MOVIE_API_OPTIONS)
  
  const json = await data.json();
  // console.log(json)

  dispatch(addMovie(json.shows))

}

useEffect(()=>{
  mov && moviesFetch();
},[])
}

export default useInMovies;