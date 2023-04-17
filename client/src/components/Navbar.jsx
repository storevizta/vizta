import { Link, useParams, useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { setTitle } from '../features/slices/filterSlice';

import { Login } from './Login';

export const Navbar = () => {
  const { id } = useParams();

  const location = useLocation();

  const dispatch = useDispatch();

  const handlerChange = (e) => {
    const newTitle = e.target.value;
    dispatch(setTitle(newTitle));
  };

  return (
    <>
      <nav className="p-5 flex">
        <div className="w-full px-5 py-1 rounded-full flex justify-between items-center">
          <Link to="/home">
            <div className="text-xl text-slate-50">VIZTA</div>
          </Link>
          <form>
            <input
              className="w-96 px-3 py-1 rounded-full outline-none bg-zinc-700"
              type="text"
              placeholder="Search..."
              onChange={handlerChange}
            />
          </form>

          <div>
            <Login />
          </div>
        </div>
      </nav>
    </>
  );
};
