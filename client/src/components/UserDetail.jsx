import { useGetUserIdQuery } from '../features/query/UserQuery';

import { useGetRatingByUserIdQuery } from '../features/query/RatingQuery';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

import { Link } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

export const UserDetail = (userId) => {
  const { id } = userId;

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const { data, error, isLoading } = useGetUserIdQuery(id);

  const {
    data: dataRating,
    errorRating,
    isLoadingRating,
  } = useGetRatingByUserIdQuery(id);

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

  if (errorRating) {
    return <div>Error</div>;
  }

  if (isLoadingRating) {
    return <div>Is Loading</div>;
  }

  let inicialValue = 0;

  const sumaRating = dataRating?.reduce(
    (acumulator, rating) => acumulator + rating.rating,
    inicialValue
  );
  const promedioRating = Math.round(sumaRating / dataRating?.length);

  const { name, address, createdAt } = data;

  const created = createdAt
    .slice(0, 10)
    .replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1');

  return (
    <div className="bg-gray-600 p-4 my-5">
      <p className="font-bold">Seller: </p>

      <div className="flex flex-col gap-1">
        <p className="text-sm pl-8">{name}</p>

        <div className="flex gap-2">
          <div className="flex flex-row pl-8 pt-1 items-center">
            <p className="text-sm">Rating Average:</p>

            <div className="rating rating-sm pl-2">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                checked={1 === promedioRating}
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                checked={2 === promedioRating}
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                checked={3 === promedioRating}
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                checked={4 === promedioRating}
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                checked={5 === promedioRating}
              />
            </div>
          </div>
        </div>

        <div className="text-sm pl-8">
          {address && address.length > 0 ? (
            <div>
              <p className="inline">{address[0]?.country}, </p>
              <p className="inline">{address[0]?.province}, </p>
              <p className="inline">{address[0]?.municipality}</p>
            </div>
          ) : (
            <p>Address is undefined</p>
          )}
        </div>
        <p className="text-sm pl-8">Joined Vizta {created}</p>
      </div>

      {isAuthenticated ? (
        <Link className="justify-end" to={`/userProfile/${id}`}>
          <p className="text-sm text-right border p-1 px-2 rounded w-fit border-black mt-2 hover:font-bold">
            See more data about {name}
          </p>
        </Link>
      ) : null}
    </div>
  );
};
