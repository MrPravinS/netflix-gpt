import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relatiive h-screen w-full flex items-center justify-center">
      <Header />
      <div className="h-screen w-full absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_small.jpg"
          alt="bg-img"
          className="h-full w-full object-cover"
        />
      </div>
      <form className="w-96 p-12 my-36 mx-auto text-white bg-black bg-opacity-70 rounded-lg z-10">
        <h1 className="text-3xl font-bold mb-3">
          {isSignInForm ? "Sign In" : "Sign Up"}  {/*condition*/}
        </h1>

        {/* show only for new user  */}
        {!isSignInForm && ( <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />)}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-lg bg-gray-700"
        />
        <button className="w-full mt-2 px-2 py-3 bg-red-700 rounded-lg hover:bg-red-800">
          {isSignInForm ? "Sign In":" Sign up"}
        </button>

        <p className="p-4  text-center">
          {isSignInForm?"New to Netflix? ":"Already resistered? "}
          <span className="font-bold cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm?"Sign Up now":"Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
