import Header from "./Header";
import { useState } from "react";
import { BACKGROUND_IMG } from "../utils/constants";
import { PROFILE_IMG } from "../utils/constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setSignInForm] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    newError: null,
  });

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      return "Email is required";
    } else if (!emailRegex.test(value)) {
      return "Invalid email format";
    }
    return "";
  };

  const validatePassword = (value) => {
    if (!value) {
      return "Password is required";
    } else if (value.length < 6) {
      return "Password must be at least 6 characters long";
    }
    return "";
  };

  const validateFullName = (value) => {
    if (!value && !isSignInForm) {
      return "Full Name is required";
    }
    return "";
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    setErrors((prevState) => ({
      ...prevState,
      fullName: "",
    }));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors((prevState) => ({
      ...prevState,
      email: validateEmail(e.target.value),
    }));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors((prevState) => ({
      ...prevState,
      password: validatePassword(e.target.value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const fullNameError = validateFullName(fullName);
    setErrors({
      email: emailError,
      password: passwordError,
      fullName: fullNameError,
    });

    if (
      !(emailError || passwordError) &&
      !(isSignInForm === false && fullNameError)
    ) {
      // Form submission logic here
      console.log("Form submitted:", { fullName, email, password });

      //create a new user -signin/signup
      if (!isSignInForm) {
        //sign up logic
        createUserWithEmailAndPassword(auth, email, password, fullName)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            updateProfile(user, {
              displayName: fullName,
              photoURL: PROFILE_IMG,
            })
              .then(() => {
                // Profile updated!
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                // An error occurred
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrors((prevState) => ({
                  ...prevState,
                  newError: errorCode + "-" + errorMessage,
                }));
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + "-" + errorMessage);
            setErrors((prevState) => ({
              ...prevState,
              newError: errorCode + "-" + errorMessage,
            }));
          });
      } else {
        //sign in logic
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + "-" + errorMessage);
            setErrors((prevState) => ({
              ...prevState,
              newError: errorCode + "-" + errorMessage,
            }));
          });
      }
    }
  };

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
    setErrors({
      fullName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div
      className="bg-cover bg-center absolute top-0 left-0 right-0 bottom-0	 "
      style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}
    >
      <div className="absolute w-screen h-screen backdrop-brightness-50 ">
        <Header />

        <form
          className="bg-black bg-opacity-85 w-2/6 absolute left-0 right-0 top-1/2 transform -translate-y-1/2 mx-auto text-white rounded-md py-12 px-16"
          onSubmit={handleSubmit}
        >
          <h1 className="font-bold text-4xl mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <div className="flex flex-col">
            {!isSignInForm && (
              <input
                className={`p-3 my-3 bg-gray-800/70 rounded-md focus:outline-none focus:ring focus:ring-violet-300 ${
                  errors.fullName && "border-orange-500"
                }`}
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={handleFullNameChange}
              />
            )}
            {errors.fullName && (
              <p className="text-orange-500 font-thin -mt-1">
                {errors.fullName}
              </p>
            )}
            <input
              className={`p-3 my-3 bg-gray-800/70 rounded-md focus:outline-none focus:ring focus:ring-violet-300 ${
                errors.email && "border-orange-500"
              }`}
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            {errors.email && (
              <p className="text-orange-500 font-thin -mt-1">{errors.email}</p>
            )}
            <input
              className={`p-3 my-3 bg-gray-800/70 rounded-md focus:outline-none focus:ring focus:ring-violet-300 ${
                errors.password && "border-orange-500 text-or"
              }`}
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {errors.password && (
              <p className="text-orange-500 font-thin -mt-1">
                {errors.password}
              </p>
            )}
            <button className="p-3 my-7 bg-red-600 rounded-md">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            {errors.newError && (
              <p className="text-orange-500 font-thin -mt-1">
                {errors.newError}
              </p>
            )}
          </div>
          <p className="text-gray-500 mt-5">
            {isSignInForm ? "New to Netflix?" : "Already a user?"}
            <span
              className="font-bold text-white cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? " Sign up now" : " Sign in"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
