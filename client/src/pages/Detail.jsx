import { useParams } from 'react-router-dom';

import { useGetAdByIdQuery } from '../features/slices/adsSlice';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

import { Navbar } from "../components/Navbar";

import { UserDetail } from '../components/UserDetail';

export const Detail = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetAdByIdQuery(id);

  if (isLoading)
  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );

  if (error)
  if (error)
    return (
      <div>
        <Error />
      </div>
    );

  const { title, image, description, stock, price, oldPrice, discount } = data;

  return (
    <>
      <div key={id}>
        {/* <img src={image} alt="image not found" /> */}
        <h1>{title}</h1>
        <h2>{price}</h2>
        <h3>{stock}</h3>
        <h3>{oldPrice}</h3>
        <h3>{discount}</h3>
        <h4>{description}</h4>
      </div>
    </>
  );
};
