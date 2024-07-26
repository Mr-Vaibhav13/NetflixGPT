import { useDispatch, useSelector } from "react-redux";
import { MOVIE_API_OPTIONS, MOVIE_API_URL_SA} from "../utils/constants";
import { addMovieSA} from "../utils/inMoviesSlice";
import { useEffect } from "react";

const useSaMovies = () =>{

    const dispatch = useDispatch();  
    const mov = useSelector((store)=> store.inMovies.saMovies)


    const moviesFetch = async () =>{
  const data = await fetch(MOVIE_API_URL_SA, MOVIE_API_OPTIONS)
  
  const json = await data.json();
  // console.log(json)

  dispatch(addMovieSA(json.shows))

}

useEffect(()=>{
  mov && moviesFetch();
},[])
}

export default useSaMovies;