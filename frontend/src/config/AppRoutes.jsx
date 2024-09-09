import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { DashboardLayout, MainLayout } from '../components/layout/index';
import {
  Blog,
  BlogPost,
  DashboardHome,
  Gallery,
  Home,
  Package,
  PackageInfo,
  DashboardLogin,
  DashboardUsers,
} from '../pages/index';

const AppRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/package" element={<Package />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/package/:id" element={<PackageInfo />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Route>
        <Route path="/dashboard-pannel" element={<DashboardLogin />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/users" element={<DashboardUsers />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRoutes;
