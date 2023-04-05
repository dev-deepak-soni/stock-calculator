import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name : 'LoginSlice',
    initialState : {
        isLogin : false
    },
    reducers : {
        isLogin : (state,action) => {
            state.isLogin = action.payload
        }
    }
})

export const {isLogin}  = LoginSlice.actions;
export default LoginSlice;