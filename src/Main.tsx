import React from 'react';
import { Header } from './components/Header';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Blog } from './pages/Blog';
import {Welcome} from './pages/Welcome';
import {About} from "./pages/About";
import {Footer} from "./components/Footer";
import {Contact} from "./pages/Contact";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<Welcome/>}/>
        </Route>
      </Routes>
      <Footer/>
    </>
  );
};

