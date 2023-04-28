import { Link, useParams, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { useAuth0 } from '@auth0/auth0-react';

import { setTitle } from '../features/slices/FilterSlice';

import { Profile } from '../components/Profile';

import { LogOutButton } from '../components/LogOutButton';

import { LoginButton } from '../components/LoginButton';

import { useGetUserIdQuery } from '../features/query/UserQuery';

import imageError from '../assets/imageError.svg';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const location = useLocation();

  const { wishlistsItems } = useSelector((state) => state?.wishlists);

  const searchLanding = location.pathname !== `/`;

  const searchDetail = location.pathname !== `/detail/${id}`;

  const searchProfile = location.pathname !== `/profile`;

  const favoriteLanding = location.pathname !== `/`;

  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const handlerChange = (e) => {
    const newTitle = e.target.value;
    dispatch(setTitle(newTitle));
  };

  const idUser = localStorage.getItem('id');
  console.log(idUser);
  const userData = useGetUserIdQuery(idUser);

  return (
    <div className="bg-base-100">
      <nav class="flex justify-between px-10 py-5 items-center">
        <Link to="/home">
          <h1
            class="text-white text-3xl font-bold uppercase tracking-widest"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
              letterSpacing: '2px',
            }}
          >
            VIZTA
          </h1>
        </Link>

        {searchProfile && searchLanding && searchDetail && (
          <div>
            <input
              class="bg-zinc-700 px-3 py-2 rounded-full w-140 transition-all duration-500 hover:bg-white hover:border-white"
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
            />
          </div>
        )}

        <div class="flex">
          <ul class="flex items-center">
            {favoriteLanding && (
              <li class="font-semibold text-white mr-4 ">
                {isAuthenticated ? (
                  <Link to="/favorite">
                    <button class="duration-300 hover:scale-105 hover:border-b-4 border-white font-bold font-sans">
                      Favorites ({wishlistsItems?.length})
                    </button>
                  </Link>
                ) : (
                  <button
                    class="duration-300 hover:scale-105 hover:border-b-4 border-white font-bold font-sans"
                    onClick={() => loginWithRedirect()}
                  >
                    Favorites
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
                        src={userData?.data?.picture}
                        alt="image"
                        onError={(e) => (e.target.src = `${imageError}`)}
                      />
                    </div>
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
                    <li>
                      <Link to="/subscribe">Subscribe</Link>
                    </li>
                    <li>
                      <Link to="/post">Sell</Link>
                    </li>
                    <li class="font-semibold text-white ml-4">
                      <LogOutButton />
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <li class="font-semibold text-white ml-4">
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
