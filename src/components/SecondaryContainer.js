import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black text-white  ">
        <div className="-mt-44 z-20 py-4 relative">
          <div className="bg-transparent backdrop-blur-[2px]	">
            <MovieList
              title={"Now Playing"}
              movies={movies.nowPlayingMovies}
            />
          </div>

          <MovieList
            title={"Popular"}
            movies={movies.popularMovies}
          />

          <MovieList
            title={"Most Watched"}
            movies={movies.nowPlayingMovies}
          />

          <MovieList
            title={"Watch it Again"}
            movies={movies.nowPlayingMovies}
          />

          <MovieList
            title={"New Releases"}
            movies={movies.nowPlayingMovies}
          />

          <MovieList
            title={"Bingeworthy Movies"}
            movies={movies.nowPlayingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
