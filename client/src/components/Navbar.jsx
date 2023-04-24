import { Link, useParams, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { useAuth0 } from '@auth0/auth0-react';

import { setTitle } from '../features/slices/FilterSlice';

import { Profile } from '../components/Profile';

import { LogOutButton } from '../components/LogOutButton';

import { LoginButton } from '../components/LoginButton';

import imageError from '../assets/imageError.svg';

export const Navbar = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const location = useLocation();

  const { wishlistsItems } = useSelector((state) => state?.wishlists);

  const searchLanding = location.pathname !== `/`;

  const searchDetail = location.pathname !== `/detail/${id}`;

  const searchProfile = location.pathname !== `/profile`;

  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const handlerChange = (e) => {
    const newTitle = e.target.value;
    dispatch(setTitle(newTitle));
  };

  return (
    // <nav className="max-h-16 h-16 flex">
    //   <div className="w-full p-5 flex justify-between items-center">
    //     <Link to="/home">
    //       {/* <div className="text-xl">{Logo}</div> */}
    //       <div>
    //         <img src={Logo} className="h-8"></img>
    //       </div>
    //     </Link>
    //     {searchProfile && searchLanding && searchDetail && (
    //       <form>
    //         <input
    //           className="w-80 px-2.5  py-1 rounded-full outline-none bg-zinc-700 hover:bg-zinc-600"
    //           type="text"
    //           placeholder="Search.."
    //           onChange={handlerChange}
    //         />
    //       </form>
    //     )}
    //     <div className="flex items-center gap-5">
    //       {isAuthenticated ? (
    //         <>
    //           <Link to="/post">
    //             <img className="w-5 " src={post} alt="" />
    //           </Link>
    //           <Profile />
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
                onChange={handlerChange}
                className="input input-bordered"
              />
            </div>
          )}
          <div>
          {isAuthenticated ?
            <Link to="/favorite">
              <button>
              Favorites ({wishlistsItems?.length})
              </button>
              </Link> :
              <button onClick={()=>loginWithRedirect()}>Favorites</button>
          }
          </div>
          {isAuthenticated ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      className="w-56 h-56 rounded"
                      src={user.picture}
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
                  <li>
                    <LogOutButton />
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <LoginButton />
            </>
          )}
        </div>
      </div>
    </>
  );
};
