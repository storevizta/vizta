import { useParams } from 'react-router-dom';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

// import { useGetUserByIdQuery } from '../features/slices/userSlice';

export const Profile = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetUserByIdQuery(id);

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );

  if (error)
    return (
      <div>
        <Error />
      </div>
    );

  const { name, address } = data;

  return (
    <div>
      <p>{name}</p>
    </div>
  );
};
