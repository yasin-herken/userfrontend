import React from 'react'
import CustomContainer from './CustomContainer/CustomContainer'
import CustomPageTitle from './CustomPageTitle/CustomPageTitle'

const CustomPage = ({product}) => {
  return (
    <React.Fragment>
        <CustomPageTitle product={product}/>
        <CustomContainer product={product}/>
    </React.Fragment>
  )
}

export default CustomPage