"use client";

import { useCart } from "../../data/cart-context";
import { CartList } from "./cart-list";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotal } = useCart();

  return (
    <div className="flex py-18 gap-12">
      <div className="flex flex-col w-full gap-10">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            <CartList
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col w-full px-14 gap-10">
        <h1 className="font-bold text-2xl">Order Summary</h1>

        <div className="flex flex-col gap-4">
          <div className="">
            <label htmlFor="code" >Discount code / Promo code</label>
            <div className="flex gap-3">
              <input
                id="code"
                type="text"
                placeholder="Code"
                className="p-3 grow outline outline-stone-400 rounded focus:bg-stone-400 transition duration-300"
              />
              <button className="bg-stone-800 text-gray-200 rounded px-3 font-medium cursor-pointer">
                Apply
              </button>
            </div>
          </div>

          <div className="">
            <label htmlFor="bonus" className="">Your bonus card number</label>
            <div className="flex gap-3">
              <input
              id="bonus"
                type="text"
                placeholder="EnterCard"
                className="p-3 grow outline outline-stone-400 rounded focus:bg-stone-400 transition duration-300"
              />
              <button className="bg-stone-800 text-gray-200 rounded px-3 font-medium cursor-pointer">
                Apply
              </button>
            </div>
        </div>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h1>Subtotal</h1>
              <p>num</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h1>Estimated Tax</h1>
                <p>num</p>
              </div>
              <div className="flex justify-between">
                <h1>Estimated shipping & Handling</h1>
                <p>num</p>
              </div>
            </div>
            <div className="flex justify-between">
              <h1>Total</h1>
              <p>{getTotal()}</p>
            </div>
          </div>
          <button className="flex p-2 bg-black text-white cursor-pointer">
            checkout
          </button>
        </div>
      </div>
    </div>
  );
}
