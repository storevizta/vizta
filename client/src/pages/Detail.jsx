import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

import { useGetAdByIdQuery } from '../features/query/AdsQuery';

import imageError from '../assets/imageError.svg';

export const Detail = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetAdByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  const {
    title,
    image,
    description,
    price,
    oldPrice,
    discount,
    condition,
    state,
    UserId,
  } = data;

  return (
    <>
      <div>Detail</div>
    </>
  );
};
