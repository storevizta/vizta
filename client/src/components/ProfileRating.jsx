import { useGetRatingByUserIdQuery } from '../features/query/RatingQuery';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export const ProfileRating = ({ userId }) => {
  const { data, error, isLoading } = useGetRatingByUserIdQuery(userId);

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

  let inicialValue = 0;

  const sumaRating = data.reduce(
    (acumulator, rating) => acumulator + rating.rating,
    inicialValue
  );
  const promedioRating = Math.round(sumaRating / data.length);

  console.log(data.length);

  return (
    <div className='overflow-auto'>
      <div className="flex gap-2 mb-5 w-170">
        {data.length !== 0 ? (
          <div className="flex flex-row items-center m-auto pt-3">
            <p className="h-auto text-lg font-bold">Rating Average:</p>

            <div className="rating rating-lg pl-5">
              <input
                type="radio"
                name="rating-8"
                value={1}
                className="mask mask-star-2 bg-orange-400"
                checked={1 === promedioRating}
              />
              <input
                type="radio"
                name="rating-8"
                value={2}
                className="mask mask-star-2 bg-orange-400"
                checked={2 === promedioRating}
              />
              <input
                type="radio"
                name="rating-8"
                value={3}
                className="mask mask-star-2 bg-orange-400"
                checked={3 === promedioRating}
              />
              <input
                type="radio"
                name="rating-8"
                value={4}
                className="mask mask-star-2 bg-orange-400"
                checked={4 === promedioRating}
              />
              <input
                type="radio"
                name="rating-8"
                className="mask mask-star-2 bg-orange-400"
                value={5}
                checked={5 === promedioRating}
              />
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex items-center gap-2 mb-5 m-auto justify-center">
        <p>Number of Ratings:</p>
        <p className="w-28 h-8 input font-bold text-center">{data.length}</p>
      </div>
      {data && data.length > 0 ? (
        data.map((rating) => (
          <div
            className="w-140 p-2 mt-5 flex flex-col gap-2 bg-gray-600 rounded-2xl ml-3"
            key={rating.id}
          >
            <p className="text-lg text-bold text-white">
              Comment: {rating.comment}
            </p>
            <p>Rating: {rating.rating}</p>
            <p>
              Date:
              {rating.createdAt
                .slice(0, 10)
                .replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1')}
            </p>
          </div>
        ))
      ) : (
        <p className="text-center">You don't have any Ratings</p>
      )}
    </div>
  );
};
