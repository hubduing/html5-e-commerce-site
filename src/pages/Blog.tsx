import React from 'react';
import { Footer } from '../components/Footer';
import { PageHeader } from '../components/PageHeader';
import { BlogBox } from '../components/BlogBox';
import {SRCIMAGE} from '../components/fetch';

export const Blog = () => {


  //@ts-ignore
  return (
    <>
      <PageHeader
        classSection='page-header blog-header'
        title='#readmore'
        detail='Read all case studies about our products!'
      />
      <BlogBox source={SRCIMAGE}></BlogBox>
      <Footer/>
    </>
  );
};
