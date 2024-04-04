import React from "react";
import { TiThMenu } from "react-icons/ti";
import logo from "../images/Firefly green footbal logo png 49312.jpg";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  return (
    <div className="flex justify-between w-full bg-dark-theme items-center ">
      <div className="flex gap-10 py-6 pl-16  items-center">
        <img src={logo} className="w-8 h-8 rounded-full" />
        <Link to="/">
          <h1 className="font-bold text-white hover:text-neon-yesil cursor-pointer transition duration-150 ease-in">
            Players
          </h1>
        </Link>
        <h1 className="font-bold text-white hover:text-neon-yesil cursor-pointer transition duration-150 ease-in">
          Build
        </h1>
        <h1 className="font-bold text-white hover:text-neon-yesil cursor-pointer transition duration-150 ease-in">
          Leagues
        </h1>
      </div>
      <div>
        <div>
          {location.pathname === "/player" ? (
            ""
          ) : (
            <input
              placeholder="Search Player "
              className="px-4 py-2 rounded-full bg-transparent ring ring-neon-yesil focus:outline-none hover:shadow-neon-box transition duration-200 ease-in text-white font-semibold"
            />
          )}
        </div>
      </div>
      <div className="flex items-center gap-10 px-16">
        <TiThMenu className="font-bold text-white hover:text-neon-yesil cursor-pointer transition duration-150 ease-in text-2xl" />
        <button className="font-bold text-white hover:text-neon-yesil hover:bg-white cursor-pointer transition duration-200 ease-in bg-neon-yesil rounded-full px-4 py-2">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default NavBar;
