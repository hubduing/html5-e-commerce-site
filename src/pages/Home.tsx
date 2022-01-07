import React from 'react';
import { App } from '../App';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Product } from '../components/Product';
import { Banner } from '../components/Banner';
import { SmBanner } from '../components/SmBanner';
import { BannerInfo } from '../components/BannerInfo';
import { NewsLatter } from '../components/NewsLatter';
import { Footer } from '../components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from '../pages/Shop';
import { Blog } from '../pages/Blog';

export const Home = () => {
  return (
    <>
      <Hero/>
      <Features table={"features/"}/>
      <Product prod={0} table={"producs/"}/>
      <Banner/>
      <Product prod={1} table={"producs/"}/>
      <SmBanner/>
      <BannerInfo/>
      <NewsLatter/>
      <Footer/>
    </>
  );
};
