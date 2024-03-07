import ProductsItem from '@/components/products/ProductsItem'
import data from '@/lib/models/data'
import React from 'react'

const Home = () => {
  return (
    <>
    <h2 className=' text-2xl py-2'>
      Latest Products
    </h2>
    <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {data.products.map(product=><ProductsItem key={product.slug} product={product} />)}
    </div>
    </>
  )
}

export default Home
