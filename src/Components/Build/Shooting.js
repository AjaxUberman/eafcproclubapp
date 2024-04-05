import React from "react";
import { motion } from "framer-motion";

const Shooting = () => {
  return (
    <motion.div
      className="justify-center flex flex-col items-center pt-8"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <img src="https://lh5.googleusercontent.com/nuhNYr3gN5epqgAZEpxbK3IbzpFgbo5Eglcenp9UePqwzGuNSlmKq-YTzTIqVU3FnePc2mm30rnufWZDzFA_BoJH1ZpcopvH_PbeDUkPmmhkI93vTwQ8LUSqaBDTt5EjNLpTbLGv" />
      <h1 className="text-white font-bold text-2xl pt-4">
        Currently Building Other Projects...Will be back soon...
      </h1>
    </motion.div>
  );
};

export default Shooting;
