import ProductGrid from "@/components/product/product-grid";
import { ProductCardProps } from "@/lib/interface";
import { getProductApi } from "@/services/product";
import React from "react";

const page = async () => {
  const product: ProductCardProps[] = await getProductApi(0, "laptops");
  return (
    <div>
      <ProductGrid products={product} />
    </div>
  );
};

export default page;
