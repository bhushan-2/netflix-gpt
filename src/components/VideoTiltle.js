const VideoTitle = ({title, overview}) => {
    return <div className="mt-24 px-12">
        <div className="font-bold text-3xl">{title}</div>
        <div className="text-md w-1/4">{overview}</div>
        <div className="mt-6">
            <button className="text-lg bg-slate-500 py-1 px-10 rounded-md text-white">Play</button>
            <button className="text-lg bg-slate-500 py-1 px-10 rounded-md text-white ml-4">More Info</button>
        </div>
    </div>
}

export default VideoTitle;