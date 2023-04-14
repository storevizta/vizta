import { Link } from 'react-router-dom';

import { useGetAdsQuery } from '../features/slices/adsSlice';

import { Navbar } from '../components/Navbar';

import { Sidebar } from '../components/Sidebar';

import { Cards } from '../components/Cards';

import Loading from '../components/Loading';

export const Home = () => {
  const queryParams = new URLSearchParams(window.location.search);

  const title = queryParams.get('title');

  const category = queryParams.get('category');

  const { data, error, isLoading } = useGetAdsQuery({ title, category});

  if (isLoading) return <div><Loading/></div>;

  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div>
          {data &&
            data?.map((el) => (
              <Link to={`/detail/${el.id}`} key={el.id}>
                <Cards info={el} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
