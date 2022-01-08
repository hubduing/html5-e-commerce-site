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
          <Route path="*" element={<Welcome/>}/>
        </Route>
      </Routes>
    </>
  );
};
function Welcome() {
  return (
    <div className="welcome">
      <h2>Welcome to my site</h2>
      <p>My name is Alexey and I am a beginner web developer</p>
      <button className="normal button"><Link to="/"><span>Go to home page</span></Link></button>
    </div>
  );
}