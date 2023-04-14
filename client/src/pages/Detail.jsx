import styled from 'styled-components';

import { useParams } from 'react-router-dom';

import { useGetAdByIdQuery } from '../features/slices/adsSlice';

export const Detail = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetAdByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;

  const { title } = data;

  return (
    <>
      <div>{title}</div>
    </>
  );
};
