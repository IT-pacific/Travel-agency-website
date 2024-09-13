import React, { useState } from 'react';
import { BlogMain, BlogUpper } from '../components/sections/index';

const Blog = () => {
  const [page, setPage] = useState(0);
  console.log(page);
  return (
    <>
      {/* <BlogUpper /> */}
      <BlogMain page={page} setPage={setPage} />
    </>
  );
};

export default Blog;
