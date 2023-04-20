import React from 'react';

import { Link } from 'react-router-dom';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

import { useGetAdsQuery } from '../features/query/AdsQuery';

import { Card } from '../components/Card';

export const Cards = ({ userId }) => {
  const { data, error, isLoading } = useGetAdsQuery({
    page: 0,
    title: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    sort: '',
    discount: '',
    condition: '',
    size: 2000,
  });

  const userAds = data.ads.filter((ads) => ads.UserId === userId).slice(0, 4);

  console.log(userAds);

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  return (
    <div>
      {data && data.ads.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="grid grid-cols-4 pl-16 mt-5">
          {data &&
            userAds.map((el) => (
              <Link to={`/detail/${el.id}`} key={el.id}>
                <Card info={el} />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};
