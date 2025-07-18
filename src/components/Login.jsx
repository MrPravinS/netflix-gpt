import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { PHOTOURL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  //navigation
  const dispatch = useDispatch();

  /* reference email and pass*/
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleBtnClick = () => {
    // validate the form
    const message = checkValidData(
      email.current.value,
      password.current.value
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
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL:PHOTOURL
          });
          // console.log(user);
          const { uid, email, displayName, photoURL } = user;
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
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + ":" + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <Header />
      <div className="h-screen w-full absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_medium.jpg"
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
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email} //use for reference of input email
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg focus:border-gray-600"
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
          {isSignInForm ? "New to Netflix? " : "Already registered? "}
          <span
            className="font-bold cursor-pointer underline text-gray-300"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up now" : "Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
