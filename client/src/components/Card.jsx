import imageError from '../assets/imageError.svg';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { addToWishList } from '../features/slices/FavSlices';

import { useAuth0 } from '@auth0/auth0-react';

import { useGetUserIdQuery } from '../features/query/UserQuery';

// Cambie imageError por FakeIMG

export const Card = ({ info }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const user = useGetUserIdQuery(localStorage.getItem('id'));

  const dispatch = useDispatch();

  const { image, title, price } = info;

  const addToWishHandler = (info) => {
    dispatch(addToWishList(info));
  };

  return (
    <div className="bg-gray-600 h-90">
      <Link to={`/detail/${info.id}`} key={info.id}>
        {!image ? (
          <img
            className="w-56 h-56 rounded object-cover"
            src={image}
            alt="image"
          />
        ) : (
          <img
            className="w-full h-60 rounded object-cover"
            src={image[0]}
            alt="image"
            onError={(e) => (e.target.src = `${imageError}`)}
          />
        )}
        <div className="ml-4 mr-4 h-20 w-70 flex flex-col justify-center">
          <p className='break-words'>{title}</p>
        </div>
      </Link>
        
      <div className='flex items-center w-full h-20'>
        <div className='ml-4 w-6/12'>${price}</div>
        <div className="mr-4 6/12">
          {isAuthenticated && user?.data?.access !== 'Banned' ? (
            <div className="bg-zinc-600 hover:bg-red-500/90 text-white flex w-28 justify-center rounded  ml-5 h-8 items-center">
              <img
                className="h-3"
                src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png"
              />
              <button onClick={() => addToWishHandler(info)}>Add favorite</button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
