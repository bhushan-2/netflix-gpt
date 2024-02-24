import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPTION } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      MOVIE_OPTION
    );
    const json = await data.json();

    const videoList = json.results.filter(
      (record) => record.type === "Trailer"
    );
    const trailer = videoList.length === 0 ? json.results[0] : videoList[0];
    console.log('trailer', trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
