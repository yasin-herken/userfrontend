import React from "react";
import CustomPage from "../../Component/CustomPage/CustomPage";
import SingleProduct from "../../Component/Product/Product";
import {useLoaderData} from "react-router-dom";

const Product = () => {
  const {product} = useLoaderData();
  return (<React.Fragment>
    <CustomPage product={product}/>
    <SingleProduct description={product.description}/>
  </React.Fragment>);
};

export default Product;
