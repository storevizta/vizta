import { Link, useParams, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { useAuth0 } from '@auth0/auth0-react';

import { setTitle, resetHome } from '../features/slices/FilterSlice';

import { Profile } from '../components/Profile';

import { LogOutButton } from '../components/LogOutButton';

import { LoginButton } from '../components/LoginButton';

import { useGetUserIdQuery } from '../features/query/UserQuery';

import imageError from '../assets/imageError.svg';

import { useEffect, useState } from 'react';

import verificationSymbol from '../assets/verification-symbol.png';

export const Navbar = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const location = useLocation();

  const { wishlistsItems } = useSelector((state) => state?.wishlists);

  const searchLanding = location.pathname !== `/`;

  const searchDetail = location.pathname !== `/detail/${id}`;

  const searchProfile = location.pathname !== `/profile`;

  const searchPost = location.pathname !== '/post';

  const favoriteLanding = location.pathname !== `/`;

  const favoriteProfile = location.pathname !== '/profile';

  const favoritePost = location.pathname !== '/post';

  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const handleHome = () => {
    dispatch(resetHome());
  };

  const handlerChange = (e) => {
    const newTitle = e.target.value;
    dispatch(setTitle(newTitle));
  };

  const idUser = localStorage.getItem('id');

  const { data, error, isLoading } = useGetUserIdQuery(idUser);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <div className="bg-zinc-700">
      <nav className="flex w-full justify-between px-10 py-5 items-center">
        <Link to="/home" className="w-1/13">
          <h1
            className="flex justify-center text-white text-3xl font-bold uppercase tracking-widest"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
              letterSpacing: '2px',
            }}
            onClick={handleHome}
          >
            VIZTA
          </h1>
        </Link>

        {searchProfile && searchLanding && searchDetail && searchPost && (
          <div>
            <input
              className="bg-gray-600 px-3 py-2 rounded-full w-140 transition-all duration-500 outline-none hover:bg-white hover:border-white"
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              onChange={handlerChange}
            />
          </div>
        )}

        <div className="flex">
          <ul className="flex items-center">
            {favoriteLanding &&
              favoriteProfile &&
              favoritePost &&
              data?.access !== 'Banned' && (
                <li className="font-semibold text-white mr-4 ">
                  {isAuthenticated ? (
                    // <Link to="/favorite">
                    //   <button className="hover:scale-105 font-bold">
                    //     <div className="flex items-center">
                    //       <span className="mr-2">{wishlistsItems.length}</span>
                    //       <img
                    //         className="h-8"
                    //         src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png"
                    //         alt="Icono de estrella"
                    //       />
                    //     </div>
                    //   </button>
                    // </Link>
                    <Link to="/favorite">
                      <div className="indicator flex justify-center items-center hover:scale-105">
                        <span className="indicator-item badge">
                          {wishlistsItems.length}
                        </span>
                        <img
                          className="h-8"
                          src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png"
                          alt="Icono de estrella"
                        />
                      </div>
                    </Link>
                  ) : (
                    <button
                      className="hover:scale-105 font-bold"
                      onClick={() => loginWithRedirect()}
                    >
                      <div className="flex items-center">
                        <img
                          className="h-8"
                          src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png"
                          alt="Icono de estrella"
                        />
                      </div>
                    </button>
                  )}
                </li>
              )}

            {isAuthenticated ? (
              <>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        className="w-56 h-56 rounded"
                        src={data?.picture}
                        alt="image"
                        onError={(e) => (e.target.src = `${imageError}`)}
                      />
                    </div>
                    {data &&
                      data.subscribe === 'Subscribed' &&
                      data?.access !== 'Banned' && (
                        <div className="w-5 absolute bottom-0 right-0">
                          <img
                            className="w-56 h-56"
                            src={verificationSymbol}
                            alt="verificationSymbol"
                          />
                        </div>
                      )}
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link className="justify-between" to="/profile">
                        <Profile />
                      </Link>
                    </li>
                    {data &&
                      data.subscribe !== 'Subscribed' &&
                      data?.access !== 'Banned' && (
                        <li>
                          <Link to="/subscribe">Subscribe</Link>
                        </li>
                      )}
                    {data?.access !== 'Banned' ? (
                      <li>
                        <Link to="/post">Sell</Link>
                      </li>
                    ) : null}
                    <li className="font-semibold text-white ml-4">
                      <LogOutButton />
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <li className="font-semibold text-white ml-4">
                  <LoginButton />
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
