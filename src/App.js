import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import React from 'react';
import { useSelector } from 'react-redux';
import { fetchPosts } from './features/postSlice';
import { Post } from './components/post';
import { PostContainer } from './components/postcontainer';


function App() {
  const dispatch = useDispatch();
  useEffect(()=> {dispatch(fetchPosts())}, [])
  return (
    <div className="App">
      <PostContainer />
    </div>
  );
}

export default App;
