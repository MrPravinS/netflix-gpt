import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {  addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
    const dispatch = useDispatch()
  const trendingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPTIONS
    );
    const data = await res.json()
    dispatch(addTrendingMovies(data.results))
    
  };

  useEffect(()=>{
    trendingMovies()
  },[])
}


export default useTrendingMovies