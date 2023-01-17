import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/productSlice'
import userSlice from './slices/userSlice'
import newsSlice from './slices/newsSlice'

export const store = configureStore({
    reducer: {
        productsSlice, userSlice, newsSlice
    },
})