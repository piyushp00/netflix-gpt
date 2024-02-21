const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      
      <div className="">
      <button type="button" className=" px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Play Now</button>
      <button type="button" className="ml-2 px-5 py-3 text-base font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">More Info</button>

      </div>
    </div>
  );
};
 
export default VideoTitle;
