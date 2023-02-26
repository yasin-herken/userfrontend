import React from "react";

const ProductDescription = ({description}) => {
  return (
    <React.Fragment>
       {/* Product description*/}
       <div className="container pt-lg-3 pb-4 pb-sm-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="h3 pb-2">Choose your style</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <hr className="pb-5"></hr>
    </React.Fragment>
  );
};

export default ProductDescription;
