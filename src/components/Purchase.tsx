interface PurchaseProps {
  purchaseCount: number;
  setPurchaseCount: React.Dispatch<React.SetStateAction<number>>;
  setIsPurchaseCountVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Purchase: React.FC<PurchaseProps> = ({
  purchaseCount,
  setPurchaseCount,
  setIsPurchaseCountVisible,
}) => {
  const handleMinus = () => {
    if (purchaseCount === 0) {
      setIsPurchaseCountVisible(false);
      return;
    }
    setPurchaseCount(purchaseCount - 1);
  };

  const handlePlus = () => {
    setPurchaseCount(purchaseCount + 1);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-[2.8rem]">
        <div className="flex items-center gap-[1.6rem]">
          <p className="text-[2.8rem] text-[#1d2026] font-bold">$125.00</p>
          <div
            className="bg-[#ffeee2] w-[5.1rem] h-[2.7rem] flex items-center justify-center text-[1.6rem]
            text-[#ff7e1b] font-bold rounded-[6px]"
          >
            50%
          </div>
        </div>
        <p className="text-[1.6rem] text-[#b6bcc8] font-bold line-through">
          $250.00
        </p>
      </div>

      <div
        className="bg-[#f6f8fd] w-[100%] py-[1.5rem] px-[2.4rem] rounded-[1rem] flex items-center 
          justify-between mb-[1.6rem]"
      >
        <img
          src="./images/icon-minus.svg"
          alt="minus icon"
          onClick={handleMinus}
        />
        <p className="text-[1.6rem] text-[#1d2026] font-bold">
          {purchaseCount}
        </p>
        <img
          src="./images/icon-plus.svg"
          alt="plus icon"
          onClick={handlePlus}
        />
      </div>

      <button
        disabled={purchaseCount === 0}
        onClick={() => setIsPurchaseCountVisible(true)}
        className="w-[100%] bg-[#ff7e1b] button-shadow flex items-center justify-center gap-[1.6rem]
          rounded-[1rem] text-[1.6rem] text-white font-bold py-[1.6rem] d disabled:opacity-75"
      >
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#fff"
          />
        </svg>
        Add to cart
      </button>
    </div>
  );
};
export default Purchase;
