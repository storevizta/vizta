import { useGetAdsQuery } from '../features/slices/adsSlice';

import { Navbar } from '../components/Navbar/NavBar';

import { Sidenav } from '../components/Sidenav';

import { Cards } from '../components/Cards';

import Loading from '../components/Loading';

export const Home = () => {
  const { data, error, isLoading } = useGetAdsQuery();

  if (isLoading) return <div><Loading/></div>;

  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <Navbar />
      <Sidenav />
      {data &&
        data?.map((el) => (
            <Cards info={el} />
        ))}
    </div>
  );
}
