import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { setTitle } from '../features/slices/filterSlice';

export const Navbar = () => {
  const dispatch = useDispatch();

  const handlerChange = (e) => {
    const newTitle = e.target.value;
    dispatch(setTitle(newTitle));
  };

  return (
    <nav className="p-5 flex justify-between bg-zinc-100">
      <div className="">VIZTA</div>
      <form>
        <input
          className="w-96 px-3 py-1 rounded-full bg-zinc-200"
          type="text"
          placeholder="Search..."
          onChange={handlerChange}
        />
      </form>
      <div className="flex items-center gap-5">
        <Link to="/post">
          <div>+</div>
        </Link>
        <div className="flex justify-center items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-zinc-900"></div>
          <div>Ronaldo</div>
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
    </nav>
  );
};
