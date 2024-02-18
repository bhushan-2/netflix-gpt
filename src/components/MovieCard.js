import { MOVIE_IMG_CDN } from "../utils/constant";

const MovieCard = ({ poster }) => {
  if (!poster) return null;
  return (
    <div className="">
      <img
        className="min-w-48 h-40 mr-5 rounded-sm"
        src={MOVIE_IMG_CDN + poster}
        alt="movie card"
      />
    </div>
  );
};

export default MovieCard;
