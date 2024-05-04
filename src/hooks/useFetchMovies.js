import { addWatchVideo, addWatchMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/constant";

const useFetchMovies = (name) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieDetails();
  }, [name]);

  const fetchMovieDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
      MOVIE_OPTION
    );
    const movies = await data.json();
    dispatch(addWatchMovies(movies.results));
    const vdata = await fetch(
      `https://api.themoviedb.org/3/movie/` + movies.results[0].id + `/videos`,
      MOVIE_OPTION
    );
    const video = await vdata.json();
    const videoFilter = video.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = videoFilter.length ? videoFilter[0] : video.results[0];
    dispatch(addWatchVideo(trailer));
  };
};

export default useFetchMovies;
