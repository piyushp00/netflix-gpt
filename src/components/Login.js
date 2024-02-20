import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import { BACKGROUND_IMG } from "../utils/constants";


const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  }

    return (
      <div className="-z-1 bg-cover bg-center absolute top-0 left-0 right-0 bottom-0" style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}>
        <Header/>
        <form className="bg-black bg-opacity-85 w-4/12 absolute left-0 right-0 top-1/2 transform -translate-y-1/2 mx-auto text-white rounded-xl p-12">
          <h1 className="font-bold text-4xl mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          <div className="flex flex-col">
            {!isSignInForm && (
              <input className="p-3 my-3 bg-gray-800/70 rounded-md focus:outline-none focus:ring focus:ring-violet-300" type="text" placeholder="Full Name" />
            )}
            <input className="p-3 my-3 bg-gray-800/70 rounded-md focus:outline-none focus:ring focus:ring-violet-300" type="email" placeholder="Email" />
            <input className="p-3 my-3 bg-gray-800/70 rounded-md focus:outline-none focus:ring focus:ring-violet-300" type="password" placeholder="Password"  />
            <button className="p-3 my-7 bg-red-600 rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
          </div>
          <p className="text-gray-500 mt-5">{isSignInForm ? "New to Netflix?" : "Already a user?"}
          <Link><span className="font-bold text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? " Sign up now" : " Sign in"}</span></Link>
          </p>
        </form>
      </div>
    );
};

export default Login;
