import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";

const Browse = () => {
  const nowPlatingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json()
    console.log(data.results);
    
  };

  useEffect(()=>{
    nowPlatingMovies()
  },[])
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
