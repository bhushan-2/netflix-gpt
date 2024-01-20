import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-8">
      <h3 className="text-lg px-4 py-4 text-white">{title}</h3>
      <div className="flex px-4 overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies &&
            movies.map((movie) => {
              return <MovieCard key={movie.id} poster={movie.poster_path} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
