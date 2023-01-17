import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [], 
    productDetail: null,
}

export const productsSlice = createSlice({
    name: 'productsSlice',
    initialState, 
    reducers : {
        getProducts: (state, action) => {
            state.products = action.payload
        },
        getProductDetail: (state, action) => {
            state.productDetail = action.payload
        }
    }
})

export const {getProducts, getProductDetail} = productsSlice.actions

export default productsSlice.reducer