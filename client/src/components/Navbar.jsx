import { Link, useParams, useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { setTitle } from '../features/slices/filterSlice';

import post from '../assets/post.svg';

export const Navbar = () => {
  const { id } = useParams();

  const location = useLocation();

  const dispatch = useDispatch();

  const searchbar = location.pathname !== `/detail/${id}`;

  const handlerChange = (e) => {
    const newTitle = e.target.value;
    dispatch(setTitle(newTitle));
  };

  return (
    <>
      <nav className="p-5 flex">
        <div className="w-full px-5 py-1 rounded-full flex justify-between items-center">
          <div className="text-xl text-slate-50">VIZTA</div>
          {searchbar && (
            <form>
              <input
                className="w-96 px-3 py-1 rounded-full outline-none bg-zinc-700"
                type="text"
                placeholder="Search..."
                onChange={handlerChange}
              />
            </form>
          )}

          <div className="flex justify-center gap-5">
            <Link className="flex justify-center items-center" to="/post">
              <img className="w-5" src={post} alt="post" />
            </Link>
            <div className="flex justify-center items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-200"></div>
              <div className="text-slate-50">Ronaldo</div>
            </div>
          </div>

          {/* <div className="flex w-40 justify-between">
        <Link
          to="/signIn"
          className="text-white border border-white rounded-lg content-center px-2 py-1"
        >
          Sign In
        </Link>
        <Link
          to="/signUp"
          className="text-white border border-white rounded-lg content-center px-2 py-1 "
        >
          Sign Up
        </Link>
      </div> */}
        </div>
      </nav>
    </>
  );
};
