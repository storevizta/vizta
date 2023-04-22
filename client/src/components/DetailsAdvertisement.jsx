import { useGetAdByIdQuery } from '../features/query/AdsQuery';

import { Loading } from './Loading';

import { Error } from './Error';

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

  console.log(data);

  return (
    <div>
      <p className="text-lg text-bold">Advertisement: </p>
      <div className="flex mt-5 ">
        <img src={data.image[0]} className="w-24 rounded" />
        <p className="text-lg pl-5 my-auto">{data.title}</p>
      </div>
    </div>
  );
};
