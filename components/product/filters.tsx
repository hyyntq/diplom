import { ProductProps } from "@/lib/interface";
import React from "react";



const Filters = ({ products }: {products: ProductProps[]}) => {
  

  const brands = Array.from(new Set(products.map((product) => product.brand)));

  

  return <div>{brands}</div>;
};

export default Filters;
