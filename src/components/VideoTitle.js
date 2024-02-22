import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-b from-black">
      <h1 className="text-6xl font-bold ">{title}</h1>
      <p className="py-6 text-md text-wrap w-3/12">{overview}</p>

      <div className="">
        <button
          type="button"
          className="px-5 text-base py-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md  me-2 mb-2 "
        >
          <FontAwesomeIcon icon={faPlay} /> Play Now
        </button>
        <button
          type="button"
          className="mx-2 px-5 py-3 text-base font-medium text-center text-white bg-gray-400 rounded-md hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300-300 dark:bg-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          <FontAwesomeIcon icon={faCircleInfo} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
