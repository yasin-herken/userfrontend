import React from "react";
import { calculatePrice } from "../../../Utility/Utility";

const Product = ({ product, show }) => {
  const {dollar, cent}= calculatePrice(product?.productPrice);
  if(!product) return null;
  let oldPrice ={
    dollar: "",
    cent: ""
  }
  if(product?.productOldPrice){
    oldPrice = calculatePrice(product?.productOldPrice);
  }

  return (
    <div
      className={`col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 ${
        show && "d-none d-lg-block"
      }`}
    >
      <div className="card product-card card-static">
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
          <img src={product?.productImage} alt="Product" />
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
                ${dollar}.<small>{cent}</small>
              </span>
              {product?.productOldPrice &&(
                <del className="font-size-sm text-muted">
                {oldPrice.dollar}.<small>{oldPrice.cent}</small>
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
                    <i className="sr-star czi-star-filled active" key={index} />
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
