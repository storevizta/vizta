import { useSelector } from 'react-redux';

import { useGetAdsQuery } from '../features/query/AdsQuery';

import { Sidebar } from '../components/FilterSidebar';

import { Featured } from '../components/Featured';

import { Pagination } from '../components/Pagination';

import { Cards } from '../components/Cards';

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

  const ads = data?.ads || [];

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <>
      <div className="h-full flex flex-col">
        <div className="flex flex-grow  ">
          <Sidebar />
          <div className="w-full">
            <Featured />
            <Pagination items={data.count} />
            {ads.length ? <Cards ads={ads} /> : <p>No results found.</p>}
          </div>
        </div>
      </div>
    </>
  );
};
