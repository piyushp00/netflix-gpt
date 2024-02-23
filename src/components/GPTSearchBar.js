import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";

const GPTSearchBar = () => {
  const langKey = useSelector(store => store.config.lang)
  return (
    <div className="mt-10 py-36 px-20 flex justify-center">
      <form className="w-7/12">
        <label
          
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
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
            className="block w-full p-5 ps-10 text-sm text-white border-black rounded-lg placeholder-gray-400 bg-black focus:ring-gray-600 focus:border-gray-600   "
            placeholder={lang[langKey].gptSearchPlaceholder}
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5  bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-3 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
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
