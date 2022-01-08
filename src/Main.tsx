import React from 'react';
import { Header } from './components/Header';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Blog } from './pages/Blog';

export const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="about" element={<Home/>}/>
          <Route path="contact" element={<Home/>}/>

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch/>}/>
        </Route>
      </Routes>
    </>
  );
};

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
