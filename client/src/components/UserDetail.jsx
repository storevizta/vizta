import { useGetUserIdQuery } from '../features/query/UserQuery';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

export const UserDetail = (userId) => {
  const { id } = userId;

  const { data, error, isLoading } = useGetUserIdQuery(id);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  const { name, address, createdAt } = data;

  const created = createdAt.slice(0, 10);

  return (
    <div className="bg-white p-4">
      <p className="font-bold text-black">Seller: </p>
      <p className="text-sm pl-8 text-black">{name}</p>
      <p className="text-sm pl-8 text-black">{address}</p>
      <p className="text-sm pl-8 text-black">Joined Vizta {created}</p>
    </div>
  );
};
