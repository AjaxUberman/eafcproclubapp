import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import logo from "../images/Firefly green footbal logo png 49312.jpg";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import items from "../datas/players.json";
import { setPlayer } from "../features/counter/counterSlice";
import { CiMenuKebab } from "react-icons/ci";
import { setSearch } from "../features/counter/counterSlice";
import { setActive } from "../features/counter/counterSlice";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const players = items.items;
  const [filtered, setFiltered] = useState([]);
  const [input, setInput] = useState("");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 850px)" });

  const searchHandler = (e) => {
    setInput(e.target.value);
    const input = e.target.value.toLowerCase();
    const filtered = input
      ? players.filter(
          (player) =>
            player.firstName.toLowerCase().includes(input) ||
            player.lastName.toLowerCase().includes(input)
        )
      : [];
    setFiltered(filtered);
    dispatch(setSearch(filtered));
  };

  /* SearchClick */
  const clickHandler = (selectedItem) => {
    dispatch(setPlayer(selectedItem));
    setFiltered([]);
  };

  const menuHandler = () => {
    dispatch(setActive(true));
  };

  const resetHandler = () => {
    setFiltered([]);
    setInput("");
  };

  return (
    <>
      {isTabletOrMobile ? (
        <div className="bg-dark-theme text-white px-4 py-2 h-16 flex  gap-10 ">
          <div className="">
            <button
              className="text-3xl bg-dark-theme-2 rounded-full p-2 hover:bg-gradient-to-r from-slate-500 to-slate-800 transition duration-100 ease-in"
              onClick={menuHandler}
            >
              <CiMenuKebab />
            </button>
          </div>
          {/* SearchBar */}
          <div className="md:flex md:flex-col z-40 justify-center">
            <div className="pt-1 flex relative items-center">
              <input
                placeholder="Search Player"
                value={input}
                className="px-4 py-2 rounded-full bg-transparent outline outline-neon-yesil focus:shadow-neon-box focus:outline  hover:shadow-neon-box transition duration-200 ease-in text-white font-semibold relative   w-40"
                onChange={searchHandler}
              />
              <button className="absolute right-0 pr-2" onClick={resetHandler}>
                <IoMdClose />
              </button>
            </div>
            {/* Search Menu */}
            <div
              className={`overflow-y-scroll scrollbar scrollbar-track-error-green rounded-md scrollbar-thumb-active-yesil h-[72px] flex flex-col  bg-dark-theme  transition duration-300 ease-in w-full ring-1 ring-neon-yesil  overflow-x-hidden mt-2  ${
                filtered.length < 1 ? " hidden translate-y-15 " : "opacity-100"
              }`}
            >
              {filtered.map((i) => (
                <Link
                  to="/player"
                  className="flex items-center ring-1  ring-neon-yesil relative hover:shadow-neon-box hover:bg-neon-yesil hover:bg-opacity-35 transition duration-200 ease-in-out"
                >
                  <button onClick={() => clickHandler(i)} className="">
                    <img
                      src={i.avatarUrl}
                      alt={i.firstName}
                      className="w-8 h-8 absolute bottom-0 left-2"
                    />
                    {isTabletOrMobile ? (
                      <h1 className="text-white py-2 translate-x-12 text-sm">
                        {i.lastName.length > 10
                          ? i.lastName.slice(0, 5).concat("...")
                          : i.lastName}
                      </h1>
                    ) : (
                      <h1 className="text-white py-2 translate-x-12">
                        {(i.firstName + " " + i.lastName).length > 15
                          ? i.firstName
                          : i.firstName + " " + i.lastName}
                      </h1>
                    )}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between w-full bg-dark-theme items-center relative h-24 ">
          <div className="flex gap-10 py-6 pl-16  items-center">
            <img src={logo} alt="logo" className="w-8 h-8 rounded-full" />
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
            <div className="flex relative flex-col gap-10">
              {location.pathname === "/zart" ? (
                ""
              ) : (
                <div className="">
                  <div className="relative flex items-center">
                    <input
                      placeholder="Search Player "
                      className="px-4 py-2 rounded-full bg-transparent ring ring-neon-yesil focus:outline-none hover:shadow-neon-box transition duration-200 ease-in text-white font-semibold relative z-10"
                      onChange={searchHandler}
                    />
                    <button
                      className="absolute right-0 pr-2 text-white"
                      onClick={resetHandler}
                    >
                      <IoMdClose />
                    </button>
                  </div>
                  {/* Search Menu */}
                  <div
                    className={`overflow-y-scroll scrollbar scrollbar-track-error-green rounded-md scrollbar-thumb-active-yesil h-[80px] flex flex-col  bg-dark-theme  transition duration-300 ease-in w-full ring-1 ring-neon-yesil  overflow-x-hidden mt-4 absolute ${
                      filtered.length < 1
                        ? " hidden translate-y-15 "
                        : "opacity-100"
                    }`}
                  >
                    {filtered.map((i) => (
                      <Link
                        to="/player"
                        className="flex items-center ring-1  ring-neon-yesil relative hover:shadow-neon-box hover:bg-neon-yesil hover:bg-opacity-35 transition duration-200 ease-in-out"
                      >
                        <button onClick={() => clickHandler(i)} className="">
                          <img
                            src={i.avatarUrl}
                            alt={i.firstName}
                            className="w-8 h-8 absolute bottom-0 left-2"
                          />
                          {isTabletOrMobile ? (
                            <h1 className="text-white py-2 translate-x-12 text-sm">
                              {i.lastName.length > 10
                                ? i.lastName.slice(0, 5).concat("...")
                                : i.lastName}
                            </h1>
                          ) : (
                            <h1 className="text-white py-2 translate-x-12">
                              {(i.firstName + " " + i.lastName).length > 15
                                ? i.firstName
                                : i.firstName + " " + i.lastName}
                            </h1>
                          )}
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
      )}
    </>
  );
};

export default NavBar;
