import { useGetAdByIdQuery } from '../features/query/AdsQuery';

import { Loading } from './Loading';

import { Error } from './Error';

import { Link } from 'react-router-dom';

export const DetailsAdvertisement = ({ adId }) => {
  const { data, error, isLoading } = useGetAdByIdQuery(adId);

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
      <p className="text-2xl">Advertisement: </p>
      <Link className="flex mt-5" to={`/detail/${data.id}`}>
        <img src={data.image[0]} className="w-24 rounded" />
        <p className="text-xl pl-5 my-auto">{data.title}</p>
      </Link>
    </div>
  );
};
