import React from 'react';
import Intro from './home/Intro';
import Vantagens from './home/vantagens';
import Qualidade from './home/Qualidade';
import BlogSection from './home/BlogSection';

const Home = () => {
  return (
    <div>
      <Intro />
      <Vantagens />
      <Qualidade />
      <BlogSection />
    </div>
  );
};

export default Home;
