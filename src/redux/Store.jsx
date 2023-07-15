import { configureStore } from "@reduxjs/toolkit";
import { AppReducer } from "./Reducers";

export const store=configureStore({
    reducer:{
        AppReducer,
    },
});