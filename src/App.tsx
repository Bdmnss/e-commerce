import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <div className="min-h-screen min-w-screen relative">
      {/* Overlay */}
      <div
        className={`bg-black h-[100%] w-[100%] opacity-75 absolute ${
          isMenuOpen ? "block" : "hidden"
        }`}
        onClick={() => {
          setIsMenuOpen(false);
          setIsOverlayOpen(false);
        }}
      ></div>
      <Menu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsOverlayOpen={setIsOverlayOpen}
      />
      <Header
        setIsMenuOpen={setIsMenuOpen}
        setIsOverlayOpen={setIsOverlayOpen}
      />
    </div>
  );
}

export default App;
