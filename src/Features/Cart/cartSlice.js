// src/redux/cartSlice.js
import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        if (itemInCart.quantity + 1 <= itemInCart.stock) {
          itemInCart.quantity++;
        } else {
          alert("Out of stock");
        }
      } else {
        if (action.payload.stock > 0)
          state.cart.push({...action.payload, quantity: 1});
        else
          alert("Out of stock");
      }
    },
    addToCartByQuantity: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        if(itemInCart.quantity + +action.payload.quantity <= itemInCart.stock)
          itemInCart.quantity += +action.payload.quantity;
        else
          alert("Out of stock");
      } else {
        if (action.payload.stock >= +action.payload.quantity)
          state.cart.push({...action.payload, quantity: +action.payload.quantity});
        else
          alert("Out of stock");
      }
    },
    autoIncrementOrDecrement: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        if( action.payload.quantity <= item.stock)
          item.quantity = action.payload.quantity;
        else
          alert("Out of stock");
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  addToCartByQuantity,
  removeItem,
  autoIncrementOrDecrement
} = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;