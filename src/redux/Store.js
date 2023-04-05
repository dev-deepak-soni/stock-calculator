import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";

const Store = configureStore({
    reducer: {},
    Store : LoginSlice
})

export default Store;