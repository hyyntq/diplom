
import { useCart } from "../../data/cart-context";
import { CartItems } from "./cart-item";


interface CartListProps {
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

export const CartList = ({ updateQuantity, removeFromCart }: CartListProps) => {
  const { cart } = useCart();

  return (
    <div
      className="flex flex-col gap-3 max-h-[570px] overflow-y-auto pr-3"
      style={{
        scrollbarColor: "#78716C #F3F4F6"
      }}
    >
      {cart.map((item) => (
        <CartItems
          key={item.id}
          product={item}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          cart={cart}
        />
      ))}
    </div>
  );
};
