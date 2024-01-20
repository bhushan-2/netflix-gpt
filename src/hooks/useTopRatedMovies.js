import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/constant";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
     const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=3', MOVIE_OPTION);
     const json = await data.json();
     dispatch(addTopRatedMovies(json.results));
    };
  
    useEffect(() => {
      getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;