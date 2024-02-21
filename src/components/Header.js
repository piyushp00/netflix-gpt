import { useNavigate } from "react-router-dom";
import { APP_LOGO } from "../utils/constants";
import { PROFILE_IMG } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useDispatch } from "react-redux";
// import { removeUser } from "../utils/userSlice";

const Header = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = auth.currentUser;
  console.log(user);

  const handleSignOut = () => {
    console.log("pqr");

    signOut(auth)
      .then(() => {
        // Sign-out successful.

        // dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "-" + errorMessage);
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-6 py-2 bg-gradient-to-b from-black flex justify-between">
      <div>
        <img
          className="w-56"
          alt="logo"
          src={APP_LOGO}
        />
      </div>
      {user !== null ? (
        <div className="flex p-2 items-center">
          <img
            className="w-10 h-10"
            src={PROFILE_IMG}
            alt="user_icon"
          />
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
