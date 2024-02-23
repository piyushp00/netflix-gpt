import { useNavigate } from "react-router-dom";
import { APP_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { UserIconShimmer } from "./Shimmer";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    console.log("pqr");

    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "-" + errorMessage);
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="fixed top-0 w-screen px-16 py-2 bg-gradient-to-b from-black flex justify-between z-30 bg-transparent">
      <div>
        <img
          className={user !== null ? "w-32 mt-2" : "w-56 mt-2"}
          alt="logo"
          src={APP_LOGO}
        />
      </div>
      {user !== null ? (
        <div className="flex p-2 items-center">
          {showGPTSearch && <select
            onChange={handleLanguageChange}
            className="bg-black border border-gray-600 text-white text-sm rounded-lg focus:ring-gray-300 focus:border-gray-300 block p-1"
          >
            {SUPPORTED_LANGUAGES.map(lang => <option className="text-white bg-black" key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}

          <button
            onClick={handleGPTSearchClick}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-normal rounded-md text-sm px-4 py-1 text-center mx-5"
          >
            {showGPTSearch ? "Home" : "SeachGPT"}
          </button>

          {user.photoURL === null ? (
            <UserIconShimmer />
          ) : (
            <img
              className="w-8 h-8 rounded-sm"
              src={user?.photoURL}
              alt="user_icon"
            />
          )}
          <span className="mx-2 text-white">{user?.displayName}</span>
          <button
            className="font-bold text-white ml-3  hover:underline"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
