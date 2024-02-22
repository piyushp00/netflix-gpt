import { useNavigate } from "react-router-dom";
import { APP_LOGO } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { UserIconShimmer } from "./Shimmer";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  return (
    <div className="absolute top-0 w-screen px-16 py-2 bg-gradient-to-b from-black flex justify-between z-50 bg-transparent">
      <div>
        <img
          className={user !== null ? "w-32 mt-2" : "w-56 mt-2"}
          alt="logo"
          src={APP_LOGO}
        />
      </div>
      {user !== null ? (
        <div className="flex p-2 items-center">
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
