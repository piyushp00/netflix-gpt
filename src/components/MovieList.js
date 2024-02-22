import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("movielist");
  console.log(movies);
  return (
    <div className="py-1 px-8">
      <h1 className="text-2xl font-bold py-3">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
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
