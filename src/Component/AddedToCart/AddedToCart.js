import React from "react";

const AddedToCart = () => {
  return (
    <React.Fragment>
      {/* Toast: Added to Cart*/}
      <div className="toast-container toast-bottom-center">
        <div
          className="toast mb-3"
          id="cart-toast"
          data-delay={5000}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header bg-success text-white">
            <i className="czi-check-circle mr-2" />
            <h6 className="font-size-sm text-white mb-0 mr-auto">
              Added to cart!
            </h6>
            <button
              className="close text-white ml-2 mb-1"
              type="button"
              data-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="toast-body">
            This item has been added to your cart.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddedToCart;
