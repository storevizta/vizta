import imageError from '../assets/imageError.svg';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { addToWishList, removeWishlist} from '../features/slices/FavSlices';

import { useAuth0 } from '@auth0/auth0-react';

import { useGetSubscribeAdsQuery } from '../features/query/MercadoPagoQuery';

import { useGetUserIdQuery } from '../features/query/UserQuery';

import { useSelector } from 'react-redux';

import { useEffect, useState } from 'react';

export const Featured = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetSubscribeAdsQuery();

  const isUserBanned = useGetUserIdQuery(localStorage.getItem('id'));

  const { wishlistsItems } = useSelector(value => value?.wishlists)

  const [isFavorite, setIsFavorite] = useState({})

  const makeFavorite = async () => {
    let oldFavorite = {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false
    }
    for (let i = 0; i < data?.length; i++) {
      let search = await wishlistsItems?.find(value => value?.id === data?.[i]?.id)
      if(search){
        oldFavorite[i] = true
      }
    }
    setIsFavorite(oldFavorite)
  }

  useEffect(() => {
    makeFavorite()
  }, [wishlistsItems, data])

  const addToWishHandler = (info) => {
    dispatch(addToWishList(info));
  };

  const removeWishlishHandler = (info, index) => {
    setIsFavorite({...isFavorite, [index]: false})
    dispatch(removeWishlist(info));
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  console.log(isFavorite);

  return (
    <>
      <div className="h-96">
        <div>Featured</div>
        {data && data === 0 ? (
          <p>No results found.</p>
        ) : (
          <div className="grid grid-cols-5">
            {data &&
              data.map((el, index) => (
                <div key={el.id} className="m-3">
                  <div className="bg-gray-600 h-90 hover:scale-110 duration-75">
                    <Link to={`/detail/${el.id}`} key={el.id}>
                      {!el.image ? (
                        <img
                        className="bg-white w-full h-60 object-contain"
                          src={el.image}
                          alt="image"
                        />
                      ) : (
                        <img
                          className="bg-white w-full h-60 object-contain"
                          src={el.image[0]}
                          alt="image"
                          onError={(e) => (e.target.src = `${imageError}`)}
                        />
                      )}
                      <div className="ml-4 mr-4 h-20 w-70 flex flex-col justify-center">
                        <p className='break-words font-bold'>{el.title}</p>
                      </div>
                    </Link>
                      
                    <div className='flex items-center w-full h-20'>
                      <div className='ml-4 w-6/12'>${el.price}</div>
                      <div className="mr-4 6/12">
                        {isAuthenticated && isUserBanned?.data?.access !== 'Banned' ? (
                          <div>
                            {isFavorite?.[index] === true ? (
                              <div onClick={() => removeWishlishHandler(el,index)} className="bg-red-700 hover:bg-red-500/90 text-white flex w-28 justify-center rounded gap-1  ml-5 h-8 items-center">
                              <img
                                className="h-3"
                                src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png"
                              />
                              <p>Remove</p>
                            </div>
                            ) :
                            <div onClick={() => addToWishHandler(el)} className="bg-zinc-600 hover:bg-red-500/90 text-white flex w-28 justify-center rounded gap-1 ml-5 h-8 items-center">
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
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};
