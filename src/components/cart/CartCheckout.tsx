interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
}

interface BillingDetails {
  name: string;
  country: string;
  address: string;
  state: string;
  phone: string;
  note: string;
}

interface CartCheckoutProps {
  cartItems: CartItem[];
  subtotal: number;
  totalQty: number;
  billingDetails: BillingDetails;
  setBillingDetails: React.Dispatch<React.SetStateAction<BillingDetails>>;
  onSubmitOrder: (e: React.FormEvent) => void;
  onBackToCart: () => void;
}

function CartCheckout({
  cartItems,
  subtotal,
  totalQty,
  billingDetails,
  setBillingDetails,
  onSubmitOrder,
}: CartCheckoutProps) {
  const inputClass = "w-full border border-[#A6A6A6] rounded-md px-3 py-2 text-[14px]  focus:border-zinc-500 focus:outline-none bg-white";
  const labelClass = "block text-[14px]  text-zinc-700 mb-1";

  return (
    <div className="mx-auto max-w-300 bg-white px-8 py-6 text-black">
      {/* Title */}
      <h2
        style={{ fontFamily: "Work Sans" }}
        className="text-center text-[28px] uppercase mb-5 md:mb-12"
      >
        CHECK OUT
      </h2>

      <div className="grid grid-cols-1 gap-8 md:gap-50 lg:grid-cols-2 ">
        <div>
          <h3
            style={{ fontFamily: "Work Sans" }}
            className="text-[24px] mb-3 md:mb-6"
          >
            Billing Details
          </h3>

          <div className="space-y-4">
            <div>
              <label className={labelClass}>Name*</label>
              <input
                type="text"
                required
                value={billingDetails.name}
                onChange={(e) =>
                  setBillingDetails({ ...billingDetails, name: e.target.value })
                }
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Country*</label>
              <input
                type="text"
                required
                value={billingDetails.country}
                onChange={(e) =>
                  setBillingDetails({ ...billingDetails, country: e.target.value })
                }
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Town/City*</label>
              <input
                type="text"
                required
                value={billingDetails.state}
                onChange={(e) =>
                  setBillingDetails({ ...billingDetails, state: e.target.value })
                }
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Street address*</label>
              <input
                type="text"
                required
                value={billingDetails.address}
                onChange={(e) =>
                  setBillingDetails({ ...billingDetails, address: e.target.value })
                }
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Phone*</label>
              <input
                type="tel"
                required
                value={billingDetails.phone}
                onChange={(e) =>
                  setBillingDetails({ ...billingDetails, phone: e.target.value })
                }
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Note</label>
              <input
                type="text"
                value={billingDetails.note}
                onChange={(e) =>
                  setBillingDetails({ ...billingDetails, note: e.target.value })
                }
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* right */}
        <div className="space-y-4">
          {/* Subtotal row */}
          <div className="flex justify-between items-center">
            <span className="text-[24px]">Subtotal</span>
            <span className="font-semibold text-[24px]">USD {subtotal}</span>
          </div>

          <div className="flex justify-between items-center text-[20px]">
            <span>Quantity</span>
            <span>
              {totalQty} {totalQty > 1 ? "items" : "item"}
            </span>
          </div>

          <div className="mt-10 mb-12 md:mt-30 md:mb-12 h-px bg-[#D18B13] opacity-60 w-full" />

          <div className="space-y-6">
            {cartItems.map((item) => (
            
              <div key={item.id} className="flex flex-col items-center md:flex-row md:items-start gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-50 h-75 object-cover shrink-0"
                />

                <div className="space-y-8 md:space-y-45 w-full flex-1 py-2 md:mx-10">
                  <p
                    style={{ fontFamily: "Work Sans" }}
                    className="text-[20px] uppercase tracking-wider font-normal text-center md:text-left"
                  >
                    {item.name}
                  </p>

                  <div className="space-y-2">
                    <div className="text-[16px]">
                      Size: {item.size}
                    </div>
                    <div className="flex justify-between items-center text-[16px]">
                      <span>Qty: {item.quantity}</span>
                      <span>USD {item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="mt-14 flex justify-center">
        <button
          onClick={onSubmitOrder}
          className="w-95.75 h-10 bg-black text-[14px] uppercase text-white"
        >
          CHECK OUT
        </button>
      </div>
    </div>
  );
}

export default CartCheckout;
