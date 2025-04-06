"use client"
import React, { useEffect, useState } from "react";
import { getProductApi } from "@/services/product";
import ProductLink from "./product-link";
import ProductCard from "@/components/product/product-card";
import { ProductProps } from "@/lib/interface";
const ProductSection = () => {
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    try {
      const fetchProduct = async () => {
        const products: ProductProps[] = await getProductApi(8);
        setProducts(products);
      };
      fetchProduct();
    } catch (error) {
      console.log(error);
    }
  })

  return (
    <>
      <div className="container mx-auto py-14 flex flex-col gap-5">
        <ProductLink />
        
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mx-auto container gap-4  rounded-xl`}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

      </div>
    </>
  );
};

export default ProductSection;
