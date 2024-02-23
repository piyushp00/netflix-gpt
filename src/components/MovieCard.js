import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movieInfo }) => {

  if(!movieInfo.poster_path) return null;
  return (
    // w-3/12 p-2 m-2
    <div className="w-52 pr-3 hover:brightness-75 cursor-pointer">
      <img
        alt={movieInfo.title}
        className="rounded-sm"
        src={IMG_CDN_URL + movieInfo.poster_path}
      />
    </div>
  );
};

export default MovieCard;
