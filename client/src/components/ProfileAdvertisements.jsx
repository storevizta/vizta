import { useGetUserAdsQuery } from '../features/query/UserQuery';
import { Card } from './Card';
import { Link } from 'react-router-dom';
import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

export const ProfileAdvertisements = ({ userId }) => {
  const { data, error, isLoading } = useGetUserAdsQuery(userId);

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

  const activeAds = data.filter((ad) => ad.state === 'Active');
  const soldAds = data.filter((ad) => ad.state === 'Sold');
  const pausedAds = data.filter((ad) => ad.state === 'Paused');

  return (
    <div>
      <div className="pl-7 pt-5">
        <h2 className="text-lg text-bold pb-5">Active Advertisements: </h2>
        <div className="grid grid-cols-5 gap-5">
          {activeAds.length ? (
            activeAds.map((ad) => (
              <Link to={`/detail/${ad.id}`}>
                <Card info={ad} />
              </Link>
            ))
          ) : (
            <p>You have no active advertisement </p>
          )}
        </div>
      </div>

      <div className="pl-7 pt-5">
        <h2 className="text-lg text-bold pb-5">Paused Advertisements: </h2>
        <div className="grid grid-cols-5 gap-5">
          {pausedAds.length ? (
            pausedAds.map((ad) => (
              <Link to={`/detail/${ad.id}`}>
                <Card info={ad} />
              </Link>
            ))
          ) : (
            <p>You have no paused advertisement </p>
          )}
        </div>
      </div>

      <div className="pl-7 pt-5">
        <h2 className="text-lg text-bold pb-5">Sold Advertisements: </h2>
        <div className="grid grid-cols-5 gap-5">
          {soldAds.length ? (
            soldAds.map((ad) => (
              <Link to={`/detail/${ad.id}`}>
                <Card info={ad} />
              </Link>
            ))
          ) : (
            <p>You have no sold advertisement </p>
          )}
        </div>
      </div>
    </div>
  );
};
