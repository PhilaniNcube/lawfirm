import Head from 'next/head';
import { Fragment } from 'react';
import About from '../Components/Homepage/About';
import Features from '../Components/Homepage/Features';
import Hero from '../Components/Homepage/Hero';
import Newsletter from '../Components/Homepage/Newsletter';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Features />
      <About />
      <Newsletter />
    </Fragment>
  );
}
