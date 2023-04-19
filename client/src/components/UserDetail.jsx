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
    <div className="bg-white pb-4 pt-0.5">
      <p className="font-bold mt-10 pl-5 text-black">Seller: </p>
      <p className="text-sm pl-8 text-black">{name}</p>
      <p className="text-sm pl-8 text-black">{address}</p>
      <p className="text-sm pl-8 text-black">Joined Vizta {created}</p>
    </div>
  );
};
