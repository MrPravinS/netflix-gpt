import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
  const nowPlatingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json()
    dispatch(addNowPlayingMovies(data.results))
    
  };

  useEffect(()=>{
    nowPlatingMovies()
  },[])
}


export default useNowPlayingMovies