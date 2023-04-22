import { useDispatch, useSelector } from 'react-redux';

import { setPage } from '../features/slices/filterSlice';

import rowLeft from '../assets/row-left.svg';

import rowRight from '../assets/row-right.svg';

export const Pagination = ({ items }) => {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.filter.page);

  const totalPages = Math.ceil(items / 10);
  let pagesNumber = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesNumber.push(i);
  }

  const handlerPrevPage = () => {
    dispatch(setPage(page - 1));
  };

  const handlerNextPage = () => {
    dispatch(setPage(page + 1));
  };

  console.log(page);

  return (
    <>
      <div className="flex justify-center items-center gap-5">
        <div
          className="w-5 rounded-full hover:bg-zinc-600"
          onClick={handlerPrevPage}
        >
          <img className="w-5" src={rowLeft} alt="row-left" />
        </div>
        {pagesNumber.map(
          (num) =>
            num > 0 && (
              <button key={num} onClick={() => dispatch(setPage(num - 1))}>
                <span>{num}</span>
              </button>
            )
        )}
        {page + 1 !== totalPages && (
          <div
            className="w-5 rounded-full hover:bg-zinc-600"
            onClick={handlerNextPage}
          >
            <img className="w-5" src={rowRight} alt="row-right" />
          </div>
        )}
      </div>
    </>
  );
};
