import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setActive } from "./features/counter/counterSlice";

const MobileMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuHandler = () => {
    dispatch(setActive(false));
  };

  return (
    <div>
      <div
        className={`flex py-6 pl-5 flex-col z-40 absolute left-0 w-32 bg-dark-theme ${
          isScrolled ? "h-full" : "h-screen"
        } z-24 justify-between`}
      >
        <div className="flex flex-col gap-10 fixed top-4">
          <button className="pt-2" onClick={menuHandler}>
            <IoCloseSharp className="font-bold  text-white hover:text-neon-yesil cursor-pointer transition duration-150 ease-in bg-active-yesil rounded-full p-2 text-l h-10 w-10" />
          </button>

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
        <div className="font-bold text-white hover:text-neon-yesil cursor-pointer transition fixed bottom-4 w-32 duration-150 ease-in">
          <h1> Barış Kayıkçı ©2024 </h1>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
