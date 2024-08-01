interface CartProps {
  isCartOpen: boolean;
  purchaseCount: number;
  isPurchaseCountVisible: boolean;
  setPurchaseCount: React.Dispatch<React.SetStateAction<number>>;
  setIsPurchaseCountVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart: React.FC<CartProps> = ({
  isCartOpen,
  purchaseCount,
  isPurchaseCountVisible,
  setPurchaseCount,
  setIsPurchaseCountVisible,
}) => {
  return (
    <div
      className={`flex flex-col shadow rounded-[10px] bg-white transition-all duration-500 ease-in-out ${
        isCartOpen ? "h-[26rem] opacity-100 visible" : "h-0 opacity-0 invisible"
      } absolute top-[9%] right-[2%] w-[96%] overflow-hidden`}
    >
      <div className="py-[2.4rem] pl-[2.4rem] border-b-[1px] border-solid border-b-[#e4e9f2]">
        <p className="text-[1.6rem] text-[#1d2026] font-bold">Cart</p>
      </div>

      {purchaseCount > 0 && isPurchaseCountVisible ? (
        <div className="h-[100%] flex flex-col justify-center items-center px-[2.4rem]">
          <div className="flex items-center justify-between w-[100%] mb-[2.6rem]">
            <div className="w-[5rem] h-[5rem] rounded-[4px] overflow-hidden">
              <img src="./images/image-product-1.jpg" alt="" />
            </div>
            <div>
              <p className="text-[1.6rem] text-[#69707d]">
                Fall Limited Edition Sneakers
              </p>
              <p className="text-[1.6rem] text-[#69707d]">
                $125.00 x {purchaseCount}{" "}
                <span className="text-[#1d2026] font-bold">
                  ${125 * purchaseCount}.00
                </span>
              </p>
            </div>
            <img
              onClick={() => {
                setIsPurchaseCountVisible(false);
                setPurchaseCount(0);
              }}
              src="./images/icon-delete.svg"
              alt="delete icon"
            />
          </div>

          <button
            className="bg-[#ff7e1b] w-[100%] flex justify-center items-center text-[1.6rem] text-[#fff]
          font-bold py-[1.6rem] rounded-[1rem]"
          >
            Checkout
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[100%]">
          <p className="text-[1.6rem] text-[#69707d] font-bold">
            Your cart is empty.
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
