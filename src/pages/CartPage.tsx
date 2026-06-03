import { useState } from "react";
import img32 from "../assets/mainpage3-2.png";
import CartEmpty from "../components/cart/CartEmpty";
import CartActive from "../components/cart/CartActive";
import CartCheckout from "../components/cart/CartCheckout";

function CartPage() {
  // mock cart item
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Linea Dress",
      price: 315,
      quantity: 1,
      image: img32,
      size: "S",
    },
  ]);

  const [isCheckout, setIsCheckout] = useState(false);

  // checkout state
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    country: "",
    address: "",
    state: "",
    phone: "",
    note: "",
  });

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0) // sl=0->del
    );
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!billingDetails.name || !billingDetails.country || !billingDetails.address || !billingDetails.state || !billingDetails.phone) {
        alert("Dien day du tt");
      return;
    }
    setCartItems([]);
    setIsCheckout(false);
  };

  if (cartItems.length === 0) {
    return <CartEmpty />;
  }

  if (isCheckout) {
    return (
      <CartCheckout
        cartItems={cartItems}
        subtotal={subtotal}
        totalQty={totalQty}
        billingDetails={billingDetails}
        setBillingDetails={setBillingDetails}
        onSubmitOrder={handleCheckoutSubmit}
        onBackToCart={() => setIsCheckout(false)}
      />
    );
  }

  return (
    <CartActive
      cartItems={cartItems}
      updateQuantity={updateQuantity}
      subtotal={subtotal}
      onProceedToCheckout={() => setIsCheckout(true)}
    />
  );
}

export default CartPage;
