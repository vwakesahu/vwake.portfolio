import React from "react";
import { motion } from "framer-motion";

const languageVariants = {
  hidden: { x: -100, color: "white", backgroundColor: "transparent" },
  visible: { x: 0, color: "black", backgroundColor: "white" },
};

const hoverVariants = {
  hover: (color) => ({ backgroundColor: color, color: "white" }),
};

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen pb-64">
      <p className=" text-[3rem] md:text-[5rem] leading-tight md:leading-normal">
        Hi! My Name is{" "}
        <span className="bg-yellowColor text-lightGrey font-semibold">
          Vwakee
        </span>{" "}
      </p>
      <p className="md:text-[3rem] text-[1.5rem] mt-6 md:mt-0">
        I speak in{" "}
        <motion.span
          className="font-outline-1 text-whiteColor cursor-pointer"
          initial="hidden"
          animate="visible"
          variants={languageVariants}
          transition={{ delay: 0.2 }}
          whileHover="hover"
          custom="blue" // Change this to the desired color
        >
          <motion.span variants={hoverVariants}>HTML</motion.span>
        </motion.span>
        ,{" "}
        <motion.span
          className="font-outline-1 text-whiteColor cursor-pointer"
          initial="hidden"
          animate="visible"
          variants={languageVariants}
          transition={{ delay: 0.4 }}
          whileHover="hover"
          custom="green" // Change this to the desired color
        >
          <motion.span variants={hoverVariants}>CSS</motion.span>
        </motion.span>
        ,{" "}
        <motion.span
          className="font-outline-1 text-whiteColor cursor-pointer"
          initial="hidden"
          animate="visible"
          variants={languageVariants}
          transition={{ delay: 0.6 }}
          whileHover="hover"
          custom="red" // Change this to the desired color
        >
          <motion.span variants={hoverVariants}>ReactJs</motion.span>
        </motion.span>{" "}
        &{" "}
        <motion.span
          className="font-outline-1 text-whiteColor cursor-pointer"
          initial="hidden"
          animate="visible"
          variants={languageVariants}
          transition={{ delay: 0.8 }}
          whileHover="hover"
          custom="purple" // Change this to the desired color
        >
          <motion.span variants={hoverVariants}>Firebase</motion.span>
        </motion.span>
      </p>
    </div>
  );
};

export default HeroSection;
