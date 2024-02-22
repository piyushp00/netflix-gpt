import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

export const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-full">
      {/* absolute top-0 bottom-0 left-0 right-0 */}
      {/* className="w-screen h-4/6 absolute -z-5" */}

      <iframe
      className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key + "?autoplay=1&mute=1&end=20&controls=0"
        }
        title="YouTube video player"
        frameBorder="0"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
