import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopulerMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopulerMovies = () => {
    const dispatch = useDispatch()
  const nowPopulerMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json()
    dispatch(addPopulerMovies(data.results))
    
  };

  useEffect(()=>{
    nowPopulerMovies()
  },[])
}


export default usePopulerMovies