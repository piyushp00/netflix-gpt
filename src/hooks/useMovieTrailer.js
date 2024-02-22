import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const VIDEO_API = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
  const getMovieVideos = async () => {
    const data = await fetch(`${VIDEO_API}`, API_OPTIONS);

    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
