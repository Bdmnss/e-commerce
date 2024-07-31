interface OverlayProps {
  isOverlayOpen: boolean;
  setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Overlay: React.FC<OverlayProps> = ({
  isOverlayOpen,
  setIsOverlayOpen,
  setIsMenuOpen,
}) => {
  return (
    <div
      className={`bg-black h-[100%] w-[100%] opacity-75 absolute ${
        isOverlayOpen ? "block" : "hidden"
      }`}
      onClick={() => {
        setIsMenuOpen(false);
        setIsOverlayOpen(false);
      }}
    ></div>
  );
};

export default Overlay;
