import { useNavigate } from "react-router-dom";

function CartEmpty() {
  const navigate = useNavigate();

  return (
   <div className="flex min-h-[60svh] items-center justify-center bg-white px-4 py-20">
      <div className="relative flex h-87.5 w-full max-w-125 flex-col justify-between  p-8 text-center">
        <div className="pt-4">
          <h2 style={{ fontFamily: "Work Sans" }} className="text-[28px] uppercase text-black">
            CART
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-[16px] text-black">
            Your cart is currently empty
          </p>
        </div>

        <div className="w-full">
          <button
            onClick={() => navigate("/")}
            className="w-full bg-black p-2 text-[14px] uppercase text-white"
          >
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartEmpty;
