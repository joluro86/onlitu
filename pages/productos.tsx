import { ProductComponent } from '@/components/ProductComponent'
import React from 'react'

const productos = () => {
  return (
    <div className='mx-auto max-w-[1200px] m-8'>
      <h1 className='mb-4 text-lg text-gray-900 dark:text-white'>Productos</h1>
      <div className="flex flex-wrap justify-center gap-4 bg-gray-900">
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
      </div>
    </div>
  )
}

export default productos
