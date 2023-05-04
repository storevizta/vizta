import imageError from '../assets/imageError.svg';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { addToWishList, removeWishlist } from '../features/slices/FavSlices';

import { useAuth0 } from '@auth0/auth0-react';

import { useGetUserIdQuery } from '../features/query/UserQuery';

import { useSelector } from 'react-redux';

import { useEffect, useState } from 'react';

// Cambie imageError por FakeIMG

export const Card = ({ info }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const user = useGetUserIdQuery(localStorage.getItem('id'));

  const { wishlistsItems } = useSelector(value => value.wishlists)

  const dispatch = useDispatch();

  const { image, title, price } = info;

  const addToWishHandler = () => {
    dispatch(addToWishList(info));
  };

  const removeWishlishHandler = () => {
    setIsFavorite(false)
    dispatch(removeWishlist(info));
  };

  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const filter = wishlistsItems?.find(value => value?.id === info?.id)
    if(filter){
      setIsFavorite(true)
    }else{
      setIsFavorite(false)
    }
  }, [wishlistsItems, isFavorite, info])


  return (
    <div className="bg-gray-600 h-90 hover:scale-110 duration-75">
      <Link to={`/detail/${info.id}`} key={info.id}>
        {!image ? (
          <img
          className="bg-white w-full h-60 object-contain"
            src={image}
            alt="image"
          />
        ) : (
          <img
            className="bg-white w-full h-60 object-contain"
            src={image[0]}
            alt="image"
            onError={(e) => (e.target.src = `${imageError}`)}
          />
        )}
        <div className="ml-4 mr-4 h-20 w-70 flex flex-col justify-center">
          <p className='break-words font-bold'>{title}</p>
        </div>
      </Link>
        
      <div className='flex items-center w-full h-20'>
        <div className='ml-4 w-6/12'>${price}</div>
        <div className="mr-4 6/12">
          {isAuthenticated && user?.data?.access !== 'Banned' ? (
            <div>
              {isFavorite === true ? (
                <div onClick={() => removeWishlishHandler()} className="bg-red-700 hover:bg-red-500/90 text-white flex w-28 justify-center rounded gap-1  ml-5 h-8 items-center">
                <img
                  className="h-3"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png"
                />
                <p>Remove</p>
              </div>
              ) :
              <div onClick={() => addToWishHandler()} className="bg-zinc-600 hover:bg-red-500/90 text-white flex w-28 justify-center rounded gap-1 ml-5 h-8 items-center">
              <img
                className="h-3"
                src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png"
              />
              <p>Add favorite</p>
            </div>
              }
            </div>
          ) : null}

        </div>
      </div>
    </div>
  );
};
