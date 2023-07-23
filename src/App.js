import Cursor from "./components/Cursor";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="h-screen bg-darkBgColor">
      <Cursor />
      <div className="p-16">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
