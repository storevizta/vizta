import { useDispatch } from 'react-redux';

import { setTitle } from '../features/slices/filterSlice';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const dispatch = useDispatch();

  const handlerChange = (e) => {
    const newTitle = e.target.value;
    dispatch(setTitle(newTitle));
  };

  return (
      <nav className="flex justify-between py-2 px-6 bg-zinc-900 items-center">
        <h2 className="text-white font-Montserrat">VIZTA</h2>
        <form>
          <input
            className="bg-zinc-800 outline-none p-1 rounded-md w-96 h-6 items-center text-white"
            type="text"
            placeholder="Search..."
            onChange={handlerChange}
          />
        </form>
        <div className="flex w-40 justify-between">
          <Link to="/SignIn" className='text-white border border-white rounded-lg content-center px-2 py-1'>
            Sign In
          </Link>
          <Link to="/SignUp" className='text-white border border-white rounded-lg content-center px-2 py-1 '>
            Sign Up
          </Link>
        </div>
      </nav>
  );
};
