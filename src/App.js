import Cards from "./components/Cards";
import Cursor from "./components/Cursor";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="h-screen">
      <Cursor />
      <div className="md:p-16 p-8">
        <HeroSection />
        < Cards />
      </div>
    </div>
  );
}

export default App;
