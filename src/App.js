import { Route, Routes } from "react-router-dom";
import AppCards from "./components/AppCards";
import Cursor from "./components/Cursor";
import HeroSection from "./components/HeroSection";
import WebCards from "./components/WebCards";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" cursor-none">
      <Cursor />

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <div className="md:p-16 p-8">
        <Footer />
      </div>
    </div>
  );
}

export default App;
