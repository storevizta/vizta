import { useDispatch, useSelector } from 'react-redux';

import { setTitle } from '../features/slices/filterSlice';

export const Navbar = () => {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.filter.title);

  const handlerChange = (e) => {
    const newTitle = e.target.value;
    dispatch(setTitle(newTitle));
  };

  return (
    <>
      <nav className="flex justify-between p-5 bg-gray-300">
        <div className="">VIZTA</div>
        <form>
          <input
            className=""
            type="text"
            placeholder="Search..."
            onChange={handlerChange}
          />
        </form>
        <div className="flex">
          <div className="">Sign In</div>
          <div className="">Sign Up</div>
        </div>
      </nav>
    </>
  );
};
