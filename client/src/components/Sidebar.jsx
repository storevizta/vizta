import { useDispatch } from 'react-redux';

import { useGetCategoryQuery } from '../features/query/CategoryQuery';

import { Loading } from './Loading';

import { Error } from './Error';

import {
  setCategory,
  setMinPrice,
  setMaxPrice,
  setSort,
  setDiscount,
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

  const handlerDiscount = (e) => {
    dispatch(setDiscount(e.target.value));
  };

  const handlerCondition = (e) => {
    dispatch(setCondition(e));
  };

  const handlerReset = () => {
    dispatch(resetFilters());
  };

  return (
    <>
      <div className="bg-zinc-700 text-white h-full w-1/4 rounded-md">
        <div className="p-2">
          <h1 className="text-2xl font-bold focus:outline-none focus:text-indigo-400 text-left  flex justify-between items-center w-full py-5 space-x-14  leading-5  uppercase ">
            categories
          </h1>
          <div className="cursor-pointer">
            {data &&
              data?.map((el) => (
                <div
                  className="px-5 m-3 bg-zinc-600 rounded hover:bg-base-100"
                  key={el.id}
                  onClick={() => handlerCategory(el.id)}
                >
                  {el.name}
                </div>
              ))}
          </div>
        </div>

        <div className="p-2">
          <h1 className="text-2xl font-bold focus:outline-none focus:text-indigo-400 text-left  flex justify-between items-center w-full py-5 space-x-14  leading-5  uppercase ">
            filters
          </h1>
          <div>
            <h2>Price:</h2>
            <div>
              <form className="flex gap-5">
                <input
                  className="w-24 rounded outline-none"
                  type="text"
                  placeholder="Min."
                  onChange={handlerMinPrice}
                />
                <input
                  className="w-24 rounded outline-none"
                  type="text"
                  placeholder="Max."
                  onChange={handlerMaxPrice}
                />
              </form>
            </div>
            <h2>Discount</h2>
            <div>
              <select
                className="w-52 px-2 rounded outline-none"
                onChange={(e) => handlerDiscount(e)}
              >
                <option value="">All</option>
                <option value="10">10%</option>
                <option value="20">20%</option>
                <option value="30">30%</option>
                <option value="40">40%</option>
                <option value="50">50%</option>
                <option value="60">60%</option>
                <option value="70">70%</option>
                <option value="80">80%</option>
                <option value="90">90%</option>
                <option value="100">100%</option>
              </select>
            </div>
            <h2>Condition:</h2>
            <div>
              <div className="cursor-pointer">
                <div
                  className="px-2 rounded hover:bg-zinc-600"
                  onClick={() => handlerCondition('new')}
                >
                  New
                </div>
                <div
                  className="px-2 rounded hover:bg-zinc-600"
                  onClick={() => handlerCondition('used')}
                >
                  Used
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2">
          <h1 className="text-2xl font-bold focus:outline-none focus:text-indigo-400 text-left   flex justify-between items-center w-full py-5 space-x-14  leading-5  uppercase ">
            order
          </h1>
          <div>
            <div>Sort: </div>
            <select onChange={(e) => handlerSort(e)}>
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
        <div className="">
          <p>Vizta Copyrigth ©</p>
        </div>
      </div>
    </>
  );
};
