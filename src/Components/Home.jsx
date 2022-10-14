import React from 'react';
import Intro from './home/Intro';
import Vantagens from './home/vantagens';
import Qualidade from './home/Qualidade';
import BlogSection from './home/BlogSection';
import Reviews from './home/Reviews';
import Numeros from './sections/numeros';
import Contate from './sections/contate';

const Home = () => {
  return (
    <div>
      <Intro />
      <Vantagens />
      <Qualidade />
      <BlogSection />
      <Reviews />
      <Numeros />
      <Contate />
    </div>
  );
};

export default Home;
