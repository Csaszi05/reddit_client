import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import React from "react";


export const fetchCommentById = createAsyncThunk('comment/fetchCommentById', async(userid) => {
    const response = await fetch(`https://www.reddit.com/comments/${userid}.json`);
    const json = await response.json();
    return json;
});

const commentSlice = createSlice({
    name: 'comment',
    initialState: {
    comments: [],
    commentds: [],
    isloading: false,
    iserror: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchCommentById.pending, (state) => {
            state.isloading = true;
          })
          .addCase(fetchCommentById.fulfilled, (state, action) => {
            state.isloading = false;
            state.comments = action.payload[1].data.children;
            state.commentds = action.payload[0].data.children[0].data;
          })
          .addCase(fetchCommentById.rejected, (state) => {
            state.isloading = false;
            state.iserror = true;
          });
      }
});

export default commentSlice.reducer;