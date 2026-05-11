import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : JSON.parse(localStorage.getItem('userInfo')) ?? null
    },
    reducers : {
        // ! login Action
        loginAction : (state, action)=>{
            state.user = action.payload
        },
        // ! logout Action
        logoutAction: (state, action)=>{
            state.user = null
            localStorage.removeItem('userInfo')
        }
    }
})

export const {loginAction , logoutAction} = authSlice.actions
const authReducer = authSlice.reducer
export default authReducer
