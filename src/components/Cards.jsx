import React from "react";

const Cards = ({ imageSrc, title, description, buttonText, bgColor}) => {
  return (
    <div className="md:mt-36 border rounded-lg md:w-[25%] p-4">
      <img src={imageSrc} className="w-full h-40 md:h-60 " alt="" />
      <div className="mt-6 flex flex-col">
        <p className="text-xl font-semibold">{title}</p>
        <p className="overflow-hidden md:line-clamp-6 line-clamp-4  mt-3">
          {description}
        </p>
      </div>
      <button className={`mt-12 w-full border rounded-lg p-3 mb-3 ${bgColor}`}>
        {buttonText}
      </button>
    </div>
  );
};

export default Cards;
