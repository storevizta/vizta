import { useDispatch } from 'react-redux';

import { setCurrentPage, setPage } from '../features/slices/filterSlice';

export const Pagination = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex">
        <div>previousPage</div>
        <div>currentPage</div>
        <div>nextPage</div>
      </div>
    </>
  );
};
