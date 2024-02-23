import useHorizontalScroll from "../hooks/useHorizontalScroll";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollRef = useHorizontalScroll();
  return (
    <div className="py-1 px-16" >
      <h1 className="text-2xl font-bold py-3">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar" ref={scrollRef}>
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              movieInfo={movie}
              key={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
