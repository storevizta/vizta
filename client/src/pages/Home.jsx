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
  const page = useSelector((state) => state.filter.page);

  const title = useSelector((state) => state.filter.title);

  const category = useSelector((state) => state.filter.category);

  const minPrice = useSelector((state) => state.filter.minPrice);

  const maxPrice = useSelector((state) => state.filter.maxPrice);

  const sort = useSelector((state) => state.filter.sort);

  const discount = useSelector((state) => state.filter.discount);

  const condition = useSelector((state) => state.filter.condition);

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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Error />
      </div>
    );
  }

  return (
    <div className="h-full flex flex-grow bg-sky-950">
      <Sidebar />
      <div className="w-full p-5">
        <Featured />
        <Pagination items={data.length} />
        {data && data.ads.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {data &&
              data.ads.map((el) => (
                <Link to={`/detail/${el.id}`} key={el.id}>
                  <Card info={el} />
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
