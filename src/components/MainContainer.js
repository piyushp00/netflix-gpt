import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import { VideoBackground } from "./VideoBackground";
import { useState } from "react";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return; //early return
  const mainMovie = movies[10];
  console.log(mainMovie);

    const {original_title, overview_title} = mainMovie

  return (
    <div>
      {/* {mainMovie} */}
      <VideoTitle title={original_title} overview={original_title} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
