import { useDispatch } from 'react-redux';

import { useGetCategoryQuery } from '../features/query/CategoryQuery';

import { Loading } from './Loading';

import { Error } from './Error';

import {
  setCategory,
  setMinPrice,
  setMaxPrice,
  setSort,
  setCondition,
  resetFilters,
} from '../features/slices/FilterSlice';

export const Sidebar = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetCategoryQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  const handlerCategory = (id) => {
    dispatch(setCategory(id));
  };

  const handlerMinPrice = (e) => {
    const newMinPrice = e.target.value;
    dispatch(setMinPrice(newMinPrice));
  };

  const handlerMaxPrice = (e) => {
    const newMaxPrice = e.target.value;
    dispatch(setMaxPrice(newMaxPrice));
  };

  const handlerSort = (e) => {
    const sortValue = e.target.value;
    dispatch(setSort(sortValue));
  };

  const handlerCondition = (e) => {
    dispatch(setCondition(e));
  };

  const handlerReset = () => {
    dispatch(resetFilters());
  };

  return (
    <>
      <div className="bg-zinc-700 text-white h-screen w-2/12 relative sticky top-0">
        <div className="p-2">
          <h1 className="text-2xl text-center font-bold focus:outline-none focus:text-indigo-400 w-full py-5 space-x-14  leading-5  uppercase ">
            categories
          </h1>
          <div className="cursor-pointer">
            {data &&
              data?.map((el) => (
                <div
                className="bg-gray-600 my-2 rounded-2xl p-2 hover:bg-slate-700 cursor-pointer w-full"
                  key={el.id}
                  onClick={() => handlerCategory(el.id)}
                >
                  ➤ {el.name}
                </div>
              ))}
          </div>
        </div>

        <div className="p-2">
          <h1 className="text-2xl text-center font-bold focus:outline-none focus:text-indigo-400 w-full py-5 space-x-14  leading-5  uppercase ">
            filters
          </h1>
          <div>
            <h2 className='text-xl text-center'>Price:</h2>
            <div className="pb-3 flex flex-col items-center">
              <form className="flex gap-5">
                <input
                  className="w-24 outline-none bg-gray-600"
                  type="number"
                  placeholder="Min."
                  onChange={handlerMinPrice}
                />
                <input
                  className="w-24 rounded outline-none bg-gray-600"
                  type="number"
                  placeholder="Max."
                  onChange={handlerMaxPrice}
                />
              </form>
            </div>

            <h2 className='text-xl text-center'>Condition:</h2>
            <div>
              <div className="cursor-pointer">
                <div
                  className="bg-gray-600 my-2 rounded-2xl p-2 hover:bg-slate-700 cursor-pointer w-full"
                  onClick={() => handlerCondition('new')}
                >
                  ➤ New
                </div>
                <div
                  className="bg-gray-600 my-2 rounded-2xl p-2 hover:bg-slate-700 cursor-pointer w-full"
                  onClick={() => handlerCondition('used')}
                >
                  ➤ Used
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2">
          <h1 className="text-2xl text-center font-bold focus:outline-none focus:text-indigo-400 w-full py-5 space-x-14  leading-5  uppercase ">
            order
          </h1>
          <div>
            <div className='text-center'>Sort: </div>
            <select className="select w-full max-w-xs bg-gray-600" onChange={(e) => handlerSort(e)}>
              <option value="priceAsc">Price Ascendente</option>
              <option value="priceDesc">Price Descendente</option>
              <option value="titleAsc">Title Ascendente</option>
              <option value="titleDesc">Title Descendente</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center my-6">
          <button
            className="rounded bg-base-100 hover:bg-red-600 cursor-pointer px-4 py-2 text-white"
            onClick={handlerReset}
          >
            Reset
          </button>
        </div>
        <div>
          <p>Vizta Copyrigth ©</p>
        </div>
      </div>
    </>
  );
};
