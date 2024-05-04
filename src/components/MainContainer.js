import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTiltle";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[10];
    const {original_title, overview, id} = mainMovie;
    return <div className="w-full pt-[30%] md:pt-0 bg-black">
        <VideoBackground  movieId={id}/>
        <VideoTitle title={original_title} overview={overview}/>
    </div>
}

export default MainContainer;