import { useState } from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useGetAdsQuery } from '../features/slices/adsSlice';

import { Navbar } from '../components/Navbar';

import { Sidebar } from '../components/Sidebar';

import { Card } from '../components/Card';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

export const Home = () => {
  const page = useSelector((state) => state.filter.page);

  const size = useSelector((state) => state.filter.size);

  const title = useSelector((state) => state.filter.title);

  const category = useSelector((state) => state.filter.category);

  const minPrice = useSelector((state) => state.filter.minPrice);

  const maxPrice = useSelector((state) => state.filter.maxPrice);

  const sort = useSelector((state) => state.filter.sort);

  const discount = useSelector((state) => state.filter.discount);

  const { data, error, isLoading } = useGetAdsQuery({
    page,
    size,
    title,
    category,
    minPrice,
    maxPrice,
    sort,
    discount,
  });

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );

  if (error)
    return (
      <div>
        <Error />
      </div>
    );

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-screen grid grid-cols-[auto-fit_minmax(250px,_250px)]">
          {data &&
            data?.map((el) => (
              <Link to={`/detail/${el.id}`} key={el.id}>
                <Card info={el} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
