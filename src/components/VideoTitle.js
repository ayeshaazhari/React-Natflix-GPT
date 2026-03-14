const VideoTitle = ({ title, overview }) => {
  return (
    // <div className="  md:px-24 ">

    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="text-black bg-white text-lg py-2 font-bold px-8  rounded-lg hover:bg-opacity-50 ">
          Play
        </button>
        <button className="mx-2 bg-gray-500 font-bold text-white text-lg py-2 w-auto bg-gray-500 rounded-lg px-8">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
