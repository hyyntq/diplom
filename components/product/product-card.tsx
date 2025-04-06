"use client";

import Heart from "@/components/icons/heart";
import { ProductProps } from "@/lib/interface";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  addFavorite,
  deleteFavorite,
  getFavorites,
} from "@/services/favorite-products";
import Link from "next/link";
import { useCart } from "@/data/cart-context";

interface ProductCardProps {
  product: ProductProps;
  isInCartPage?: boolean;
}

const ProductCard = ({ product, isInCartPage = false }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { cart, addToCart, updateQuantity } = useCart();
  const cartItem = cart.find((item) => item.id === product.id);

  
  useEffect(() => {
    const fetchProducts = async () => {
      const storedFavorites = await getFavorites();
      setIsFavorite(
        storedFavorites.some((item: ProductProps) => item.id === product.id)
      );
    };
    fetchProducts();
  }, [product.id]);

  function toggleFavorite() {
    if (isFavorite) {
      deleteFavorite(product);
    } else {
      addFavorite(product);
    }
    setIsFavorite(!isFavorite);
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  return (
    //
    <div className="relative rounded-lg py-6 px-4 text-center  flex flex-col gap-4 bg-stone-300">
      <button
        className=" cursor-pointer ml-auto w-8 h-8"
        onClick={() => toggleFavorite()}
      >
        {isFavorite ? (
          <FontAwesomeIcon
            icon={faHeart}
            className="text-red-500 text-[32px]"
          />
        ) : (
          <Heart size={32} fill="gray" />
        )}
      </button>
      <Link
        href={`/category/${product.category}/${generateSlug(product.title)}`}
      >
        <Image
          src={product.images[1]}
          alt={product.title}
          width={150}
          height={150}
          className="w-full h-56 object-contain mb-4 grow"
        />
      </Link>
      <h3 className="text-lg font-medium text-stone-800 mb-2 line-clamp-2">
        {product.title}
      </h3>
      <p className="text-2xl font-bold text-stone-800 mb-4 grow">
        {product.price} $
      </p>
      <div
        className={`flex items-center gap-2 ${
          isInCartPage ? "" : "justify-center mt-2"
        }`}
      >
        {cartItem ? (
          <div className="px-14 py-4 flex gap-5 items-center ">
            <button
              onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
              className="px-3 py-1 border-2 text-stone-800 rounded cursor-pointer border-stone-800 hover:bg-stone-800 hover:text-gray-200 transition duration-300"
            >
              -
            </button>
            <span className="text-2xl font-semibold">{cartItem.quantity}</span>
            <button
              onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
              className="px-3 py-1  border-2 border-stone-800 text-stone-800 rounded cursor-pointer hover:bg-stone-800 hover:text-gray-200 transition duration-300"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="uppercase border-2 border-stone-800 cursor-pointer px-14 py-4 rounded-xl text-stone-800 hover:bg-stone-800  hover:text-slate-200 transition-all duration-400 font-bold tracking-wider"
          >
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
