import React from 'react'
import ProductGrid from '../productPage/product-grid'
import { getProductApi } from '@/services/product';

const Discount = async () => {
  
    const product = await getProductApi(4);
  return (
    <div className='py-20 container mx-auto flex flex-col gap-8'>
      
        <span className='font-bold text-2xl'>Discount up to -50%</span>
        <div>
          <ProductGrid products={product}/>
        </div>
    </div>
  )
}

export default Discount