import {createSlice} from "@reduxjs/toolkit";
import {toast} from 'react-toastify';

export const wishlistSlice = createSlice({
  name: "wishlist", initialState: {
    wishlist: [],
  }, reducers: {
    addToWishlist: (state, action) => {
      const itemInWishlist = state.wishlist.find((item) => item.id === action.payload.id);
      if (itemInWishlist) {
        toast.error("Item already in wishlist", {
          toastId: "alreadyInWishlist"
        })
      } else {
        state.wishlist.push({...action.payload});
        toast.success("Item added to wishlist")
      }
    }, removeProduct: (state, action) => {
      const removeItem = state.wishlist.filter((item) => item.id !== action.payload);
      state.wishlist = removeItem;
      toast.success("Item removed from wishlist")
    },
  }
});
export default wishlistSlice.reducer;

export const {
  addToWishlist, removeProduct
} = wishlistSlice.actions;

export const selectWishlist = (state) => state.wishlist.wishlist;