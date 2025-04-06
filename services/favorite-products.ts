import { ProductProps } from "@/lib/interface";

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

function setLocalStorageFavorite(items: ProductProps[]) {
  localStorage.setItem("favorites", JSON.stringify(items));
}

export const addFavorite = async (product: ProductProps) => {
  
  const favorites = await getFavorites();
  const updatedFavorites = [...favorites, product];
  setLocalStorageFavorite(updatedFavorites);
};

export const deleteFavorite = (product: ProductProps) => {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter(
    (favorite: ProductProps) => favorite.id !== product.id
  );
  setLocalStorageFavorite(updatedFavorites);
};
