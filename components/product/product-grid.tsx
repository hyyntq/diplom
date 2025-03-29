import React from "react";
import ProductCard from "./product-card";
import { ProductProps } from "@/lib/interface";

const ProductGrid = ({ products }: { products: ProductProps[] }) => {
  
  return (
    <div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto container gap-4  rounded-xl`}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
