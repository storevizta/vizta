import { Link, useParams, useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { useAuth0 } from '@auth0/auth0-react';

import { setTitle } from '../features/slices/FilterSlice';

import { Profile } from '../components/Profile';

import { LogOutButton } from '../components/LogOutButton';

import { LoginButton } from '../components/LoginButton';

import post from '../assets/post.svg';

export const Navbar = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  console.log(id);

  const location = useLocation();

  const searchLanding = location.pathname !== `/`;

  const searchDetail = location.pathname !== `/detail/${id}`;

  const searchProfile = location.pathname !== `/profile`;

  const { isAuthenticated } = useAuth0();

  const handlerChange = (e) => {
    const newTitle = e.target.value;
    dispatch(setTitle(newTitle));
  };

  return (
    <nav className="max-h-16 h-16 flex">
      <div className="w-full p-5 flex justify-between items-center">
        <Link to="/home">
          <div className="text-xl">VIZTA</div>
        </Link>
        {searchProfile && searchLanding && searchDetail && (
          <form>
            <input
              className="w-96 px-5 py-1 rounded-full outline-none bg-zinc-700"
              type="text"
              placeholder="Search..."
              onChange={handlerChange}
            />
          </form>
        )}

        <div className="flex items-center gap-5">
          {isAuthenticated ? (
            <>
              <Link to="/post">
                <img className="w-5 " src={post} alt="" />
              </Link>
              <Profile />
              <LogOutButton />
            </>
          ) : (
            <>
              <LoginButton />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
