import React from "react";
import GuideConnect from "../img/guide_connect.png";
import Cards from "./Cards";

const AppCards = () => {
  const cardDataArray = [
    {
      key: 1,
      imageSrc: GuideConnect,
      title: "Guide Connect",
      description: "",
      buttonText: "Read Workflow",
      bgColor: "",
    },
  ];

  return (
    <div>
      <p className="mt-20 mb-8 text-2xl font-semibold">
        App Development Projects:
      </p>
      <div className=" flex md:flex-row flex-col gap-4 items-center justify-center">
        {cardDataArray.map((cardData, key) => (
          <Cards
            key={cardData.key}
            imageSrc={cardData.imageSrc}
            title={cardData.title}
            description={cardData.description}
            buttonText={cardData.buttonText}
            bgColor={cardData.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default AppCards;
