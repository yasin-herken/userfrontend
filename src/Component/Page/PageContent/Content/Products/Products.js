import React from "react";
import Product from "./Product/Product";

const Products = ({products = []}) => {
  return (
    <React.Fragment>
      <div className="row mx-n2">
        {
          products?.map((product) => {
            return <Product key={product.id} product={product}/>
          })
        }
      </div>
    </React.Fragment>
  );
};

export default Products;
