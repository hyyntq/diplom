"use client"

import { getCart } from '@/services/cart'
import React, { useEffect, useState } from 'react'
import { ProductProps } from '@/lib/interface'
import ProductCard from '../product/product-card'
import Loading from '../loading/loading'

const CartPage =  () => {
  const [cart, setCart] = useState<ProductProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  console.log(cart);

  useEffect(() => {
    try {
      const Cart = async () => {
        setLoading(true)
        const initCart = await getCart();
        setCart(initCart);
        setLoading(false)
      }
      Cart()
    } catch (error) {
      console.log(error);
    }
  }, [])
  if(loading) {
    return (
      <Loading/>
    )
  }
  return (
    <div className='flex gap-10 flex-col'>
      {cart.map((product, index) => (
        <div key={index} className=''>
          <ProductCard product={product}/>
        </div>
      ))}
    </div>
  )
}

export default CartPage