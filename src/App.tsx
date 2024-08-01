import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Overlay from "./components/Overlay";
import Slider from "./components/Slider";
import Cart from "./components/Cart";
import Text from "./components/Text";

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

      <Cart isCartOpen={isCartOpen} />

      <div className="flex flex-col px-[2.4rem]">
        <Text />
      </div>
    </div>
  );
}

export default App;
