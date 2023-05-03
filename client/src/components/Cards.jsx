import React from 'react';

import { Link } from 'react-router-dom';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

import { useGetUserAdsQuery } from '../features/query/UserQuery';

import { Card } from '../components/Card';

export const Cards = ({ userId }) => {
  const { data, error, isLoading } = useGetUserAdsQuery(userId);

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  let userAds = data;

  if (userAds.length > 4) {
    userAds = data.slice(0, 4);
  }

  return (
    <div>
      {data && data.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="grid grid-cols-6 pl-16 mt-5 gap-4">
          {data &&
            userAds.map((el) => (
              <div key={el.id}>
                <Card info={el} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
