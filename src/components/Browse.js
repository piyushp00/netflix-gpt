import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_API } from "../utils/constants";
import Header from "./Header";

const Browse = () => {

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_API, API_OPTIONS);
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
