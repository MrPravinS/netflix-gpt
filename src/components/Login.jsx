import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword ,  signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);

  /* reference email and pass*/

  const password = useRef(null);
  // const fullName = useRef(null);

  const handleBtnClick = () => {
    // validate the form
    //  checkValidData(email,password)

    // console.log(email.current.value); // get the current value of the input
    // console.log(password.current.value);

    const message = checkValidData(
      email.current.value,
      password.current.value,
      // fullName.current.value
    );
    // console.log(validateUserMsg);
    setErrorMessage(message); // set error message

    if (message) return;

    // sign in/ sin up logic
    if (!isSignInForm) {
      // for sign up form
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(auth,  
        email.current.value,
        password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage)
        });
    }
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-96 p-12 my-36 mx-auto text-white bg-black bg-opacity-70 rounded-lg z-10"
      >
        <h1 className="text-3xl font-bold mb-3">
          {isSignInForm ? "Sign In" : "Sign Up"} {/*condition*/}
        </h1>

        {/* show only for new user  */}
        {!isSignInForm && (
          <input
            // ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email} //use for reference of input email
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />

        <input
          ref={password} //use for reference of input password
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-lg bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-1">{errorMessage}</p>
        <button
          className="w-full mt-2 px-2 py-3 bg-red-700 rounded-lg hover:bg-red-800"
          onClick={handleBtnClick}
        >
          {isSignInForm ? "Sign In" : " Sign up"}
        </button>

        <p className="p-4  text-center">
          {isSignInForm ? "New to Netflix? " : "Already resistered? "}
          <span className="font-bold cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "Sign Up now" : "Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
