import { configureStore } from "@reduxjs/toolkit";
import postreducer from "./features/postSlice";
import commentreducer from "./features/comment";

export const store = configureStore({
    reducer: {
        posts: postreducer,
        comment: commentreducer
    }
})