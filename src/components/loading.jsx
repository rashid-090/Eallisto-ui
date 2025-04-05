import React from "react";
import { motion } from "framer-motion";
import { Logo, Logowebp } from "../assets";

const FullScreenLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }} // Start fully visible
      animate={{ opacity: 1 }} // Fully visible while loading
      exit={{ opacity: 0 }} // Fade-out when unmounted
      transition={{ duration: 0.5 }} // Smooth fade duration
      className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50"
    >
      <div className="relative w-28 h-28">
        {/* Running Effect Circle */}
        <div className="absolute inset-0 w-full h-full rounded-full animate-spin bg-gradient-to-r from-main to-transparent">
          <div className="absolute inset-0 w-full h-full bg-gray-100 rounded-full m-[2px]"></div>
        </div>

        {/* Centered Logo */}
        <img
          src={Logowebp} // Replace with your logo path
          alt="Logo"
          loading="eager"
          className="absolute inset-0 w-16 h-16 object-contain m-auto"
        />
      </div>
    </motion.div>
  );
};

export default FullScreenLoader;
