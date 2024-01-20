import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/constant";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', MOVIE_OPTION);
     const json = await data.json();
     dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;