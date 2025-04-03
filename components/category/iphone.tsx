"use client";
import { ProductProps } from "@/lib/interface";
import React, { useEffect, useState } from "react";
import ProductGrid from "../product/product-grid";
import Filters from "../product/filters";
import { getProductApi } from "@/services/product";
import Pagination from "../ui/Pagination";

const Iphone = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<string>("default");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const products: ProductProps[] = await getProductApi();
      setLoading(false);
      setProducts(products);
    };
    getProducts();
  }, []);

  const ITEMS_PER_PAGE = 6;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  if (loading)
    return (
      <div className="text-center text-6xl text-stone-800 font-bold">
        Loading, please wait...
      </div>
    );
  return (
    <div className="flex gap-10 ">
      <div className="max-w-1/4 w-full ">
        <Filters products={products} onFilterChange={setFilteredProducts} />
      </div>
      <div className="w-full">
        <div className="flex space-x-3 items-center justify-end">
          <span>Selected products: </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded p-1"
          >
            <option value="default">By default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Rating: High to Low</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>

        <div className="">
          {filteredProducts.length <= 0 ? (
            <div className="flex items-center min-h-[70vh] justify-center">
              <span className="text-stone-800 text-9xl">Products None</span>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <ProductGrid products={paginatedProducts} />
              <div className="mt-auto">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Iphone;
