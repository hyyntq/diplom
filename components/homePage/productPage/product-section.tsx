import React from "react";
import ProductGrid from "./product-grid";
import { getProductApi } from "@/services/product";
import ProductLink from "@/components/ui/Product-Link";

const ProductSection = async () => {
  const product = await getProductApi();

  return (
    <>
      <div className="container mx-auto py-14 flex flex-col gap-5">
        <ProductLink />
        <ProductGrid products={product} />
      </div>
    </>
  );
};

export default ProductSection;
