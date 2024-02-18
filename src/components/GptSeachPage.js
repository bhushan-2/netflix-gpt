import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";

const GptSearchPage = () => {
    return <div className="w-full">
        <GptSearchBar/>
        <GptSuggestions/>
    </div>
}

export default GptSearchPage;