import React from 'react';
import { App } from './App';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Product } from './components/Product';
import { Banner } from './components/Banner';
import { SmBanner } from './components/SmBanner';
import { BannerInfo } from './components/BannerInfo';
import { NewsLatter } from './components/NewsLatter';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './pages/Home';
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
