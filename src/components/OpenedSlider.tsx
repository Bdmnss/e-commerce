type OpenedSliderProps = {
  openedSlideIndex: number;
  setOpenedSlideIndex: React.Dispatch<React.SetStateAction<number>>;
  isInsideSliderOpened: boolean;
  setIsInsideSliderOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const OpenedSlider: React.FC<OpenedSliderProps> = ({
  openedSlideIndex,
  setOpenedSlideIndex,
  isInsideSliderOpened,
  setIsInsideSliderOpened,
  setIsOverlayOpen,
}) => {
  const handlePrev = () => {
    if (openedSlideIndex === 1) {
      setOpenedSlideIndex(4);
    } else {
      setOpenedSlideIndex(openedSlideIndex - 1);
    }
  };

  const handleNext = () => {
    if (openedSlideIndex === 4) {
      setOpenedSlideIndex(1);
    } else {
      setOpenedSlideIndex(openedSlideIndex + 1);
    }
  };
  return (
    <div
      className={`hidden flex-col absolute top-[14%] left-[32%] z-10 ${
        isInsideSliderOpened ? "lg:flex" : "hidden"
      }`}
    >
      <div className="flex justify-end">
        <svg
          onClick={() => {
            setIsInsideSliderOpened(false);
            setIsOverlayOpen(false);
          }}
          className="w-[2rem] h-[2rem] cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="h-[55rem] w-[55rem] relative rounded-[1rem] overflow-hidden my-[2.4rem]">
        <div
          className={`absolute w-[100%] h-[100%] top-0 transition-transform duration-500 ease-in-out ${
            openedSlideIndex === 1
              ? "translate-x-[0%]"
              : openedSlideIndex === 2
              ? "translate-x-[-100%]"
              : openedSlideIndex === 3
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
          className={`absolute w-[100%] h-[100%] top-0 transition-transform duration-500 ease-in-out ${
            openedSlideIndex === 1
              ? "translate-x-[100%]"
              : openedSlideIndex === 2
              ? "translate-x-[0%]"
              : openedSlideIndex === 3
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
          className={`absolute w-[100%] h-[100%] top-0 transition-transform duration-500 ease-in-out ${
            openedSlideIndex === 1
              ? "translate-x-[200%]"
              : openedSlideIndex === 2
              ? "translate-x-[100%]"
              : openedSlideIndex === 3
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
          className={`absolute w-[100%] h-[100%] top-0 transition-transform duration-500 ease-in-out ${
            openedSlideIndex === 1
              ? "translate-x-[300%]"
              : openedSlideIndex === 2
              ? "translate-x-[200%]"
              : openedSlideIndex === 3
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
      </div>
      <div
        onClick={handlePrev}
        className="flex items-center justify-center w-[5.6rem] h-[5.6rem] bg-white rounded-full absolute top-[45%] 
          left-[-5%] cursor-pointer"
      >
        <img src="./images/icon-previous.svg" alt="previous icon" />
      </div>
      <div
        onClick={handleNext}
        className="flex items-center justify-center w-[5.6rem] h-[5.6rem] bg-white rounded-full absolute top-[45%] 
          right-[-5%] cursor-pointer"
      >
        <img src="./images/icon-next.svg" alt="next icon" />
      </div>

      <div className="flex justify-evenly">
        <div
          className={`w-[8.8rem] rounded-[1rem] cursor-pointer overflow-hidden ${
            openedSlideIndex === 1 && "border-[2px] border-[#ff7e1b]"
          }`}
        >
          <img
            className={`hover:opacity-50 ${
              openedSlideIndex === 1 && "opacity-50"
            }`}
            src="./images/image-product-1-thumbnail.jpg"
            alt="photo 1 thumbnail"
            onClick={() => setOpenedSlideIndex(1)}
          />
        </div>

        <div
          className={`w-[8.8rem] rounded-[1rem] cursor-pointer overflow-hidden ${
            openedSlideIndex === 2 && "border-[2px] border-[#ff7e1b]"
          }`}
        >
          <img
            className={`hover:opacity-50 ${
              openedSlideIndex === 2 && "opacity-50"
            }`}
            src="./images/image-product-2-thumbnail.jpg"
            alt="photo 2 thumbnail"
            onClick={() => setOpenedSlideIndex(2)}
          />
        </div>

        <div
          className={`w-[8.8rem] rounded-[1rem] cursor-pointer overflow-hidden ${
            openedSlideIndex === 3 && "border-[2px] border-[#ff7e1b]"
          }`}
        >
          <img
            className={`hover:opacity-50 ${
              openedSlideIndex === 3 && "opacity-50"
            }`}
            src="./images/image-product-3-thumbnail.jpg"
            alt="photo 3 thumbnail"
            onClick={() => setOpenedSlideIndex(3)}
          />
        </div>

        <div
          className={`w-[8.8rem] rounded-[1rem] cursor-pointer overflow-hidden ${
            openedSlideIndex === 4 && "border-[2px] border-[#ff7e1b]"
          }`}
        >
          <img
            className={`hover:opacity-50 ${
              openedSlideIndex === 4 && "opacity-50"
            }`}
            src="./images/image-product-4-thumbnail.jpg"
            alt="photo 4 thumbnail"
            onClick={() => setOpenedSlideIndex(4)}
          />
        </div>
      </div>
    </div>
  );
};

export default OpenedSlider;
