import styled from 'styled-components';

import { useGetAdsQuery } from '../features/slices/adsSlice';

import { Navbar } from '../components/Navbar/NavBar';

import { SideNav } from '../components/Sidenav/Sidenav';

export const Home = () => {
  const { data, error, isLoading } = useGetAdsQuery();

  console.log(data);
  return (
    <div>
      <Navbar />
      <SideNav />
      Home
    </div>
  );
};
