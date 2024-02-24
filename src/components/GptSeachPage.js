import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import bgImage from "../assets/img/netflix-bg.jpg";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10 w-full">
        <img className="h-screen w-full object-cover" src={bgImage} alt="bg" />
      </div>
      <div>
        <GptSearchBar />
        <GptSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
