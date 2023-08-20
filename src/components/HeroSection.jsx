import React from "react";

const HeroSection = () => {
  return (
    <div className="">
      <p className="text-[5rem]">
        Hi! My Name is{" "}
        <span className=" bg-yellowColor text-lightGrey font-semibold">
          Vwakee
        </span>{" "}
      </p>
      <p className="text-[3rem]">
        I speak in{" "}
        <span className="font-outline-1 text-whiteColor hover:bg-accYellow hover:text-black cursor-pointer">
          HTML
        </span>
        ,{" "}
        <span className="font-outline-1 text-whiteColor hover:bg-accPurple hover:text-black cursor-pointer">
          CSS
        </span>
        ,{" "}
        <span className="font-outline-1 text-whiteColor hover:bg-accRed hover:text-black cursor-pointer">
          ReactJs
        </span>{" "}
        &{" "}
        <span className="font-outline-1 text-whiteColor hover:bg-accBlue hover:text-black cursor-pointer">
          Firebase
        </span>
      </p>
    </div>
  );
};

export default HeroSection;
