import React, { useState } from "react";
import Pace from "./Build/Pace";
import Shooting from "./Build/Shooting";

const Build = ({ player }) => {
  const [active, setActive] = useState("pace");
  const clickHandler = (e) => {
    setActive(e.target.value);
  };

  return (
    <div>
      <div className="flex gap-4 text-white font-bold pt-4 justify-center  text-sm md:text-l  ">
        <button
          onClick={clickHandler}
          value={"pace"}
          className={`md:py-4 md:px-2 py-2 px-1 rounded-full bg-active-yesil md:w-24 w-18 hover:shadow-neon-box transition duration-100 ease-in"${
            active === "pace" ? "shadow-neon-box bg-neon-sari scale-105" : ""
          }`}
        >
          Pace
        </button>
        <button
          onClick={clickHandler}
          value={"shooting"}
          className={`py-4 px-2 rounded-full bg-active-yesil hover:shadow-neon-box md:w-24 w-18 transition duration-100 ease-in"${
            active === "shooting"
              ? "shadow-neon-box bg-neon-sari scale-105"
              : ""
          }`}
        >
          Shooting
        </button>
        <button
          onClick={clickHandler}
          value={"passing"}
          className={`py-4 px-2 rounded-full bg-active-yesil hover:shadow-neon-box md:w-24 w-18 transition duration-100 ease-in"${
            active === "passing" ? "shadow-neon-box bg-neon-sari scale-105" : ""
          }`}
        >
          Passing
        </button>
        <button
          onClick={clickHandler}
          value={"dribbling"}
          className={`py-4 px-2 rounded-full bg-active-yesil hover:shadow-neon-box md:w-24 w-18 transition duration-100 ease-in"${
            active === "dribbling"
              ? "shadow-neon-box bg-neon-sari scale-105"
              : ""
          }`}
        >
          Dribbling
        </button>
      </div>
      {active === "pace" ? <Pace /> : ""}
      {active === "shooting" ? <Shooting /> : ""}
      {active === "dribbling" ? <Shooting /> : ""}
      {active === "passing" ? <Shooting /> : ""}
    </div>
  );
};

export default Build;
