import { useSelector } from "react-redux";
import { multiLangLabels } from "../utils/language";

const GptSearchBar = () => {
    const lang = useSelector(store => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={multiLangLabels[lang].searchBarPlaceholder}
        />
        <button className="py-2 m-4 px-4 col-span-3 bg-red-600 rounded-md text-white">
        {multiLangLabels[lang].searchBtn}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
