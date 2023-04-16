import { useParams } from 'react-router-dom';

import { useGetAdByIdQuery } from '../features/slices/adsSlice';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

import { Navbar } from '../components/Navbar';

import imageError from '../assets/imageError.svg';

export const Detail = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetAdByIdQuery(id);

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

  const { image, title, description } = data;

  return (
    <div>
      <Navbar />
      <div className="p-5 flex outline">
        <img
          className="w-32"
          src={image}
          alt="image"
          onError={(e) => (e.target.src = `${imageError}`)}
        />

        <div className="w-64 outline">
          <div>{title}</div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
};
