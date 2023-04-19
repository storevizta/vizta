import { useDispatch, useSelector } from 'react-redux';

import { setPage } from '../features/slices/FilterSlice';

import rowLeft from '../assets/row-left.svg';

import rowRight from '../assets/row-right.svg';

export const Pagination = ({ items }) => {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.filter.page);

  const handlerPrevPage = () => {
    if (page > 0) {
      dispatch(setPage(page - 1));
    }
  };

  const handlerNextPage = () => {
    dispatch(setPage(page + 1));
  };

  const totalPages = Math.ceil(items / 10);

  return (
    <div className="flex justify-center items-center gap-5 mt-6">
      <button onClick={handlerPrevPage}>
        <img className="w-5" src={rowLeft} alt="row-left" />
      </button>
      <span>
        {page} of {totalPages}
      </span>
      <button onClick={handlerNextPage}>
        <img className="w-5" src={rowRight} alt="row-right" />
      </button>
    </div>
  );
};
