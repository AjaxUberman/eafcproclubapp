import React, { useState } from "react";
import "./Build.css";
import { useSelector } from "react-redux";
import { MdHexagon } from "react-icons/md";
import { FaBackward } from "react-icons/fa6";
import { FaBoltLightning } from "react-icons/fa6";
import { CiBatteryCharging } from "react-icons/ci";
import Stats from "./Stats";
import { motion } from "framer-motion";

const Pace = () => {
  const player = useSelector((state) => state.player.player);
  const [actItem, setActItem] = useState([]);
  const [acc, setAcc] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [totPoints, setTotPoints] = useState(0);

  const clickHandler = (i = 0, spe = 0, val, point) => {
    if (actItem.includes(val)) {
      setActItem(actItem.filter((item) => item !== val));
      setAcc(acc - i);
      setSpeed(speed - spe);
      setTotPoints(totPoints - point);
    } else {
      setActItem([...actItem, val]);
      setAcc(acc + i);
      setSpeed(speed + spe);
      setTotPoints(totPoints + point);
    }
  };

  return (
    <motion.div
      className="md:grid md:grid-cols-6 pt-10 flex flex-col "
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {/* Tree Side */}
      <div className="flex  pl-10 col-span-3 justify-center ">
        {/* Left Side */}
        <div className="flex flex-col w-40">
          <button
            disabled={actItem.includes("second")}
            className="relative w-16 h-16"
            onClick={() => {
              clickHandler(1, 0, "first", 1);
            }}
          >
            <MdHexagon
              className={`${
                actItem.includes("first") ? "text-active-yesil" : ""
              } w-16 h-16  absolute inset-0`}
            />
            <FaBackward className="relative z-10 w-8 left-3  h-8 text-white" />
          </button>
          <button
            disabled={actItem.includes("third") || !actItem.includes("first")}
            className="relative w-16 h-16"
            onClick={() => {
              clickHandler(1, 0, "second", 2);
            }}
          >
            <MdHexagon
              className={`${
                actItem.includes("second") ? "text-active-yesil" : ""
              } w-16 h-16  absolute inset-0`}
            />
            <FaBackward className="relative z-8 w-8 left-3  h-8 text-white" />
          </button>
          <button
            disabled={actItem.includes("forth") || !actItem.includes("second")}
            className="relative w-16 h-16"
            onClick={() => clickHandler(1, 0, "third", 3)}
          >
            <MdHexagon
              className={`${
                actItem.includes("third") ? "text-active-yesil" : ""
              } w-16 h-16  absolute inset-0`}
            />
            <FaBackward className="relative z-8 w-8 left-3  h-8 text-white" />
          </button>
          <button
            disabled={
              actItem.includes("fifth") ||
              !actItem.includes("third") ||
              (actItem.includes("middle") && !actItem.includes("forthspr"))
            }
            className="relative w-16 h-16"
            onClick={() => clickHandler(2, 0, "forth", 4)}
          >
            <MdHexagon
              className={`${
                actItem.includes("forth") ? "text-active-yesil" : ""
              } w-16 h-16  absolute inset-0`}
            />
            <FaBackward className="relative z-8 w-8 left-3  h-8 text-white" />
          </button>
          <div className="flex gap-0">
            <button
              disabled={!actItem.includes("forth")}
              className="relative w-16 h-16"
              onClick={() => clickHandler(2, 0, "fifth", 4)}
            >
              <MdHexagon
                className={`${
                  actItem.includes("fifth") ? "text-active-yesil" : ""
                } w-16 h-16  absolute inset-0`}
              />
              <FaBackward className="relative z-8 w-8 left-3  h-8 text-white" />
            </button>
            <button
              disabled={
                (!actItem.includes("forthspr") && !actItem.includes("forth")) ||
                actItem.includes("final")
              }
              className="relative w-16 h-16"
              onClick={() => clickHandler(4, 4, "middle", 5)}
            >
              <MdHexagon
                className={`${
                  actItem.includes("middle") ? "text-active-yesil" : ""
                } w-16 h-16  absolute inset-0`}
              />
              <FaBoltLightning className="relative z-8 w-8 left-4  h-8 text-white" />
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex flex-col -translate-x-8">
          <button
            disabled={actItem.includes("secondspr")}
            className="relative w-16 h-16"
            onClick={() => {
              clickHandler(0, 1, "firstspr", 1);
            }}
          >
            <MdHexagon
              className={`${
                actItem.includes("firstspr") ? "text-active-yesil" : ""
              } w-16 h-16  absolute inset-0`}
            />
            <FaBoltLightning className="relative z-8 w-8 left-4  h-8 text-white" />
          </button>
          <button
            disabled={
              actItem.includes("thirdspr") || !actItem.includes("firstspr")
            }
            className="relative w-16 h-16"
            onClick={() => {
              clickHandler(0, 1, "secondspr", 2);
            }}
          >
            <MdHexagon
              className={`${
                actItem.includes("secondspr") ? "text-active-yesil" : ""
              } w-16 h-16  absolute inset-0`}
            />
            <FaBoltLightning className="relative z-8 w-8 left-4  h-8 text-white" />
          </button>
          <button
            disabled={
              actItem.includes("forthspr") || !actItem.includes("secondspr")
            }
            className="relative w-16 h-16"
            onClick={() => {
              clickHandler(0, 2, "thirdspr", 3);
            }}
          >
            <MdHexagon
              className={`${
                actItem.includes("thirdspr") ? "text-active-yesil" : ""
              } w-16 h-16  absolute inset-0`}
            />
            <FaBoltLightning className="relative z-8 w-8 left-4  h-8 text-white" />
          </button>
          <button
            disabled={
              !actItem.includes("thirdspr") ||
              actItem.includes("fifthspr") ||
              (actItem.includes("middle") && !actItem.includes("forth"))
            }
            className="relative w-16 h-16"
            onClick={() => {
              clickHandler(0, 2, "forthspr", 4);
            }}
          >
            <MdHexagon
              className={`${
                actItem.includes("forthspr") ? "text-active-yesil" : ""
              } w-16 h-16  absolute inset-0`}
            />
            <FaBoltLightning className="relative z-8 w-8 left-4  h-8 text-white" />
          </button>
          <button
            disabled={!actItem.includes("forthspr")}
            className="relative w-16 h-16"
            onClick={() => {
              clickHandler(1, 3, "fifthspr", 5);
            }}
          >
            <MdHexagon
              className={`${
                actItem.includes("fifthspr") ? "text-active-yesil" : ""
              } w-16 h-16  absolute inset-0`}
            />
            <FaBoltLightning className="relative z-8 w-8 left-4  h-8 text-white" />
          </button>
          <button
            disabled={!actItem.includes("middle")}
            className="relative w-16 h-16 -translate-x-16  "
            onClick={() => clickHandler(6, 6, "final", 10)}
          >
            <MdHexagon
              className={`${
                actItem.includes("final") ? "text-neon-sari " : "text-neon-mor"
              } w-16 h-16  absolute inset-0 `}
            />
            <CiBatteryCharging className="relative z-8 w-8 left-4  h-8 text-white" />
          </button>
        </div>
      </div>
      {/* Stats Side */}
      <div className="col-span-3">
        <Stats acc={acc} speed={speed} point={totPoints} />
      </div>
    </motion.div>
  );
};

export default Pace;
