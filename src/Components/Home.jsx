import React from 'react';
import Intro from './home/Intro';
import Vantagens from './home/vantagens';
import Qualidade from './home/Qualidade';
import BlogSection from './home/BlogSection';
import Reviews from './home/Reviews';

const Home = () => {
  return (
    <div>
      <Intro />
      <Vantagens />
      <Qualidade />
      <BlogSection />
      <Reviews />
    </div>
  );
};

export default Home;
