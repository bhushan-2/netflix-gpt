import { ReactComponent as PlaySVG } from '../assets/icons/play.svg';
import { ReactComponent as InfoSVG } from '../assets/icons/info.svg';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full h-full md:h-auto aspect-video pt-[45%] md:pt-[20%] px-6 md:px-12 absolute top-0 bg-gradient-to-r from-black text-white">
      <div className="font-bold text-lg md:text-3xl">{title}</div>
      <div className="hidden md:inline-block text-md w-1/4 line-clamp-4">{overview}</div>
      <div className="mt-3 md:mt-6 flex">
        <button className="flex items-center text-sm md:text-lg bg-white py-1 md:py-2 px-2 md:px-8 rounded-md text-black hover:bg-opacity-50">
          <PlaySVG/>
          <span> Play</span>
        </button>
        <button className="hidden md:flex items-center text-lg bg-gray-500 py-2 px-10 rounded-md text-white ml-4">
        <InfoSVG/>
          <span> More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;