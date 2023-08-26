import AppCards from "./components/AppCards";
import Cursor from "./components/Cursor";
import HeroSection from "./components/HeroSection";
import WebCards from "./components/WebCards";

function App() {
  return (
    <div className="h-screen">
      <Cursor />
      <div className="md:p-16 p-8">
        <HeroSection />
        <WebCards />
        <AppCards />
      </div>
    </div>
  );
}

export default App;
