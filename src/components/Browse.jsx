import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";
import usePopulerMovies from "../hooks/usePopulerMovie";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const gptSearch = useSelector(store => store.gpt.viewGptSearch)
   useNowPlayingMovies()
   usePopulerMovies()
   useTopRatedMovies()
   useTrendingMovies()
   useUpComingMovies()
  return (
    <div>
      <Header />
      {gptSearch ? <GptSearch/>:<><MainContainer/>
      <SeconderyContainer/></>}
      
    </div>
  );
};

export default Browse;
