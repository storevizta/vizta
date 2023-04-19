import { Outlet } from 'react-router-dom';

import { Navbar } from '../components/Navbar';

export const Layout = () => {
  return (
    <>
      <div className="h-screen overflow-hidden">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};
