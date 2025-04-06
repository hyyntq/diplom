import Image from "next/image";
import { ProductProps, CartItem } from "@/lib/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ProductCardProps {
  product: ProductProps;
  cart: CartItem[];
  addToCart?: (product: ProductProps) => void;
  updateQuantity?: (id: number, quantity: number) => void;
  removeFromCart?: (id: number) => void;
}

export const CartItems = ({
  product,
  updateQuantity,
  removeFromCart,
}: ProductCardProps) => {
  return (
    <div
      className="p-4 
          flex items-center justify-between  
          text-center bg-stone-400 rounded-xl"
    >
      <div className="flex items-center gap-4 max-w-64">
        <div className="relative w-30 h-30 flex-shrink-0">
          <Image
            src={`${
              product.images[1]
                ? `${product.images[1]}`
                : `${product.images[0]}`
            } `}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>
        <div className={"mt-2"}>
          <h3 className="text-lg font-semibold">{product.title}</h3>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => updateQuantity?.(product.id, product.quantity - 1)}
          className="px-3 py-1  outline outline-stone-800 text-stone-800 rounded-xl cursor-pointer hover:bg-stone-800 hover:text-gray-200 transition duration-300 text-xl flex items-center justify-center"
        >
          -
        </button>
        <span className="text-2xl">{product.quantity}</span>
        <button
          onClick={() => updateQuantity?.(product.id, product.quantity + 1)}
          className="px-3 py-1  outline outline-stone-800 text-stone-800 rounded-xl cursor-pointer hover:bg-stone-800 hover:text-gray-200 transition duration-300 text-xl flex items-center justify-center"
        >
          +
        </button>
      </div>
      <div className="flex gap-6 items-center">
        <p className="text-xl font-bold">${product.price}</p>
        <button
          onClick={() => removeFromCart?.(product.id)}
          className="bg-stone-800 text-gray-200 cursor-pointer  rounded-xl px-3 py-2 text-2xl "
        >
          <FontAwesomeIcon icon={faXmark} className="text-center w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
