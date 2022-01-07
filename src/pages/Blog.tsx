import React from 'react';
import { Footer } from '../components/Footer';
import { PageHeader } from '../components/PageHeader';
import { BlogBox } from '../components/BlogBox';

export const Blog = () => {

  const srcImage = [
    "./img/blog/blog1.jpg",
    "./img/blog/blog2.jpg",
    "./img/blog/blog3.jpg",
    "./img/blog/blog4.jpg",
  ]
  //@ts-ignore
  return (
    <>
      <PageHeader
        classSection='page-header blog-header'
        title='#readmore'
        detail='Read all case studies about our products!'
      />
      <BlogBox source={srcImage}></BlogBox>
      <Footer/>
    </>
  );
};
