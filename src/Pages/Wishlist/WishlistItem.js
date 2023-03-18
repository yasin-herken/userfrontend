import React from 'react';
import {Link} from "react-router-dom";
import {removeProduct} from "../../Features/Wishlist/wishlistReducer.js";
import {useDispatch} from "react-redux";

const WishlistItem = ({item}) => {
  const dispatch = useDispatch();
  return (<div className="d-sm-flex justify-content-between mt-lg-4 mb-4 pb-3 pb-sm-2 border-bottom">
    <div className="media media-ie-fix d-block d-sm-flex text-center text-sm-left">
      <Link
        className="d-inline-block mx-auto mr-sm-4" to={`/shop/product/${item.id}`} style={{width: '10rem'}}>
        <img src={item.image} alt="Product"/>
      </Link>
      <div className="media-body pt-2">
        <h3 className="product-title font-size-base mb-2">
          <Link to={`/shop/product/${item.id}`}>
            {item.title}
          </Link>
        </h3>
        <div className="font-size-sm"><span className="text-muted mr-2">Brand:</span>{item?.brand}</div>
        <div className="font-size-sm"><span className="text-muted mr-2">Color:</span>{item.color}</div>
        <div className="font-size-lg text-accent pt-2">
          ${item.price}
        </div>
      </div>
    </div>
    <div className="pt-2 pl-sm-3 mx-auto mx-sm-0 text-center">
      <button className="btn btn-outline-danger btn-sm" type="button" onClick={() => {
        dispatch(removeProduct(item.id));
      }}>
        <i className="czi-trash mr-2"/>Remove
      </button>
    </div>
  </div>);
};

export default WishlistItem;