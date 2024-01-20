import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTiltle";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[0];
    const {original_title, overview, id} = mainMovie;
    return <div className="w-full">
        <VideoBackground  movieId={id}/>
        <VideoTitle title={original_title} overview={overview}/>
    </div>
}

export default MainContainer;