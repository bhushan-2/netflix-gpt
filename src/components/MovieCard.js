import { MOVIE_IMG_CDN } from "../utils/constant";
import { Link } from "react-router-dom";

const MovieCard = ({ poster, title }) => {
  if (!poster) return null;
  return (
    <div className="min-w-36 md:min-w-48 h-40 mr-5 rounded-sm transition-transform duration-200 ease-in-out transform sm:hover:scale-125">
      <Link to={`/watch/?name=${encodeURIComponent(title)}`}>
        <img
          className="min-w-36 md:min-w-48 h-40 mr-5 rounded-sm"
          src={MOVIE_IMG_CDN + poster}
          alt="movie card"
        />
      </Link>
    </div>
  );
};

export default MovieCard;
