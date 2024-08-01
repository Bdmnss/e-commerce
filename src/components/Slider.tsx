import { useState } from "react";

const Slider = () => {
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
    <div className="h-[30rem] relative overflow-hidden rounded-[1rem]">
      <div
        className={`absolute top-0 w-[100%] transition-transform duration-500 ease-in-out ${
          slideIndex === 1
            ? "translate-x-[0%]"
            : slideIndex === 2
            ? "translate-x-[-100%]"
            : slideIndex === 3
            ? "translate-x-[-200%]"
            : "translate-x-[-300%]"
        }`}
      >
        <img src="./images/image-product-1.jpg" alt="photo 1" />
      </div>
      <div
        className={`absolute top-0 w-[100%] transition-transform duration-500 ease-in-out ${
          slideIndex === 1
            ? "translate-x-[100%]"
            : slideIndex === 2
            ? "translate-x-[0%]"
            : slideIndex === 3
            ? "translate-x-[-100%]"
            : "translate-x-[-200%]"
        }`}
      >
        <img src="./images/image-product-2.jpg" alt="photo 2" />
      </div>
      <div
        className={`absolute top-0 w-[100%] transition-transform duration-500 ease-in-out ${
          slideIndex === 1
            ? "translate-x-[200%]"
            : slideIndex === 2
            ? "translate-x-[100%]"
            : slideIndex === 3
            ? "translate-x-[0%]"
            : "translate-x-[-100%]"
        }`}
      >
        <img src="./images/image-product-3.jpg" alt="photo 3" />
      </div>
      <div
        className={`absolute top-0 w-[100%] transition-transform duration-500 ease-in-out ${
          slideIndex === 1
            ? "translate-x-[300%]"
            : slideIndex === 2
            ? "translate-x-[200%]"
            : slideIndex === 3
            ? "translate-x-[100%]"
            : "translate-x-[0%]"
        }`}
      >
        <img src="./images/image-product-4.jpg" alt="photo 4" />
      </div>

      <div
        onClick={handlePrev}
        className="flex items-center justify-center w-[4rem] h-[4rem] bg-white rounded-full absolute top-[45%] left-[5%]"
      >
        <img src="./images/icon-previous.svg" alt="previous icon" />
      </div>
      <div
        onClick={handleNext}
        className="flex items-center justify-center w-[4rem] h-[4rem] bg-white rounded-full absolute top-[45%] right-[5%]"
      >
        <img src="./images/icon-next.svg" alt="next icon" />
      </div>
    </div>
  );
};

export default Slider;
