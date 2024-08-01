import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Overlay from "./components/Overlay";
import Slider from "./components/Slider";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Overlay
        isOverlayOpen={isOverlayOpen}
        setIsOverlayOpen={setIsOverlayOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Menu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsOverlayOpen={setIsOverlayOpen}
      />
      <Header
        setIsMenuOpen={setIsMenuOpen}
        setIsOverlayOpen={setIsOverlayOpen}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
      <Slider />
      <div
        className={`flex flex-col shadow rounded-[10px] bg-white transition-all duration-500 ease-in-out ${
          isCartOpen
            ? "h-[26rem] opacity-100 visible"
            : "h-0 opacity-0 invisible"
        } absolute top-[9%] right-[2%] w-[96%] overflow-hidden`}
      >
        <div className="py-[2.4rem] pl-[2.4rem] border-b-[1px] border-solid border-b-[#e4e9f2]">
          <p className="text-[1.6rem] text-[#1d2026] font-bold">Cart</p>
        </div>
        <div className="flex justify-center items-center h-[100%]">
          <p className="text-[1.6rem] text-[#69707d] font-bold">
            Your cart is empty.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
