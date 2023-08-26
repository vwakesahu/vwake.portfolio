import Cards from "./components/Cards";
import Cursor from "./components/Cursor";
import HeroSection from "./components/HeroSection";
import FoodApp from "./img/food_app.png";

function App() {
  const cardDataArray = [
    {
      imageSrc: FoodApp,
      title: "Canteen",
      description:
        "Canteen is a cutting-edge Online Food Ordering System created using ReactJS and enhanced with Tailwind CSS for seamless and appealing user interfaces. With the integration of Firebase, the platform utilizes Google authentication for a secure and user-friendly login process. The application effectively employs a Redux-powered reducer store to manage the shopping cart, ensuring a smooth and interactive experience for users as they curate and confirm their orders. By harmonizing these technologies, Canteen facilitates a streamlined user journey from browsing the menu to placing orders, contributing to an efficient and satisfying food ordering process.",
      buttonText: "Read Workflow",
      bgColor:"bg-accYellow"
    },
    {
      imageSrc: FoodApp,
      title: "Canteen",
      description:
      "Canteen is a cutting-edge Online Food Ordering System created using ReactJS and enhanced with Tailwind CSS for seamless and appealing user interfaces. With the integration of Firebase, the platform utilizes Google authentication for a secure and user-friendly login process. The application effectively employs a Redux-powered reducer store to manage the shopping cart, ensuring a smooth and interactive experience for users as they curate and confirm their orders. By harmonizing these technologies, Canteen facilitates a streamlined user journey from browsing the menu to placing orders, contributing to an efficient and satisfying food ordering process.",
      buttonText: "Read Workflow",
      bgColor:"bg-accPurple"
    },
    {
      imageSrc: FoodApp,
      title: "Canteen",
      description:
        "Canteen is a cutting-edge Online Food Ordering System created using ReactJS and enhanced with Tailwind CSS for seamless and appealing user interfaces. With the integration of Firebase, the platform utilizes Google authentication for a secure and user-friendly login process. The application effectively employs a Redux-powered reducer store to manage the shopping cart, ensuring a smooth and interactive experience for users as they curate and confirm their orders. By harmonizing these technologies, Canteen facilitates a streamlined user journey from browsing the menu to placing orders, contributing to an efficient and satisfying food ordering process.",
      buttonText: "Read Workflow",
      bgColor:"bg-accBlue"
    },
    {
      imageSrc: FoodApp,
      title: "Canteen",
      description:
        "Canteen is a cutting-edge Online Food Ordering System created using ReactJS and enhanced with Tailwind CSS for seamless and appealing user interfaces. With the integration of Firebase, the platform utilizes Google authentication for a secure and user-friendly login process. The application effectively employs a Redux-powered reducer store to manage the shopping cart, ensuring a smooth and interactive experience for users as they curate and confirm their orders. By harmonizing these technologies, Canteen facilitates a streamlined user journey from browsing the menu to placing orders, contributing to an efficient and satisfying food ordering process.",
      buttonText: "Read Workflow",
      bgColor:"bg-accRed"
    },
    
  ];

  return (
    <div className="h-screen">
      <Cursor />
      <div className="md:p-16 p-8">
        <HeroSection />

        <div className="mt-20 flex md:flex-row flex-col gap-4 items-center justify-center">
        {cardDataArray.map((cardData, index) => (
          <Cards
            key={index}
            imageSrc={cardData.imageSrc}
            title={cardData.title}
            description={cardData.description}
            buttonText={cardData.buttonText}
            bgColor={cardData.bgColor}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
