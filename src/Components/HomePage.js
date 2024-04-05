import React from "react";
import { useState } from "react";
import items from "../datas/players.json";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPlayer } from "../features/counter/counterSlice";
import { motion } from "framer-motion";


const HomePage = () => {
  const dispatch = useDispatch();

  const playerHandler = (id) => {
    const clickedItem = items.items.find((item) => item.id === id);
    if (clickedItem) {
      dispatch(setPlayer(clickedItem));
    } else {
      console.error("Player not found.");
    }
  };

  return (
    <div className="h-full  bg-dark-theme-2 flex justify-center ">
      <motion.div
        className="w-2/3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-white font-bold text-3xl py-5">
          Top 100 Players Build
        </h1>
        <div className="grid grid-cols-5 gap-5 ">
          {items &&
            items.items.map((item) => (
              <div key={item.id} className="scale-75 shadow-xl">
                <Link to="/player" onClick={() => playerHandler(item.id)}>
                  <img src={item.shieldUrl} />
                </Link>
              </div>
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
