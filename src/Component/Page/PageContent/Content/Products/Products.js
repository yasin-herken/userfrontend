import React from "react";
import Product from "./Product/Product";

const Products = ({products = []}) => {
  return (
    <React.Fragment>
      <div className="row mx-n2">
       {
        products[0]?.categoryProducts.map((product,index)=><Product key={index} product={product}/>)
       }
      </div>
    </React.Fragment>
  );
};

export default Products;
