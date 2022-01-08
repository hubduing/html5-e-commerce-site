import React from 'react';
import { Product } from '../components/Product';
import { NewsLatter } from '../components/NewsLatter';
import { Footer } from '../components/Footer';
import { PageHeader } from '../components/PageHeader';
import { Pagination } from '../components/Pagination';

export const Shop = () => {
  return (
    <>
      <PageHeader 
        classSection='page-header'
          title="#stayhome" 
          detail="Save more with coupons & up to 70% off!" 
        />
      <section className="product section-p1">
        <h2>Featured Products</h2>
        <p>Summer collection new modern design</p>
        <Product prod={0} table={"producs/"}/>
        <Product prod={1} table={"producs/"}/>
      </section>
      <Pagination/>
      <NewsLatter/>
      <Footer/>
    </>
  );
};
