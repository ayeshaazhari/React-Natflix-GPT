import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  // fetch trailer video
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const url = "https://api.themoviedb.org/3/movie/" + movieId + "/videos";

    const data = await fetch(url, API_OPTIONS);
    const jsondata = await data.json();

    const filterdata = jsondata.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterdata.length ? filterdata[0] : jsondata.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
