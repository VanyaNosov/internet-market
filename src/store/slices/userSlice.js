import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null, 
    
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState, 
    reducers : {
        saveUser: (state, action) => {
            state.user = action.payload
            localStorage.setItem("user", JSON.stringify(action.payload))
        },
        removeUser: (state, action) => {
            state.user = null;
            localStorage.removeItem("user")
        }
    }
})

export const {saveUser, removeUser} = userSlice.actions

export default userSlice.reducer