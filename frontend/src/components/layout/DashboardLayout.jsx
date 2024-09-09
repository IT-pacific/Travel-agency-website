import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardHeader, DashboradSidebar } from '../sections/index';

const DashboardLayout = () => {
  const [mobSidebarOpen, setMobSidebarOpen] = useState(true);
  return (
    <div className="h-screen grid grid-cols-5 overflow-hidden">
      <DashboradSidebar className="hidden col-span-1" />
      <main className="col-span-4">
        <DashboardHeader
          sidebarOpen={mobSidebarOpen}
          setSidebarOpen={setMobSidebarOpen}
        />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
