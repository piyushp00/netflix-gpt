import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import { useRef } from "react";
import fetchGPTApi from "../hooks/fetchGPTApi";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movies in the TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGPTSearchClick = (e) => {
    e.preventDefault();
    // console.log(searchText.current.value);
    //make an api call to to GPT API to get movie result

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example result: Inception, Dune, Avengers, Final Hour, Interstellar";

    fetchGPTApi(gptQuery).then(async (result) => {
      const gptMovies = result.choices?.[0].message?.content.split(",");
      console.log(gptMovies);

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      //[Promise, Promise, Promise, Promise, Promise,]

      const tmdbResult = await Promise.all(promiseArray);
      // console.log(tmdbResult);

      dispatch(addGPTMovieResult({movieNames: gptMovies, movieResults: tmdbResult}));
    });
  };

  return (
    <div className="mt-10 py-36 px-20 flex justify-center">
      <form className="w-7/12">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            ref={searchText}
            className="block text-wrap w-full p-5 ps-10 pe-28 text-sm text-white border-black rounded-lg placeholder-gray-400 bg-black focus:ring-gray-600 focus:border-gray-600   "
            placeholder={lang[langKey].gptSearchPlaceholder}
            required
          />
          <button
            onClick={handleGPTSearchClick}
            type="submit"
            className="text-white absolute end-2.5  bottom-2 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-3 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            {lang[langKey].search}
          </button>
        </div>
      </form>
      {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-4z3qvp e1svuwfo1" data-name="Play" aria-labelledby=":rg:" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg> */}
    </div>
  );
};

export default GPTSearchBar;
