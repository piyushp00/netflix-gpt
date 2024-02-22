import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import { VideoBackground } from "./VideoBackground";
import { useState } from "react";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return; //early return
  const mainMovie = movies[11];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="-z-5 relative -mt-24">
      {/* {mainMovie} */}
      <VideoTitle
        title={original_title}
        overview={overview}
      />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
