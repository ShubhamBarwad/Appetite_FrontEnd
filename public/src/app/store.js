import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/dishSlice";

export default configureStore({
    reducer: {
        post: postReducer,
    },
})