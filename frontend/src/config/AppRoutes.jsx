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
  DashboardCompany,
  CreatePackage,
  CreatePost,
  DashboardPackages,
  DashboardPosts,
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
          <Route path="/dashboard/company" element={<DashboardCompany />} />
          <Route path="/dashboard/package/create" element={<CreatePackage />} />
          <Route path="/dashboard/packages" element={<DashboardPackages />} />
          <Route path="/dashboard/post/create" element={<CreatePost />} />
          <Route path="/dashboard/posts" element={<DashboardPosts />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRoutes;
