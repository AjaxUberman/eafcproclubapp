import React, { useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";
import { FaStar } from "react-icons/fa6";
import Build from "./Build";
import App from "../App";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { IoIosSwitch } from "react-icons/io";
import { FaCaretLeft } from "react-icons/fa";
import MobileMenu from "../MobileMenu";
const Player = () => {
  const player = useSelector((state) => state.player.player);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 850px)" });
  const isWideScreen = useMediaQuery({ query: "(max-width: 1250px)" });

  const filtered = useSelector((state) => state.player.search);
  const [active, setActive] = useState(false);
  const actMenu = useSelector((state) => state.player.active);

  const changeHandler = () => {
    setActive(!active);
  };

  console.log(filtered);
  return (
    <>
      {!player ? (
        <App />
      ) : (
        <div>
          {isTabletOrMobile && actMenu ? <MobileMenu /> : ""}
          <NavBar />
          <div className="flex bg-dark-theme-2 h-screen md:pb-0 pb-10">
            <motion.div
              className="grid md:grid-cols-8 grid-cols-8 justify-center md:gap-6 gap-5 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {/* Player Info*/}
              {isTabletOrMobile ? (
                <div className="pl-4 h-10 flex items-center pt-10 gap-2 ">
                  <button
                    className={`py-4 px-4 w-12 h-12 text-white rounded-full hover:bg-gradient-to-r hover:from-yellow-200 hover:to-green-500  ${
                      !active
                        ? "bg-gradient-to-r from-yellow-200 to-green-500"
                        : "bg-gradient-to-r from-teal-400 to-gray-800"
                    }`}
                    onClick={changeHandler}
                  >
                    <IoIosSwitch />
                  </button>
                  <div className="flex text-white items-center">
                    <FaCaretLeft />

                    <h1 className="whitespace-nowrap">Change View</h1>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div
                className={`md:bg-dark-theme flex flex-col gap-4 items-center md:py-6  px-2 md:col-span-2 ${
                  active ? isTabletOrMobile && "hidden" : "col-span-8"
                }`}
              >
                <img src={player.shieldUrl} className="w-24 h-36 " />
                <h1 className="text-2xl font-bold text-white text-center">
                  {player.firstName} {player.lastName}
                </h1>
                <div className="flex gap-2 items-center ">
                  <img src={player.team.imageUrl} className="w-7 h-7 " />
                  <h1 className="text-xl font-semibold text-neon-yesil whitespace-nowrap ">
                    {player.team.label}
                  </h1>
                </div>
                <h1 className="text-l font-semibold  text-center text-white">
                  {player.leagueName}
                </h1>
                <div className="flex gap-4">
                  <img src={player.nationality.imageUrl} className="w-8 h-8 " />
                  <h1 className="text-xl font-semibold text-neon-yesil text-center">
                    {player.nationality.label}
                  </h1>
                </div>
                <h1 className="text-white flex items-center gap-1 font-semibold">
                  Skills : {player.skillMoves}
                  <FaStar className="text-neon-yesil" />
                </h1>
                <h1 className="text-white flex items-center gap-1 font-semibold">
                  Weak Foot : {player.weakFootAbility}
                  <FaStar className="text-neon-yesil" />
                </h1>
                {/* Playstyles */}
                <h1 className=" font-bold mt-4 text-neon-yesil py-2 px-4 rounded-full bg-white shadow-neon-box">
                  PlayStyles
                </h1>
                <div className="text-white flex flex-col gap-3 mt-4  ">
                  {player &&
                    player.playStylePlus &&
                    player.playStylePlus.map((i) => (
                      <div className="flex ring rounded-full py-2 px-4 ring-neon-sari gap-6 relative w-44">
                        <h1 className="text-left">{i.label}</h1>
                        <img
                          src={i.imageUrl}
                          className="w-6 h-6 absolute right-2 "
                        />
                      </div>
                    ))}
                  {player &&
                    player.playStyle.map((i) => (
                      <div className="flex ring rounded-full py-2 px-4 ring-neon-yesil gap-6 relative w-44">
                        <h1 className="text-left">{i.label}</h1>
                        <img
                          src={i.imageUrl}
                          className="w-6 h-6 absolute right-2 "
                        />
                      </div>
                    ))}
                </div>
              </div>

              {/* Player Stats */}
              <div
                className={`flex flex-col pt-4  md:col-span-6 ${
                  active ? "col-span-8" : isTabletOrMobile && "hidden"
                }`}
              >
                <div className="flex  flex-col items-center gap-4">
                  <h1 className="text-white font-bold flex gap-1 md:text-4xl text-l">
                    Position :
                    <h1 className="text-neon-yesil ">
                      {player.position.shortLabel}
                    </h1>
                  </h1>
                  <div className="flex gap-10 ">
                    <h1 className="text-white font-bold flex gap-1 md:text-3xl text-sm">
                      Height :
                      <span className="text-neon-yesil ">{player.height}</span>
                      cm
                    </h1>
                    <h1 className="text-white font-bold flex gap-1 md:text-3xl text-sm">
                      Weight :
                      <span className="text-neon-yesil ">{player.weight}</span>
                      kg
                    </h1>
                  </div>
                </div>
                <Build player={player} />
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default Player;

{
  /* <div className="flex justify-center">
<h1>
  {player.firstName} {player.lastName}
</h1>
<h1>{player.leagueName}</h1>
<img src={player.nationality.imageUrl} />
<h1>{player.nationality.label}</h1>
</div> */
}
