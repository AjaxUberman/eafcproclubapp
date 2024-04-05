import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import logo from "../images/Firefly green footbal logo png 49312.jpg";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import items from "../datas/players.json";
import { setPlayer } from "../features/counter/counterSlice";

const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const players = items.items;
  const [filtered, setFiltered] = useState([]);

  const searchHandler = (e) => {
    const input = e.target.value.toLowerCase();
    const filtered = input
      ? players.filter(
          (player) =>
            player.firstName.toLowerCase().includes(input) ||
            player.lastName.toLowerCase().includes(input)
        )
      : [];
    setFiltered(filtered);
  };

  /* SearchClick */
  const clickHandler = (selectedItem) => {
    dispatch(setPlayer(selectedItem));
    console.log(selectedItem);
  };

  return (
    <div className="flex justify-between w-full bg-dark-theme items-center relative h-24 ">
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
          {location.pathname === "/zart" ? (
            ""
          ) : (
            <div className="">
              <input
                placeholder="Search Player "
                className="px-4 py-2 rounded-full bg-transparent ring ring-neon-yesil focus:outline-none hover:shadow-neon-box transition duration-200 ease-in text-white font-semibold relative top-12 z-10"
                onChange={searchHandler}
              />
              {/* Search Menu */}
              <div
                className={`overflow-y-scroll scrollbar scrollbar-track-error-green scrollbar-thumb-active-yesil  h-24  flex flex-col  bg-error-green bg-opacity-30 w-60 relative  transition duration-300 ease-in translate-x-64 ring-1 ring-neon-yesil ${
                  filtered.length < 1
                    ? " opacity-0 translate-y-15 "
                    : "opacity-100"
                }`}
              >
                {filtered.map((i) => (
                  <Link
                    to="/player"
                    className="flex items-center ring-1 ring-neon-yesil relative hover:shadow-neon-box hover:bg-neon-yesil hover:bg-opacity-35 transition duration-200 ease-in-out"
                  >
                    <button onClick={() => clickHandler(i)} className="">
                      <img
                        src={i.avatarUrl}
                        className="w-8 h-8 absolute bottom-0 left-2"
                      />
                      <h1 className="text-white py-2 translate-x-12">
                        {(i.firstName + " " + i.lastName).length > 15
                          ? i.firstName
                          : i.firstName + " " + i.lastName}
                      </h1>
                    </button>
                  </Link>
                ))}
              </div>
            </div>
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
