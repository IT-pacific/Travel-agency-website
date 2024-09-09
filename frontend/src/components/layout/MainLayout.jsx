import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../sections/index';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
