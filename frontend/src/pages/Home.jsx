import React from 'react';
import {
  Contact,
  Hero,
  Latests,
  Partners,
  Services,
  TopDestination,
  WhoWeAre,
} from '../components/sections/index';

const Home = () => {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <Services />
      <TopDestination />
      <Latests />
      <Contact />
      <Partners />
    </main>
  );
};

export default Home;
