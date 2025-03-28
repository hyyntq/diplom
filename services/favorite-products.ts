import { ProductCardProps } from "@/lib/interface";

export const getFavorites = (): ProductCardProps[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

function setLocalStorageFavorite(items: ProductCardProps[]) {
  localStorage.setItem("favorites", JSON.stringify(items));
}

export const addFavorite = async (product: ProductCardProps) => {
  
  const favorites = getFavorites();
  const updatedFavorites = [...favorites, product];
  setLocalStorageFavorite(updatedFavorites);
};

export const deleteFavorite = (product: ProductCardProps) => {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter(
    (favorite: ProductCardProps) => favorite.id !== product.id
  );
  setLocalStorageFavorite(updatedFavorites);
};
