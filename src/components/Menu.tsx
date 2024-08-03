interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems = ["Collection", "Men", "Woman", "About", "Contact"];

const Menu: React.FC<MenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  setIsOverlayOpen,
}) => {
  return (
    <nav
      className={`bg-white h-[100%] w-[65%] z-10 absolute pl-[2.5rem] pt-[2.5rem] ${
        isMenuOpen
          ? "animate-slide-left-to-right"
          : "animate-slide-right-to-left"
      }`}
    >
      <div className="mb-[5.5rem]">
        <img
          src="./images/icon-close.svg"
          alt="close icon"
          onClick={() => {
            setIsMenuOpen(false);
            setIsOverlayOpen(false);
          }}
        />
      </div>
      <div className="flex flex-col gap-[2rem] text-[1.8rem] text-[#1d2026] font-bold">
        {navItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </nav>
  );
};
export default Menu;
