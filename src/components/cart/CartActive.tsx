interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
}

interface CartActiveProps {
  cartItems: CartItem[];
  updateQuantity: (id: number, delta: number) => void;
  subtotal: number;
  onProceedToCheckout: () => void;
}

function CartActive({
  cartItems,
  updateQuantity,
  subtotal,
  onProceedToCheckout,
}: CartActiveProps) {
  const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="md:mx-10 bg-white py-6 md:px-4 text-black">
      <h2
        style={{ fontFamily: "Work Sans" }}
        className="text-center text-[28px] uppercase mb-12"
      >
        CART
      </h2>

      {/* Item list */}
      <div className="space-y-8">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-6 items-stretch flex-col md:flex-row"
          >
            {/* img */}
            <img
              src={item.image}
              alt={item.name}
              className="p-10 w-full h-auto md:w-[200px] md:h-[300px] object-cover shrink-0"
            />

            {/* info & controls */}
            <div className="flex flex-col justify-between flex-1 py-1 md:ml-27 mx-2 ">
              {/* Top part: Name & Price */}
              <div className="space-y-1">
                <p className="text-[24px] ">{item.name}</p>
                <p className="text-[16px]">Price: ${item.price}</p>
              </div>

              {/* Bottom part: Size, Qty, Total */}
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-[16px]">
                <div className="flex justify-between md:contents">
                  <div>Size: {item.size}</div>
                  <div>Total: ${item.price * item.quantity}</div>
                </div>

                <div className="flex items-center border border-zinc-300 w-fit">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-4 py-1 border-r border-zinc-300 hover:bg-zinc-100 font-sans font-medium text-[16px] cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-5 py-1 font-sans text-[14px]">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-4 py-1 border-l border-zinc-300 hover:bg-zinc-100 font-sans font-medium text-[16px] cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto my-10 h-px bg-[#D18B13] opacity-65 w-[90%]" />

      {/* total & discount summary */}
      <div className="space-y-6 text-black">
        <div className="grid grid-col-2 md:grid-cols-3 text-center text-[16px]">
          <span className="text-left">Quantity</span>
          <span>
            {totalQty} {totalQty > 1 ? "items" : "item"}
          </span>
          <span className="text-right ">USD {subtotal}</span>
        </div>

        <div className="mt-10 grid grid-cols-3 text-center text-[16px]">
          <span className="text-left ">Promotion code</span>
          <button className="underline text-[#A6A6A6] ">Promotion code</button>
          <span></span>
        </div>

        <div className="flex justify-between items-center text-[24px] ">
          <span>Subtotal</span>
          <span>USD {subtotal}</span>
        </div>

        <div className="flex justify-center w-full h-10">
          <button
            onClick={onProceedToCheckout}
            className="w-95.75 text-white bg-black py-3 text-[14px] uppercase"
          >
            CHECK OUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartActive;
