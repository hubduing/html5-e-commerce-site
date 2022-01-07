import React  from 'react';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Blog } from './pages/Blog';

export const Main = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
