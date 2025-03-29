"use client";

import Heart from "@/components/icons/heart";
import { ProductProps } from "@/lib/interface";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {addFavorite, deleteFavorite, getFavorites} from "@/services/favorite-products"

const ProductCard = ({ product }: { product: ProductProps }) => {

  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const storedFavorites = getFavorites()
    setIsFavorite(storedFavorites.some((item: ProductProps) => item.id === product.id));
  }, [product.id]); 

    function toggleFavorite() {    
    if (isFavorite) {
      deleteFavorite(product)
    } else {
      addFavorite(product)
    }
;
    setIsFavorite(!isFavorite);
  }


  return (
    //
    <div className="relative rounded-lg py-6 px-4 text-center  flex flex-col gap-4 = bg-stone-300">
      <button
        className="text-xl cursor-pointer ml-auto"
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
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={150}
        height={150}
        className="w-full h-56 object-contain mb-4"
      />

      <h3 className="text-lg font-medium text-stone-800 mb-2 line-clamp-2">
        {product.title}
      </h3>
      <p className="text-2xl font-bold text-stone-800 mb-4 grow">
        {product.price}
      </p>
      <button className="uppercase border-2 border-stone-800 cursor-pointer px-14 py-4 rounded-xl text-stone-800 hover:bg-stone-800  hover:text-slate-200 transition-all duration-400 font-bold tracking-wider">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
