import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SeconderyContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies.nowPlayingMovies);

  return (
    <div className="bg-black pl-12 ">
        <div className="-mt-56 relative z-30">

      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
    </div>
  );
};

export default SeconderyContainer;
