import { ProductProps } from "./interface";

export function setLocalStorage(name: string, items: ProductProps[]) {
  localStorage.setItem(`"${name}"`, JSON.stringify(items));
}