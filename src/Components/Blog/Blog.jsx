import React from 'react';
import Subheader from '../Utils/Subheader';
import Inscrever from '../sections/Inscrever';
import BlogContainer from './BlogContainer';

const Blog = () => {
  return (
    <div>
      <Subheader HeaderTitle={'Blog'} />
      <BlogContainer />
      <Inscrever />
    </div>
  );
};

export default Blog;
