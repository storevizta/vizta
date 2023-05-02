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

      <div className="flex flex-col">
        <p className="text-sm pl-8 text-black">{name}</p>

        <p className="text-sm pl-8 text-black">
          {address ? (
            <div>
              <p>{address[0].country}</p>
              <p>{address[0].province}</p>
              <p>{address[0].municipality}</p>
            </div>
          ) : (
            <p>Address is undefined</p>
          )}
        </p>
        <p className="text-sm pl-8 text-black">Joined Vizta {created}</p>
      </div>

      <Link classname="justify-end" to={`/userProfile/${id}`}>
        <p className="text-black text-sm text-right border p-1 px-2 rounded w-fit border-black mt-2 hover:font-bold">
          See more data about {name}
        </p>
      </Link>
    </div>
  );
};
