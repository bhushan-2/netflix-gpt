import MovieCard from "./MovieCard";
import Shimmer from "./Shimmer";

const MovieList = ({ title, movies }) => {

  if (movies?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="pl-2 md:pl-8">
      <h3 className="text-sm md:text-lg px-4 py-4 text-white">{title}</h3>
      <div className="flex px-4 overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies &&
            movies.map((movie) => {
              return <MovieCard key={movie.id} poster={movie.poster_path} title={movie.original_title}/>;
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
