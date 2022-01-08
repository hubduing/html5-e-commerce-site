import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Product } from '../components/Product';
import { Banner } from '../components/Banner';
import { SmBanner } from '../components/SmBanner';
import { BannerInfo } from '../components/BannerInfo';
import { NewsLatter } from '../components/NewsLatter';
import { Footer } from '../components/Footer';


export const Home = () => {
  return (
    <>
      <Hero/>
      <Features table='features/'/>
      <section className='product section-p1'>
        <h2>Featured Products</h2>
        <p>Summer collaction new morden design</p>
        <Product prod={0} table={'producs/'}/>
      </section>
      <Banner/>
      <section className='product section-p1'>
        <h2>New Arrivals</h2>
        <p>Summer Collaction New Morden Design</p>
        <Product prod={1} table={'producs/'}/>
      </section>
      <SmBanner/>
      <BannerInfo/>
      <NewsLatter/>
      <Footer/>
    </>
  );
};
