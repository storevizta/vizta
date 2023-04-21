import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { useEffect, useState, useRef } from 'react';

export const Layout = () => {

  const [navbarHeight, setNavbarHeight] = useState(null)

  const ref = useRef(null)

  useEffect(() => {
    setNavbarHeight(ref.current.clientHeight);
  }, [])

  return (
    <div className='h-screen'>
      <div ref={ref}>
      <Navbar/>
      </div>
      <div style={{ height: `calc(100% - ${navbarHeight}px)` }}>
        <Outlet />
      </div>
    </div>
  );
};
