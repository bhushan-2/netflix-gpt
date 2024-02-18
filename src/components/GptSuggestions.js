import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className=" bg-black m-5">
      {movieNames?.map((movieName, index) => (
        <MovieList key={index} title={movieName} movies={movieResults[index]} />
      ))}
    </div>
  );
};

export default GptSuggestions;
