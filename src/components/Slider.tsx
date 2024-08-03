import { useState } from "react";

type SliderProps = {
  setIsInsideSliderOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenedSlideIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Slider: React.FC<SliderProps> = ({
  setIsInsideSliderOpened,
  setOpenedSlideIndex,
  setIsOverlayOpen,
}) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const handlePrev = () => {
    if (slideIndex === 1) {
      setSlideIndex(4);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleNext = () => {
    if (slideIndex === 4) {
      setSlideIndex(1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };
  return (
    <div className="flex lg:flex-col w-[100%] justify-center lg:w-[50%]">
      <div
        className="h-[30rem] w-[37.5rem] relative overflow-hidden rounded-[1rem] mb-[2.4rem] cursor-pointer
        lg:h-[45rem] lg:w-[45rem]"
      >
        <div
          onClick={() => {
            if (window.innerWidth > 1024) {
              setIsInsideSliderOpened(true);
              setOpenedSlideIndex(slideIndex);
              setIsOverlayOpen(true);
            }
          }}
          className={`absolute top-0 w-[100%] h-[100%] transition-transform duration-500 ease-in-out ${
            slideIndex === 1
              ? "translate-x-[0%]"
              : slideIndex === 2
              ? "translate-x-[-100%]"
              : slideIndex === 3
              ? "translate-x-[-200%]"
              : "translate-x-[-300%]"
          }`}
        >
          <img
            src="./images/image-product-1.jpg"
            alt="photo 1"
            className="h-[100%] w-[100%] object-cover"
          />
        </div>
        <div
          onClick={() => {
            if (window.innerWidth > 1024) {
              setIsInsideSliderOpened(true);
              setOpenedSlideIndex(slideIndex);
              setIsOverlayOpen(true);
            }
          }}
          className={`absolute top-0 w-[100%] h-[100%] transition-transform duration-500 ease-in-out ${
            slideIndex === 1
              ? "translate-x-[100%]"
              : slideIndex === 2
              ? "translate-x-[0%]"
              : slideIndex === 3
              ? "translate-x-[-100%]"
              : "translate-x-[-200%]"
          }`}
        >
          <img
            src="./images/image-product-2.jpg"
            alt="photo 2"
            className="h-[100%] w-[100%] object-cover"
          />
        </div>
        <div
          onClick={() => {
            if (window.innerWidth > 1024) {
              setIsInsideSliderOpened(true);
              setOpenedSlideIndex(slideIndex);
              setIsOverlayOpen(true);
            }
          }}
          className={`absolute top-0 w-[100%] h-[100%] transition-transform duration-500 ease-in-out ${
            slideIndex === 1
              ? "translate-x-[200%]"
              : slideIndex === 2
              ? "translate-x-[100%]"
              : slideIndex === 3
              ? "translate-x-[0%]"
              : "translate-x-[-100%]"
          }`}
        >
          <img
            src="./images/image-product-3.jpg"
            alt="photo 3"
            className="h-[100%] w-[100%] object-cover"
          />
        </div>
        <div
          onClick={() => {
            if (window.innerWidth > 1024) {
              setIsInsideSliderOpened(true);
              setOpenedSlideIndex(slideIndex);
              setIsOverlayOpen(true);
            }
          }}
          className={`absolute top-0 w-[100%] h-[100%] transition-transform duration-500 ease-in-out ${
            slideIndex === 1
              ? "translate-x-[300%]"
              : slideIndex === 2
              ? "translate-x-[200%]"
              : slideIndex === 3
              ? "translate-x-[100%]"
              : "translate-x-[0%]"
          }`}
        >
          <img
            src="./images/image-product-4.jpg"
            alt="photo 4"
            className="h-[100%] w-[100%] object-cover"
          />
        </div>
        <div
          onClick={handlePrev}
          className="flex items-center justify-center w-[4rem] h-[4rem] bg-white rounded-full absolute top-[45%] 
          left-[5%] lg:hidden"
        >
          <img src="./images/icon-previous.svg" alt="previous icon" />
        </div>
        <div
          onClick={handleNext}
          className="flex items-center justify-center w-[4rem] h-[4rem] bg-white rounded-full absolute top-[45%] 
          right-[5%] lg:hidden"
        >
          <img src="./images/icon-next.svg" alt="next icon" />
        </div>
      </div>

      <div className="hidden lg:flex justify-between">
        <div
          className={`w-[8.8rem] rounded-[1rem] cursor-pointer overflow-hidden ${
            slideIndex === 1 && "border-[2px] border-[#ff7e1b]"
          }`}
        >
          <img
            className={`hover:opacity-50 ${slideIndex === 1 && "opacity-50"}`}
            src="./images/image-product-1-thumbnail.jpg"
            alt="photo 1 thumbnail"
            onClick={() => setSlideIndex(1)}
          />
        </div>

        <div
          className={`w-[8.8rem] rounded-[1rem] cursor-pointer overflow-hidden ${
            slideIndex === 2 && "border-[2px] border-[#ff7e1b]"
          }`}
        >
          <img
            className={`hover:opacity-50 ${slideIndex === 2 && "opacity-50"}`}
            src="./images/image-product-2-thumbnail.jpg"
            alt="photo 2 thumbnail"
            onClick={() => setSlideIndex(2)}
          />
        </div>

        <div
          className={`w-[8.8rem] rounded-[1rem] cursor-pointer overflow-hidden ${
            slideIndex === 3 && "border-[2px] border-[#ff7e1b]"
          }`}
        >
          <img
            className={`hover:opacity-50 ${slideIndex === 3 && "opacity-50"}`}
            src="./images/image-product-3-thumbnail.jpg"
            alt="photo 3 thumbnail"
            onClick={() => setSlideIndex(3)}
          />
        </div>

        <div
          className={`w-[8.8rem] rounded-[1rem] cursor-pointer overflow-hidden ${
            slideIndex === 4 && "border-[2px] border-[#ff7e1b]"
          }`}
        >
          <img
            className={`hover:opacity-50 ${slideIndex === 4 && "opacity-50"}`}
            src="./images/image-product-4-thumbnail.jpg"
            alt="photo 4 thumbnail"
            onClick={() => setSlideIndex(4)}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
