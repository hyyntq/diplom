import Filters from '@/components/product/filters'
import ProductGrid from '@/components/product/product-grid'
import { ProductProps } from '@/lib/interface'
import { getProductApi } from '@/services/product'
import React from 'react'

const page = async () => {
  
  

  const product: ProductProps[] = await getProductApi()
  return (
    <div className="flex">
      <div className="max-w-1/3 w-full">
        <Filters products={product} />
      </div>

      <div className="w-full">
        <ProductGrid products={product} />
      </div>
    </div>
  );
}

export default page