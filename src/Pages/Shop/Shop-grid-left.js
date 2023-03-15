import React from 'react'
import Page from '../../Component/Page/Page';
import AddedToCart from "../../Component/AddedToCart/AddedToCart";
import {useLoaderData} from "react-router-dom";

const ShopGridLeft = () => {
  const {products, categories} = useLoaderData();
  return (
    <React.Fragment>
      <Page key={products} products={products} categories={categories}/>
      <AddedToCart/>
    </React.Fragment>
  )
}

export default ShopGridLeft;