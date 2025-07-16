import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addUpComingMovies(data.results));
  };

  useEffect(() => {
    upComingMovies();
  }, []);
};

export default useUpComingMovies;
