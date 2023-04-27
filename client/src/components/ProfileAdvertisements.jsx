import { useGetUserAdsQuery } from '../features/query/UserQuery';
import { Card } from './Card';
import { Link } from 'react-router-dom';
import { StateAdvertisement } from '../components/StateAdvertisement';
import { Loading } from '../components/Loading';
import { AdsReports } from './AdsReports';
import { DeleteAdvertisement } from './DeleteAdvertisement';

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
        <div className="">
          {activeAds.length ? (
            activeAds.map((ad) => (
              <div className="border-b-2 pb-5">
                <div className="flex flex-row pt-3">
                  <Link className="flex" to={`/detail/${ad.id}`}>
                    <img
                      className="w-24 rounded"
                      src={ad.image[0]}
                      alt="image"
                    />
                  </Link>

                  <p className="font-bold pl-5 my-auto pr-14">{ad.title}</p>

                  <Link
                    className="my-auto p-3 rounded bg-gray-600 text-white"
                    to={`/update/${ad.id}`}
                  >
                    <p>Update</p>
                  </Link>

                  <StateAdvertisement ad={ad} />
                </div>
                <DeleteAdvertisement adId={ad.id} />
                <AdsReports adId={ad.id} />
              </div>
            ))
          ) : (
            <p>You have no active advertisement </p>
          )}
        </div>
      </div>
      <div className="divider"></div>
      <div className="pl-7 pt-5">
        <h2 className="text-lg text-bold pb-5">Paused Advertisements: </h2>
        <div className="">
          {pausedAds.length ? (
            pausedAds.map((ad) => (
              <div className="flex flex-row justify-between pb-5">
                <Link className="flex" to={`/detail/${ad.id}`}>
                  <img className="w-24 rounded" src={ad.image[0]} alt="image" />
                </Link>

                <p className="font-bold pl-5 my-auto pr-14">{ad.title}</p>

                <Link
                  className="my-auto p-3 rounded bg-gray-600 text-white"
                  to={`/update/${ad.id}`}
                >
                  <p>Update</p>
                </Link>

                <StateAdvertisement ad={ad} />
              </div>
            ))
          ) : (
            <p>You have no paused advertisement </p>
          )}
        </div>
      </div>
      <div className="divider"></div>
      <div className="pl-7 pt-5">
        <h2 className="text-lg text-bold pb-5">Sold Advertisements: </h2>
        <div className="">
          {soldAds.length ? (
            soldAds.map((ad) => (
              <div className="flex flex-row pb-5">
                <Link className="flex" to={`/detail/${ad.id}`}>
                  <img className="w-24 rounded" src={ad.image[0]} alt="image" />
                </Link>

                <p className="font-bold pl-5 my-auto pr-14">{ad.title}</p>

                <Link
                  className="my-auto p-3 rounded bg-gray-600 text-white"
                  to={`/update/${ad.id}`}
                >
                  <p>Update</p>
                </Link>

                <StateAdvertisement ad={ad} />
              </div>
            ))
          ) : (
            <p>You have no sold advertisement </p>
          )}
        </div>
      </div>
    </div>
  );
};
