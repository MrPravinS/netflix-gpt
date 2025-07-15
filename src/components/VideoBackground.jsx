
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store=>store.movies?.nowPlayingTrailer)
    useMovieTrailer(movieId)
  return (
    <div className=" inset-0 w-full h-full overflow-hidden z-0">
      <iframe className="w-full h-full overflow-hidden z-0 aspect-video pointer-events-none"
        
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        
        allow="accelerometer; autoplay;encrypted-media; "
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default VideoBackground;
