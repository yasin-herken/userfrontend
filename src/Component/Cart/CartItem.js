import React from 'react';
import {Link} from "react-router-dom";
import {calculatePrice} from "../../Utility/Utility";
import {autoIncrementOrDecrement, removeItem} from "../../Features/Cart/cartSlice";
import {useDispatch} from "react-redux";

const CartItem = ({id, title, price, currency, image, size, color, quantity}) => {
  const dispatch = useDispatch();
  const calculatedPrice = calculatePrice(price);
  return (<div className="d-sm-flex justify-content-between align-items-center my-4 pb-3 border-bottom">
    <div className="media media-ie-fix d-block d-sm-flex align-items-center text-center text-sm-left">
      <Link
        className="d-inline-block mx-auto mr-sm-4"
        to={`/shop/product/${id}`}
        style={{width: "10rem"}}
      >
        <img src={image} alt="Product"/>
      </Link>
      <div className="media-body pt-2">
        <h3 className="product-title font-size-base mb-2">
          <Link to={`/shop/product/${id}`}>{title}</Link>
        </h3>
        <div className="font-size-sm">
          <span className="text-muted mr-2">Size:</span>{size}
        </div>
        <div className="font-size-sm">
          <span className="text-muted mr-2">Color:</span>{color}
          Blue
        </div>
        <div className="font-size-lg text-accent pt-2">
          {`${currency}${calculatedPrice.dollar}`}.<small>{`${calculatedPrice.cent}`}</small>
        </div>
      </div>
    </div>
    <div
      className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left"
      style={{maxWidth: "9rem"}}
    >
      <div className="form-group mb-0">
        <label className="font-weight-medium" htmlFor="quantity1">
          Quantity
        </label>
        <input
          className="form-control"
          onChange={(e) => {
            if (e.target.value < 1) {
              e.target.value = 1;
            }
            ;
            dispatch(autoIncrementOrDecrement({id, quantity: e.target.value}))
          }}
          value={quantity}
          type="number"
          id="quantity1"
        />
      </div>
      <button className="btn btn-link px-0 text-danger" type="button" onClick={() => {
        dispatch(removeItem(id))
      }
      }>
        <i className="czi-close-circle mr-2"/>
        <span className="font-size-sm">Remove</span>
      </button>
    </div>
  </div>);
};

export default CartItem;
