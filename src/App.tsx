import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Overlay from "./components/Overlay";
import Slider from "./components/Slider";
import Cart from "./components/Cart";
import Text from "./components/Text";
import Purchase from "./components/Purchase";
import OpenedSlider from "./components/OpenedSlider";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [purchaseCount, setPurchaseCount] = useState(0);
  const [isPurchaseCountVisible, setIsPurchaseCountVisible] = useState(false);
  const [isInsideSliderOpened, setIsInsideSliderOpened] = useState(false);
  const [openedSlideIndex, setOpenedSlideIndex] = useState(1);

  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Overlay
        isOverlayOpen={isOverlayOpen}
        setIsOverlayOpen={setIsOverlayOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsInsideSliderOpened={setIsInsideSliderOpened}
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
        purchaseCount={purchaseCount}
        isPurchaseCountVisible={isPurchaseCountVisible}
      />

      <div className="lg:w-[80%] lg:mx-auto lg:flex lg:justify-center lg:items-center lg:mt-[9rem] lg:gap-[13rem]">
        <Slider
          setIsInsideSliderOpened={setIsInsideSliderOpened}
          setOpenedSlideIndex={setOpenedSlideIndex}
          setIsOverlayOpen={setIsOverlayOpen}
        />

        <div className="flex flex-col px-[2.4rem]">
          <Text />

          <Purchase
            purchaseCount={purchaseCount}
            setPurchaseCount={setPurchaseCount}
            setIsPurchaseCountVisible={setIsPurchaseCountVisible}
          />
        </div>
      </div>

      <Cart
        isCartOpen={isCartOpen}
        purchaseCount={purchaseCount}
        isPurchaseCountVisible={isPurchaseCountVisible}
        setPurchaseCount={setPurchaseCount}
        setIsPurchaseCountVisible={setIsPurchaseCountVisible}
      />

      <OpenedSlider
        openedSlideIndex={openedSlideIndex}
        setOpenedSlideIndex={setOpenedSlideIndex}
        isInsideSliderOpened={isInsideSliderOpened}
        setIsInsideSliderOpened={setIsInsideSliderOpened}
        setIsOverlayOpen={setIsOverlayOpen}
      />
    </div>
  );
}

export default App;
