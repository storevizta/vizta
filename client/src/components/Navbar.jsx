import { Link, useParams, useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { useAuth0 } from '@auth0/auth0-react';

import { setTitle } from '../features/slices/FilterSlice';

import { ProfileButton } from '../components/ProfileButton';

import { LogOutButton } from '../components/LogOutButton';

import { LoginButton } from '../components/LoginButton';

import post from '../assets/post.svg';

export const Navbar = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const location = useLocation();

  const searchLanding = location.pathname !== `/`;

  const searchDetail = location.pathname !== `/detail/${id}`;

  const searchProfile = location.pathname !== `/profile`;

  const { user, isAuthenticated } = useAuth0();

  const handlerChange = (e) => {
    const newTitle = e.target.value;
    dispatch(setTitle(newTitle));
  };

  return (
    // <nav className="max-h-16 h-16 flex">
    //   <div className="w-full p-5 flex justify-between items-center">
    //     <Link to="/home">
    //       <div className="text-xl">VIZTA</div>
    //     </Link>
    //     <div className="flex items-center gap-5">
    //       {isAuthenticated ? (
    //         <>
    //           <Link to="/post">
    //             +{/* <img className="w-5 " src={post} alt="post" /> */}
    //           </Link>
    //           <ProfileButton />
    //           <LogOutButton />
    //         </>
    //       ) : (
    //         <>
    //           <LoginButton />
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </nav>
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" to="/home">
            VIZTA
          </Link>
        </div>
        <div className="flex-none gap-2">
          {searchProfile && searchLanding && searchDetail && (
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered"
                onChange={handlerChange}
              />
            </div>
          )}
          {isAuthenticated ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.picture} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    <ProfileButton />
                  </a>
                </li>
                <li>
                  <LogOutButton />
                </li>
              </ul>
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </>
  );
};
