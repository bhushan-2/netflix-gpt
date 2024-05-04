import PlayIcon from "../assets/img/play-icon.png";
import InfoIcon from "../assets/img/info-icon.png";
import { Link } from "react-router-dom";
import { chnageInfoDisplay } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch();

  const handleInfo = () => {
    dispatch(chnageInfoDisplay());
  };

  return (
    <div className="w-full h-full md:h-auto aspect-video pt-[45%] md:pt-[20%] px-6 md:px-12 absolute top-0 bg-gradient-to-r from-black text-white">
      <div className="font-bold text-lg md:text-3xl">{title}</div>
      <div className="hidden md:inline-block text-md w-1/4 line-clamp-4">
        {overview}
      </div>
      <div className="mt-3 md:mt-6 flex">
        <button className="flex items-center text-sm md:text-base bg-white py-1 md:py-2 px-2 md:px-8 rounded-md text-black hover:bg-opacity-50">
          <Link to={`/watch/?name=${encodeURIComponent(title)}`} className="flex items-center">
            <img src={PlayIcon} alt="play" className="md:w-10 mr-2" />
            <span> Play</span>
          </Link>
        </button>
        <button
          className="hidden md:flex items-center text-sm md:text-base bg-gray-500 py-1 md:py-2 md:px-10 rounded-md text-white ml-4"
          onClick={handleInfo}
        >
          <img src={InfoIcon} alt="info" className="md:w-10 mr-2" />
          <span> More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
