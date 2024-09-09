import React from 'react';
import { FadeLoader, ScaleLoader } from 'react-spinners';

const Spinner = ({ loading }) => {
  const override = {
    display: 'inline-block',
    margin: '0 auto',
  };
  return (
    <ScaleLoader
      color={'white'}
      loading={loading}
      cssOverride={override}
      height={20}
      width={4}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
