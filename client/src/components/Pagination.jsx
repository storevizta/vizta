import { useDispatch, useSelector } from 'react-redux';

import { setPage } from '../features/slices/FilterSlice';

import rowLeft from '../assets/row-left.svg';

import rowRight from '../assets/row-right.svg';

export const Pagination = ({ items }) => {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.filter.page);

  const handlerPrevPage = () => {
    dispatch(setPage(page - 1));
  };

  const handlerNextPage = () => {
    dispatch(setPage(page + 1));
  };

  const totalPages = Math.ceil(items / 10);

  const canGoPrev = page > 0;

  const canGoNext = page < totalPages - 1;

  return (
    <div className="flex justify-center items-center gap-5 mt-6">
      <button
        className={`w-5 h-5 rounded-full ${
          canGoPrev
            ? 'hover:bg-zinc-600 cursor-pointer'
            : 'opacity-50 cursor-default'
        }`}
        disabled={!canGoPrev}
        onClick={handlerPrevPage}
      >
        <img className="w-5" src={rowLeft} alt="row-left" />
      </button>
      <span>
        {page + 1} of {totalPages}
      </span>
      <button
        className={`w-5 h-5 rounded-full ${
          canGoNext
            ? 'hover:bg-zinc-600 cursor-pointer'
            : 'opacity-50 cursor-default'
        }`}
        disabled={!canGoNext}
        onClick={handlerNextPage}
      >
        <img className="w-5" src={rowRight} alt="row-right" />
      </button>
    </div>
  );
};
