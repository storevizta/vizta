import { useParams } from 'react-router-dom';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

// import { useGetUserByIdQuery } from '../features/slices/userSlice';

export const Profile = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetUserByIdQuery(id);

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

  const { name, address } = data;

  return (
    <div>
      <p>{name}</p>
    </div>
  );
};
