import { useState } from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useGetAdsQuery } from '../features/slices/adsSlice';

import { Navbar } from '../components/Navbar';

import { Sidebar } from '../components/Sidebar';

import { Card } from '../components/Card';

import { Pagination } from '../components/Pagination';

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
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div>
          <Pagination />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
            {data &&
              data.map((el) => (
                <Link to={`/detail/${el.id}`} key={el.id}>
                  <Card info={el} />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
