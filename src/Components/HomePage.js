import React from "react";
import { useState } from "react";
import items from "../datas/players.json";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPlayer } from "../features/counter/counterSlice";
import { motion } from "framer-motion";

const HomePage = () => {
  const dispatch = useDispatch();
  const [activeBtn, setActiveBtn] = useState(0);

  const playerHandler = (id) => {
    const clickedItem = items.items.find((item) => item.id === id);
    if (clickedItem) {
      dispatch(setPlayer(clickedItem));
    } else {
      console.error("Player not found.");
    }
  };

  const itemHandler = () => {
    setActiveBtn(activeBtn + 4);
  };

  return (
    <div className="h-full  bg-dark-theme-2 flex justify-center">
      <motion.div
        className="w-2/3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-white font-bold text-3xl py-5">
          Top 100 Players Build
        </h1>
        <div className="grid md:grid-cols-5 grid-cols-2 gap-5 pb-6">
          {items &&
            items.items.slice(0, 10 + activeBtn).map((item) => (
              <div
                key={item.id}
                className="scale-75 hover:scale-100 transition duration-200 ease-in shadow-xl"
              >
                <Link to="/player" onClick={() => playerHandler(item.id)}>
                  <img src={item.shieldUrl} />
                </Link>
              </div>
            ))}
          <button
            onClick={itemHandler}
            className="rounded-full bg-neon-yesil md:py-4 md:px-2 text-white font-bold shadow-md col-span-2 md:col-span-1 md:col-end-4  py-2 px-1 text-sm md:text-l hover:bg-active-yesil  hover:scale-105 transition duration-200 ease-in"
          >
            Show More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
