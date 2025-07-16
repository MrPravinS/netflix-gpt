const VideoTitle = ({title, overview}) => {
    return (
        <div className="w-screen aspect-video  bg-gradient-to-r from-black pt-[20%] px-36 absolute text-white">
            <h1 className="text-6xl font-bold ">{title}</h1>
            {/* <p className="py-6 text-lg  w-1/3">{overview}</p> */}
            <div className="mt-32">
                <button  className="bg-white text-black font-bold  transition duration-150 ease-in-out  px-10 py-2 rounded-lg hover:bg-opacity-80">Play</button>
                <button  className="mx-3 bg-gray-400 text-white font-bold   transition duration-150 ease-in-out px-7  py-2 rounded-lg hover:bg-opacity-70">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle