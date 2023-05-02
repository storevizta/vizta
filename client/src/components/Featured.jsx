import imageError from '../assets/imageError.svg';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { addToWishList } from '../features/slices/FavSlices';

import { useAuth0 } from '@auth0/auth0-react';

import { useGetSubscribeAdsQuery } from '../features/query/MercadoPagoQuery';

export const Featured = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetSubscribeAdsQuery();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  const addToWishHandler = (info) => {
    dispatch(addToWishList(info));
  };

  return (
    <>
      <div className="h-96">
        <div>Featured</div>
        {data && data === 0 ? (
          <p>No results found.</p>
        ) : (
          <div className="grid grid-cols-5">
            {data &&
              data.map((el) => (
                <div key={el.id} className="m-3">
                  <div className="flex flex-col gap-1 bg-myBlue rounded-lg h-85">
                    <Link to={`/detail/${el.id}`} key={el.id}>
                      {!el.image ? (
                        <img
                          className="w-56 h-56 rounded object-cover"
                          src={el.image}
                          alt="image"
                        />
                      ) : (
                        <img
                          className="w-full h-56 rounded object-cover"
                          src={el.image[0]}
                          alt="image"
                          onError={(e) => (e.target.src = `${imageError}`)}
                        />
                      )}
                    </Link>
                    <div className="ml-4 mt-2 h-16 w-72 break-all">
                      {el.title}
                    </div>

                    <div className="ml-4 text-lg">${el.price}</div>

                    {isAuthenticated ? (
                      <div className="bg-zinc-600 hover:bg-red-500/90 text-white flex w-28 justify-center rounded m-2 ml-5 h-8 items-center">
                        <img
                          className="h-3"
                          src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png"
                        />
                        <button onClick={() => addToWishHandler(el)}>
                          Add favorite
                        </button>
                      </div>
                    ) : (
                      <div className="bg-zinc-600 hover:bg-red-500/90 text-white flex w-28 justify-center rounded m-2 ml-5 h-8 items-center">
                        <img
                          className="h-3"
                          src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png"
                        />
                        <button onClick={() => loginWithRedirect()}>
                          Add favorite
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};
