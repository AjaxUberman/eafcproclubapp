import React from "react";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";
import { FaStar } from "react-icons/fa6";
import Build from "./Build";
import App from "../App";

const Player = () => {
  const player = useSelector((state) => state.player.player);
  console.log(player);
  return (
    <>
      {!player ? (
        <App />
      ) : (
        <div>
          <NavBar />
          <div className="flex bg-dark-theme-2 h-full ">
            <div className="grid grid-cols-8 justify-center gap-6 w-full h-full">
              {/* Player Info*/}
              <div className=" bg-dark-theme flex flex-col gap-4 items-center py-6 px-2 col-span-2 ">
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
              <div className="flex flex-col pt-4 col-span-6 ">
                <div className="flex  flex-col items-center gap-4">
                  <h1 className="text-white font-bold flex gap-1 text-4xl ">
                    Position :
                    <h1 className="text-neon-yesil ">
                      {player.position.shortLabel}
                    </h1>
                  </h1>
                  <div className="flex gap-10 ">
                    <h1 className="text-white font-bold flex gap-1 text-3xl ">
                      Height :
                      <span className="text-neon-yesil ">{player.height}</span>
                      cm
                    </h1>
                    <h1 className="text-white font-bold flex gap-1 text-3xl ">
                      Weight :
                      <span className="text-neon-yesil ">{player.weight}</span>
                      kg
                    </h1>
                  </div>
                </div>
                <Build player={player} />
              </div>
            </div>
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
