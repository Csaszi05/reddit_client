import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import React from 'react';
import { useSelector } from 'react-redux';
import { fetchPosts } from './features/postSlice';
import { Post } from './components/post';
import { PostContainer } from './components/postcontainer';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { SinglePost } from './pages/singlepost';


function App() {
  const dispatch = useDispatch();
  useEffect(()=> {dispatch(fetchPosts())}, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PostContainer></PostContainer>} />
        <Route path=':id' element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
