import React, { useEffect } from "react";
import {onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, PHOTOURL } from "../utils/constants";

const Header = () => {
  const user = useSelector(store => store.user)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // navigate('/error')
    });
  };

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
  
          const {uid,email,displayName, photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}))
          navigate("/browse")
  
        } else {
          // User is signed out
          dispatch(removeUser())
          navigate("/")
        }
      });
      return () => unsubscribe();
    },[]) // [] for run only once
  
  return (
    <div className="fixed w-full top-0 left-0 flex justify-between items-center p-6 bg-gradient-to-b from-black z-20">
      {/* Logo Section */}
      <div className="ml-11">
        <img
          src={LOGO}
          alt="Netflix Logo"
          className="h-12"
        />
      </div>

      {/* User Section */}
     {user && <div className="flex items-center space-x-4 mr-11">
        <span className="text-white font-bold text-xl">Welcome!  {user.displayName}</span>
        <img
          className="h-12 w-12 rounded-full"
          src={PHOTOURL}
          alt="User Logo"
        />
        <button onClick={handleSignOut}
         className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300">
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
