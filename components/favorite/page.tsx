"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../product/product-card";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);


  return (
    <div className="container mx-auto py-11 flex flex-col gap-8 ">
      <span className="font-bold text-3xl text-center">FAVORITES PRODUCTS</span>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {favorites.map((favorite, index) => (
            <div
              key={index}
              className="bg-stone-300 rounded-xl flex items-center justify-center"
            >
              <ProductCard product={favorite} />
            </div>
          )).reverse()}
        </div>
      ) : (
        <p className="bg-slate-800 p-8 text-zinc-300 text-4xl text-center rounded-full font-bold">
          You have no favorite products yet.
        </p>
      )}
    </div>
  );
};

export default Favorites;
