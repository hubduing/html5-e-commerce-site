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

export interface MainProps {
  app: App;
}

export const Main = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Features/>
      <Product/>
      <Banner/>
      <Product/>
      <SmBanner/>
      <BannerInfo/>
      <NewsLatter/>
      <Footer/>
    </>
  );
};