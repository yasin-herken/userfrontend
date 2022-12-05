import React from "react";

const ProductDescription = () => {
  return (
    <React.Fragment>
       {/* Product description*/}
       <div className="container pt-lg-3 pb-4 pb-sm-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="h3 pb-2">Choose your style</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p><img src="assets/img/shop/single/prod-img2.jpg" alt="Product description" />
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
          </div>
        </div>
      </div>
      <hr className="pb-5"></hr>
    </React.Fragment>
  );
};

export default ProductDescription;
