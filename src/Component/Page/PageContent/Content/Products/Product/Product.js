import React from "react";
import { calculatePrice } from "../../../../../../Utility/Utility";

const Product = ({ product }) => {
  return (
    <React.Fragment>
      {/* Product*/}
      <div className="col-md-4 col-sm-6 px-2 mb-4">
        <div className="card product-card">
          <button
            className="btn-wishlist btn-sm"
            type="button"
            data-toggle="tooltip"
            data-placement="left"
            title="Add to wishlist"
          >
            <i className="czi-heart" />
          </button>
          <a
            className="card-img-top d-block overflow-hidden"
            href={product?.productLink}
          >
            <img src="assets/img/shop/catalog/07.jpg" alt="Product" />
          </a>
          <div className="card-body py-2">
            <a className="product-meta d-block font-size-xs pb-1" href="#">
              {product?.productCategory}
            </a>
            <h3 className="product-title font-size-sm">
              <a href={product?.productLink}>{product?.productTitle}</a>
            </h3>
            <div className="d-flex justify-content-between">
              <div className="product-price">
                <span className="text-accent">
                  ${calculatePrice(product?.productPrice).dollar}.
                  <small>{calculatePrice(product?.productPrice).cent}</small>
                </span>
                {product?.productOldPrice && (
                  <del className="font-size-sm text-muted">
                    ${calculatePrice(product?.productOldPrice).dollar}.
                    <small>
                      {calculatePrice(product?.productOldPrice).cent}
                    </small>
                  </del>
                )}
              </div>
              <div className="star-rating">
                {Array(5)
                  .fill(0)
                  .map((_, index) =>
                    index > product?.productRating ? (
                      <i className="sr-star czi-star" key={index} />
                    ) : (
                      <i
                        className="sr-star czi-star-filled active"
                        key={index}
                      />
                    )
                  )}
              </div>
            </div>
          </div>
          <div className="card-body card-body-hidden">
            <div className="text-center pb-2">
              <div className="custom-control custom-option custom-control-inline mb-2">
                <input
                  className="custom-control-input"
                  type="radio"
                  name="size4"
                  id="xs3"
                  defaultChecked
                />
                <label className="custom-option-label" htmlFor="xs3">
                  XS
                </label>
              </div>
              <div className="custom-control custom-option custom-control-inline mb-2">
                <input
                  className="custom-control-input"
                  type="radio"
                  name="size4"
                  id="s3"
                />
                <label className="custom-option-label" htmlFor="s3">
                  S
                </label>
              </div>
              <div className="custom-control custom-option custom-control-inline mb-2">
                <input
                  className="custom-control-input"
                  type="radio"
                  name="size4"
                  id="m3"
                />
                <label className="custom-option-label" htmlFor="m3">
                  M
                </label>
              </div>
            </div>
            <button
              className="btn btn-primary btn-sm btn-block mb-2"
              type="button"
              data-toggle="toast"
              data-target="#cart-toast"
            >
              <i className="czi-cart font-size-sm mr-1" />
              Add to Cart
            </button>
            <div className="text-center">
              <a
                className="nav-link-style font-size-ms"
                href="#quick-view"
                data-toggle="modal"
              >
                <i className="czi-eye align-middle mr-1" />
                Quick view
              </a>
            </div>
          </div>
        </div>
        <hr className="d-sm-none" />
      </div>
    </React.Fragment>
  );
};

export default Product;
