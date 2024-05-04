import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import MovieInfo from "./MovieInfo";

const VideoBackground = ({ movieId , details}) => {
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  const isInfoOpen = useSelector((store) => store?.movies?.isInfoOpen);

  useMovieTrailer(movieId);

  return (
    <div className="w-full">
       {isInfoOpen &&  <MovieInfo movieDetails={details}/>}
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
