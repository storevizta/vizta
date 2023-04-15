import { useDispatch, useSelector } from 'react-redux';

import { setPage } from '../features/slices/filterSlice';

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
      <div className="flex">
        <div onClick={handlerPrevPage}>Preview</div>
        <div>{page}</div>
        <div onClick={handlerNextPage}>Next</div>
      </div>
    </>
  );
};
