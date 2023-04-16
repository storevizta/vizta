import { useDispatch, useSelector } from 'react-redux';

import { setPage } from '../features/slices/filterSlice';

import rowLeft from '../assets/row-left.svg';

import rowRight from '../assets/row-right.svg';

export const Pagination = () => {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.filter.page);

  const handlerPrevPage = () => {
    dispatch(setPage(-1));
  };

  const handlerNextPage = () => {
    dispatch(setPage(+1));
  };

  return (
    <>
      <div className="flex gap-5">
        <div
          className="w-5 rounded-full hover:bg-zinc-600"
          onClick={handlerPrevPage}
        >
          <img className="w-5" src={rowLeft} alt="row-left" />
        </div>
        <div>{page + 1}</div>

        <div
          className="w-5 rounded-full hover:bg-zinc-600"
          onClick={handlerNextPage}
        >
          <img className="w-5" src={rowRight} alt="row-right" />
        </div>
      </div>
    </>
  );
};
