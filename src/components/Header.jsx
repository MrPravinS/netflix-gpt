import React from "react";
import {signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // navigate('/error')
    });
  };
  return (
    <div className="fixed w-full top-0 left-0 flex justify-between items-center p-6 bg-gradient-to-b from-black z-20">
      {/* Logo Section */}
      <div className="ml-11">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          alt="Netflix Logo"
          className="h-12"
        />
      </div>

      {/* User Section */}
      <div className="flex items-center space-x-4 mr-11">
        <img
          className="h-12 w-12 rounded-full"
          src="https://imgs.search.brave.com/RvSSAE4gMIo-J57eYi4SkepvAqecs1NtRgGNcvYwvm4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC91c2VyLWlj/b24tNTEyeDUxMi1v/cDdyZTNhNi5wbmc"
          alt="User Logo"
        />
        <button onClick={handleSignOut}
         className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
