import { BACKGROUND_IMG } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
const GPTSearchPage = () => {
  

  return (
    <div className="">
      <div
        className="bg-cover bg-center absolute top-0 left-0 right-0 bottom-0 -z-1"
        style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}
      ></div>
      <GPTSearchBar />
      {/* <GPTMovieSuggestions /> */}
    </div>
  );
};

export default GPTSearchPage;
