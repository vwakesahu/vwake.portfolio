import { Route,  Routes } from "react-router-dom";
import AppCards from "./components/AppCards";
import Cursor from "./components/Cursor";
import HeroSection from "./components/HeroSection";
import WebCards from "./components/WebCards";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="h-screen">
      <Cursor />
      
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      
    </div>
  );
}

export default App;
