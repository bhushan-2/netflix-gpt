import { useDispatch, useSelector } from "react-redux";
import { multiLangLabels } from "../utils/language";
import { useRef } from "react";
import openai from "../utils/openAI";
import { MOVIE_OPTION } from "../utils/constant";
import { addGptSearchResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const lang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGPTSearch = async () => {
    console.log(searchText.current.value);
    const query =
      "Act as a movie recommendation system, suggest 5 movies names with comma separated values for the query: " +
      searchText.current.value;

    const searchResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = searchResult.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovie(movie));

    const results = await Promise.all(promiseArray);

    dispatch(
      addGptSearchResult({ movieNames: gptMovies, movieResults: results })
    );
  };

  const searchMovie = async (movie) => {
    const movieName = movie.includes(".") ? movie.split(".")[1] : movie;
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      MOVIE_OPTION
    );
    const json = await data.json();
    return json.results;
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full mx-2 md:mx-0 md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={multiLangLabels[lang].searchBarPlaceholder}
        />
        <button
          className="py-2 m-4 px-4 col-span-3 bg-red-600 rounded-md text-white"
          onClick={handleGPTSearch}
        >
          {multiLangLabels[lang].searchBtn}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
