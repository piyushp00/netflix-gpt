import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;

  if (!movieNames) return null; //TODO add shimmer ui
  return (
    <div className=" p-4 mx-auto text-white w-11/12 ">
      <div className="bg-black/95 backdrop-brightness-95 border-transparent rounded">
        {movieNames.map((movieName, index) => (
          <MovieList
            className="w-9/12"
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
