import React from "react";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=> {
    const response = await fetch('https://www.reddit.com/r/headphoneadvice.json');
    const json = await response.json();
    return json;
});


const PostSlice = createSlice
({
name: 'posts',
initialState: {
    posts: [],
    isloading: false,
    iserror: false
},
reducers: {},
extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isloading = false;
        state.posts = action.payload.data.children;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isloading = false;
        state.iserror = true;
      });
  }
});

export default PostSlice.reducer;