import React from 'react';
import WishlistItem from "./WishlistItem";
import {useSelector} from "react-redux";
import {selectWishlist} from "../../Features/Wishlist/wishlistReducer";

const Wishlist = () => {
  const wishlist = useSelector(selectWishlist);
  return (<div className="container pb-5 mb-2 mb-md-4 mt-2 pt-5">
    <div className="row">
      <section className="d-flex flex-column align-items-center justify-content-center h-100 w-100">
        {/* Wishlist*/}
        {/* Item*/}
        {wishlist.map((item) => {
          return <WishlistItem item={item}/>
        })}
      </section>
    </div>

  </div>);
};

export default Wishlist;