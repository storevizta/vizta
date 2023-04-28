import { useGetUserIdQuery } from '../features/query/UserQuery';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

import { Link } from 'react-router-dom';

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

  const created = createdAt
    .slice(0, 10)
    .replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1');

  return (
    <div className="bg-white p-4">
      <p className="font-bold text-black">Seller: </p>
      <p className="text-sm pl-8 text-black">{name}</p>
      <p className="text-sm pl-8 text-black">
        {address[0].street} {address[0].number}
      </p>
      <p className="text-sm pl-8 text-black">Joined Vizta {created}</p>

      <Link to={`/reportUser/${id}`}>
        <p className="font-bold border mt-2 p-1 rounded w-fit bg-black text-sm text-right">
          Report User
        </p>
      </Link>
    </div>
  );
};
