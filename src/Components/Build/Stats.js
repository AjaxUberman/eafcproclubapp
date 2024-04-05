import React, { useState } from "react";
import { useSelector } from "react-redux";
import prostats from "../../datas/prostats.json";
import { FaCaretDown } from "react-icons/fa";

const Stats = ({ acc, speed, point }) => {
  const player = useSelector((state) => state.player.player);
  const [points, setPoints] = useState(160);
  const [menuAct, setMenuAct] = useState(false);
  const [actBuild, setActBuild] = useState("ST");
  const proitems = prostats.proitems[0][actBuild.toLowerCase()][0];
  const [height, setHeight] = useState(182);
  const [accFinal, setAccFinal] = useState(proitems.acceleration);
  const [sprFinal, setSprFinal] = useState(proitems.sprintSpeed);
  const [err, setErr] = useState(false);

  const colorControl = (value) => {
    if (value > 75) {
      return "bg-active-yesil";
    } else if (value > 50 && value <= 75) {
      return "bg-slide-medium";
    } else {
      return "bg-slide-bad";
    }
  };

  const menuHandler = () => {
    setMenuAct(!menuAct);
  };

  const buildHandler = (value) => {
    setActBuild(value);
  };

  const heightHandler = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value >= 150 && value <= 220) {
      setHeight(value);
      setErr(false);
      if (value >= 150 && value <= 170) {
        setAccFinal(proitems.acceleration + 5);
        setSprFinal(proitems.sprintSpeed + 5);
      } else if (value > 170 && value <= 190) {
        setAccFinal(proitems.acceleration);
        setSprFinal(proitems.sprintSpeed);
      } else if (value > 190 && value < 205) {
        setAccFinal(proitems.acceleration - 5);
        setSprFinal(proitems.sprintSpeed - 5);
      } else {
        setAccFinal(proitems.acceleration - 8);
        setSprFinal(proitems.sprintSpeed - 8);
      }
    } else {
      setErr(true);
    }
  };

  return (
    <div className="flex flex-col gap-10 ">
      <div className="grid grid-cols-5 gap-">
        {/* Position */}
        <div className="flex flex-col gap-2 col-span-1">
          <div className="flex flex-col gap-1">
            <h1 className="text-white text-xl font-bold ">Position :</h1>
            <button
              className="text-white text-md font-bold py-2 px-4 rounded-full w-20 flex items-center justify-between gap-2 bg-active-yesil relative"
              onClick={menuHandler}
            >
              {actBuild}
              <div className="text-xl absolute right-2">
                <FaCaretDown />
              </div>
            </button>
          </div>
          {/* Position Menu */}
          <div
            className={`${
              !menuAct
                ? "opacity-0 -translate-y-10 -z-10 -mb-24"
                : "opacity-100 "
            } transition-all relative ease-in-out duration-300 `}
          >
            <ul className="flex flex-col w-20 text-white ">
              <button
                className="ring-1 ring-neon-yesil "
                onClick={() => buildHandler("ST")}
              >
                ST
              </button>
              <button
                className="ring-1 ring-neon-yesil"
                onClick={() => buildHandler("RW")}
              >
                RW
              </button>
              <button
                className="ring-1 ring-neon-yesil"
                onClick={() => buildHandler("LW")}
              >
                LW
              </button>
              <button
                className="ring-1 ring-neon-yesil"
                onClick={() => buildHandler("CM")}
              >
                CM
              </button>
              <button
                className="ring-1 ring-neon-yesil"
                onClick={() => buildHandler("CAM")}
              >
                CAM
              </button>
            </ul>
          </div>
        </div>
        {/* Height */}
        <div className="flex flex-col gap-1 col-span-2 ">
          <h1 className="text-white text-xl font-bold">Your PRO Height :</h1>
          <input
            onChange={heightHandler}
            type="number"
            placeholder="182"
            className="py-2 px-4 rounded-full bg-transparent ring ring-active-yesil w-40 text-white font-bold"
          />
          {err === true ? (
            <h1 className="text-white leading-tight">
              Value must be between 150cm-220cm
            </h1>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* Real Player Stats */}
      <div className="text-xl text-white font-semibold flex flex-col transition duration-500 ease-in  ">
        <h1 className="text-neon-yesil">{player.lastName} Stats</h1>
        <div className="flex items-center gap-3 relative">
          <h1>Acceleration : {player.stats.acceleration.value}</h1>
          <div className="bg-slide-gray h-2 w-w-100px rounded-full absolute left-44">
            <div
              className="bg-active-yesil h-2 rounded-full "
              style={{ width: `${player.stats.acceleration.value}px` }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 relative">
            <h1>Sprint Speed : {player.stats.sprintSpeed.value}</h1>
            <div className="bg-slide-gray h-2 w-w-100px rounded-full absolute left-44">
              <div
                className={`${colorControl(
                  player.stats.sprintSpeed.value
                )} h-2 rounded-full`}
                style={{ width: `${player.stats.sprintSpeed.value}px` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* Pro Stats*/}
      <div className="text-xl text-white font-semibold flex flex-col justify-center transition duration-500 ease-in  ">
        <h1 className="text-neon-yesil">Your Player Stats</h1>
        <div className="flex items-center gap-3 relative w-48">
          <h1>Acceleration : {accFinal + acc}</h1>
          <div className="bg-slide-gray h-2 w-w-100px rounded-full absolute left-44 ">
            <div
              className="bg-active-yesil h-2 rounded-full "
              style={{ width: `${accFinal + acc}px` }}
            ></div>
          </div>
          <h1 className="absolute right-0 translate-x-32  text-sm text-active-yesil">{`${
            acc ? "+" + acc : ""
          }`}</h1>
        </div>
        <div className="flex items-center gap-3 relative w-48">
          <h1>Sprint Speed : {sprFinal + speed}</h1>
          <div className="bg-slide-gray h-2 w-w-100px rounded-full absolute left-44">
            <div
              className={`${colorControl(
                proitems.sprintSpeed
              )} h-2 rounded-full`}
              style={{ width: `${sprFinal + speed}px` }}
            ></div>
          </div>
          <h1 className="translate-x-32 text-sm absolute right-0 text-active-yesil">{`${
            speed ? "+" + speed : ""
          }`}</h1>
        </div>
      </div>
      <div className="text-2xl font-semibold text-white">
        Remaining Points : {points - point}
      </div>
    </div>
  );
};

export default Stats;
