import React from "react";
import WebCards from "../components/WebCards";
import HeroSection from "../components/HeroSection";
import AppCards from "../components/AppCards";

const Homepage = () => {
  return (
    <div className="md:p-16 p-8">
      <HeroSection />
      <WebCards />
      <AppCards />
    </div>
  );
};

export default Homepage;
