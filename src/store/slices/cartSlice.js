import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState, 
    reducers : {
      addToCart: (state, action) => {
        const isItemInCart = state.cartItems?.some(prod => prod._id === action.payload._id)
        if(isItemInCart) {
          action.payload.quantity +=1;
          console.log(action.payload.quantity)
        }else {
          state.cartItems.push(action.payload);
          console.log(isItemInCart)
        }
    }
  }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer