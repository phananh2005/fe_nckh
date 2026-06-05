import { useState } from "react";
import CartEmpty from "../components/cart/CartEmpty";
import CartActive from "../components/cart/CartActive";
import CartCheckout from "../components/cart/CartCheckout";
import { useCart } from "../context/CartContext.tsx";

function CartPage() {
  const { cartItems, updateQuantity, clearCart } = useCart();
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

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!billingDetails.name || !billingDetails.country || !billingDetails.address || !billingDetails.state || !billingDetails.phone) {
      alert("Dien day du tt");
      return;
    }
    clearCart();
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
