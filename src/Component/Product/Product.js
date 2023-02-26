import React from 'react'
import ProductDescription from './ProductDescription/ProductDescription'
import ProductSwiper from './ProductSwiper/ProductSwiper'

const Product = ({description}) => {
  return (
    <React.Fragment> 
        <ProductDescription description={description} />
        <ProductSwiper />
    </React.Fragment>
  )
}

export default Product