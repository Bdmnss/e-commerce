interface OverlayProps {
  isOverlayOpen: boolean;
  setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsInsideSliderOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Overlay: React.FC<OverlayProps> = ({
  isOverlayOpen,
  setIsOverlayOpen,
  setIsMenuOpen,
  setIsInsideSliderOpened,
}) => {
  return (
    <div
      className={`bg-black h-[100%] w-[100%] opacity-75 absolute z-10 cursor-pointer ${
        isOverlayOpen ? "block" : "hidden"
      }`}
      onClick={() => {
        setIsMenuOpen(false);
        setIsOverlayOpen(false);
        setIsInsideSliderOpened(false);
      }}
    ></div>
  );
};

export default Overlay;
