import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    news: [], 
    newsDetail: null,
}

export const newsSlice = createSlice({
    name: 'newsSlice',
    initialState, 
    reducers : {
        getNews: (state, action) => {
            state.news = action.payload
        },
        getNewsDetail: (state, action) => {
            state.newsDetail = action.payload
        }
    }
})

export const {getNews, getNewsDetail} = newsSlice.actions

export default newsSlice.reducer