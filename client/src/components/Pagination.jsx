import { useDispatch } from 'react-redux';

import { setPage } from '../features/slices/filterSlice';

export const Pagination = () => {
  const dispatch = useDispatch();

  const handlerNextPage = () => {
    dispatch({ payload: page + 1 });
  };

  return (
    <>
      <div className="flex">
        <div onClick={handlerNextPage}>Next</div>
      </div>
    </>
  );
};
