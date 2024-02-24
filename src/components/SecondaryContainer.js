import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="w-full absolute bg-black">
      <div className="mt-0 md:-mt-40 mb-10">
        <MovieList title={"Only on Netflix"} movies={movies.nowPlayingMovies} />
        <MovieList title={"New Releases"} movies={movies.popularMovies} />
        <MovieList
          title={"Top Rated Movies"}
          movies={movies.topRatedMovies}
        />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
