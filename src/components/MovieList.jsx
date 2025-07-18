import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  console.log(movies);

  if (!movies) return;

  return (
    <div className="pr-5 ">
        <h1 className="m-4 text-white text-3xl font-bold">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
