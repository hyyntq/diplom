"use client"

import { ProductProps } from '@/lib/interface'
import React, { useEffect, useState } from 'react'
import Filters from '../product/filters'
import ProductGrid from '../product/product-grid'
import { getProductApi } from '@/services/product'

const Computers = () => {
  const [products, setProducts] = useState<ProductProps[]>([])
      const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>
      ([]);
      const [loading, setLoading] = useState<boolean>(true);
  
      useEffect(() => {
        const getProducts = async () => {
          setLoading(true)
          const products: ProductProps[] = await getProductApi(0, "laptops");
          setLoading(false)
          setProducts(products)
        }
        getProducts()
      }, [])
  
      if (loading) return (
        <div className="text-center text-6xl text-stone-800 font-bold">
          Loading, please wait...
        </div>
      );
  return (
    <div className="flex gap-10 ">
      <div className="max-w-1/4 w-full">
        <Filters products={products} onFilterChange={setFilteredProducts} />
      </div>

      <div className="w-full">
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}

export default Computers