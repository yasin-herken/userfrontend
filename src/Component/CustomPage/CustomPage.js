import React from 'react'
import CustomContainer from './CustomContainer/CustomContainer'
import CustomPageTitle from './CustomPageTitle/CustomPageTitle'

const CustomPage = () => {
  return (
    <React.Fragment>
        <CustomPageTitle />
        <CustomContainer />
    </React.Fragment>
  )
}

export default CustomPage