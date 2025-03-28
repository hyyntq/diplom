import React from "react";
import ProductCard from "./product-card";
import { ProductCardProps } from "@/lib/interface";

const ProductGrid = ({ products }: { products: ProductCardProps[] }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mx-auto container gap-4  rounded-xl">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
