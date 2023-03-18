import React from "react";
import {calculatePrice} from "../../../../../../Utility/Utility";
import {Link} from "react-router-dom";
import {sizeList} from "../../../../../../Constants/Constants";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../../../../Features/Cart/cartSlice";
import {addToWishlist} from "../../../../../../Features/Wishlist/wishlistReducer";
import {toast, ToastContainer} from "react-toastify";

const Product = ({product}) => {
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);
  return (<React.Fragment>
    {/* Product*/}
    <div className="col-md-4 col-sm-6 px-2 mb-4" key={product.key}>
      <div className="card product-card">
        <button
          className="btn-wishlist btn-sm"
          type="button"
          data-toggle="tooltip"
          data-placement="left"
          title="Add to wishlist"
          onClick={() => {
            dispatch(addToWishlist({
              id: product.id,
              title: product.title,
              size: product.size,
              color: product.color,
              image: product.images[0].url,
              price: product.price.price,
              currency: product.price.currency,
              stock: product.stock,
            }))
          }}
        >
          <i className="czi-heart"/>
        </button>
        <Link
          className="card-img-top d-block"
          to={`/shop/product/${product?.id}`}
        >
          <img src={product?.images[0].url} alt="Product"/>
        </Link>
        <div className="card-body py-2">
          <Link className="product-meta d-block font-size-xs pb-1" to="#">
            {product?.category?.name}
          </Link>
          <h3 className="product-title font-size-sm">
            <a href={`product/${product?.id}`}>{product?.title}</a>
          </h3>
          <div className="d-flex justify-content-between">
            <div className="product-price">
                <span className="text-accent">
                   ${product?.price?.price && calculatePrice(product?.price?.price).dollar}.
                    <small>{product?.price?.price && calculatePrice(product?.price?.price).cent}</small>
                </span>
              {product?.productOldPrice && (<del className="font-size-sm text-muted">
                ${product?.price?.price && calculatePrice(product?.price?.price).dollar}.
                <small>{product?.price?.price && calculatePrice(product?.price?.price).cent}</small>
              </del>)}
            </div>
          </div>
        </div>
        <div className="card-body card-body-hidden">
          <div className="text-center pb-2">
            {sizeList.map((size, index) => {
              return (<div className="custom-control custom-option custom-control-inline mb-2"
                           key={`sizeList${index}`}>
                <input
                  className="custom-control-input"
                  type="radio"
                  name="size4"
                  id={size.value}
                  defaultChecked
                />
                <label className="custom-option-label" htmlFor={size.value}>
                  {size.value.toUpperCase()}
                </label>
              </div>)
            })}
          </div>
          <button
            className="btn btn-primary btn-sm btn-block mb-2"
            type="button"
            data-toggle="toast"
            data-target="#cart-toast"
            onClick={() => {
              dispatch(addToCart({
                id: product.id,
                title: product.title,
                size: product.size,
                color: product.color,
                image: product.images[0].url,
                price: product.price.price,
                currency: product.price.currency,
                stock: product.stock,
              }));
            }}
          >
            <i className="czi-cart font-size-sm mr-1"/>
            Add to Cart
          </button>
        </div>
      </div>
      <hr className="d-sm-none"/>
    </div>
  </React.Fragment>);
};

export default Product;
