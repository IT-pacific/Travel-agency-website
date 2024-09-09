import React, { useState } from 'react';
import { PackageMain, PackageUpper } from '../components/sections/index';

const Package = () => {
  const [page, setPage] = useState(0);
  return (
    <>
      <PackageUpper />
      <PackageMain page={page} setPage={setPage} />
    </>
  );
};

export default Package;
