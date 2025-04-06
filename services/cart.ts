import { ProductProps } from "@/lib/interface"

export const getCart = () => {
  return JSON.parse(localStorage.getItem('cart') || "[]")
}

function saveLocalStorageCart(items: ProductProps[]) {
  localStorage.setItem('Cart', JSON.stringify(items))
}

export const addToCart = async (products: ProductProps) => {
  const cart = await getCart()
  const updateCart = [...cart, products]
  saveLocalStorageCart(updateCart)
}