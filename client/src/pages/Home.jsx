import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useGetAdsQuery } from '../features/query/AdsQuery';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

import { Sidebar } from '../components/Sidebar';

import { Featured } from '../components/Featured';

import { Pagination } from '../components/Pagination';

import { Card } from '../components/Card';

export const Home = () => {
  const {
    page,
    title,
    category,
    minPrice,
    maxPrice,
    sort,
    discount,
    condition,
  } = useSelector((state) => state.filter);

  const { data, error, isLoading } = useGetAdsQuery({
    page,
    title,
    category,
    minPrice,
    maxPrice,
    sort,
    discount,
    condition,
  });

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  return (
    <div className="h-full flex flex-grow">
      <Sidebar />
      <div className="w-full p-5">
        <Featured />
        <Pagination items={data.length} />
        {data && data.ads.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <div className="grid grid-cols-5">
            {data &&
              data.ads.map((el) => (
                <Link className='m-3' to={`/detail/${el.id}`} key={el.id}>
                  <Card info={el} />
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
