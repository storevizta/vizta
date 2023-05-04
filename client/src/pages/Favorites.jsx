import React from 'react';
import { useSelector } from 'react-redux';
import { Favorite } from '../components/Favorite';

export const Favorites = () => {
  const { wishlistsItems } = useSelector((state) => state?.wishlists);

  return (
    <div className='m-10'>
      <div>
        <div className="container mx-auto p-6 bg-myBlue">
          <h1 className='text-5xl font-bold text-center'>Favorites</h1>
          <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center">
            {wishlistsItems.length > 0 ? wishlistsItems?.map((wishlist) => {
              return <Favorite key={wishlist?._id} info={wishlist} />;
            }): null}
          </div>
          {wishlistsItems.length === 0 ? (
            <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold'>You have no favorites, click in the button Add Favorites to have anything here</h1>
            <p>Something like this:</p>
            <div className="bg-zinc-600 hover:bg-red-500/90 text-white flex w-28 justify-center rounded gap-1 ml-5 h-8 items-center cursor-pointer">
              <img
                className="h-3"
                src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png"
              />
              <p>Add favorite</p>
            </div>
          </div>
          ): null}
        </div>
      </div>
    </div>
  );
};
