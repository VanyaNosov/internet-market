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
        const currentProduct = state.cartItems.find((item) => item._id === action.payload._id)
        if(isItemInCart) {
          currentProduct.quantity +=1;
        }else {
          state.cartItems.push({...action.payload, quantity: 1});
        }
      },
      increment: (state, action) => {
        const currentProduct = state.cartItems.find((item) => item._id === action.payload._id)
        currentProduct.quantity += 1
        console.log(action.payload)
      },
      decrement: (state, action) => {
        const currentProduct = state.cartItems.find((item) => item._id === action.payload._id)
        currentProduct.quantity -= 1
        console.log(action.payload)
      },
      clearProduct: (state, action) => {
        state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id)
      }
  }
})

export const {addToCart, increment, decrement, clearProduct} = cartSlice.actions

export default cartSlice.reducer