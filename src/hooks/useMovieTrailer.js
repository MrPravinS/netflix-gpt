import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
     const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?`,
      API_OPTIONS
    );
    const data = await res.json();

    const filterTrailer = data.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer[1] : data.results[0];
    dispatch(addTrailer(trailer))

  };

  useEffect(() => {
    getMovieVideos();
  }, []);
}

export default useMovieTrailer