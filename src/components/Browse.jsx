import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";
import usePopulerMovies from "../hooks/usePopulerMovie";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";

const Browse = () => {
   useNowPlayingMovies()
   usePopulerMovies()
   useTopRatedMovies()
   useTrendingMovies()
   useUpComingMovies()
  return (
    <div>
      <Header />
      <MainContainer/>
      <SeconderyContainer/>
    </div>
  );
};

export default Browse;
