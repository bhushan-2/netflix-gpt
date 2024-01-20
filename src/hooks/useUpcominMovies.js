import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/constant";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpComingMovies = async () => {
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=6', MOVIE_OPTION);
     const json = await data.json();
     dispatch(addUpComingMovies(json.results));
    };
  
    useEffect(() => {
      getUpComingMovies();
    }, []);
}

export default useUpcomingMovies;