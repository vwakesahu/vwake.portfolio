import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppCards from "./components/AppCards";
import Cursor from "./components/Cursor";
import HeroSection from "./components/HeroSection";
import WebCards from "./components/WebCards";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="h-screen">
      <Cursor />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
