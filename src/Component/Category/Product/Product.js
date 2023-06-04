import React from "react";
import { calculatePrice } from "../../../Utility/Utility";
import {Link} from "react-router-dom";

const Product = ({ product, show }) => {
  const {dollar, cent}= calculatePrice(product?.price?.price);
  if(!product) return null;
  let oldPrice ={
    dollar: "",
    cent: ""
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
        <Link
          className="card-img-top d-block overflow-hidden"
          to={"/shop/"+product?.category?.name + "/" + product?.id}
        >
          <img src={product?.images[0].url} alt="Product" />
        </Link>
        <div className="card-body py-2">
          <Link className="product-meta d-block font-size-xs pb-1" to="#">
            {product?.category?.name}
          </Link>
          <h3 className="product-title font-size-sm">
            <Link to={"/shop/product/" + product?.id}>{product?.title}</Link>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
