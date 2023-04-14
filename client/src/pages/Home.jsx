import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { useGetAdsQuery } from '../features/slices/adsSlice';

import { Navbar } from '../components/Navbar/NavBar';

import { Sidenav } from '../components/Sidenav';

import { Cards } from '../components/Cards';

export const Home = () => {
  const { data, error, isLoading } = useGetAdsQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <Sidenav />
      {data &&
        data?.map((el) => (
          <Link to={`/detail/${el.id}`} key={el.id}>
            <Cards info={el} />
          </Link>
        ))}
    </div>
  );
};
