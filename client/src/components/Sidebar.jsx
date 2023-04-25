import { useDispatch } from 'react-redux';

import { useGetCategoryQuery } from '../features/query/CategoryQuery';

import { Loading } from './Loading';

import { Error } from './Error';

import {
  setCategory,
  setMinPrice,
  setMaxPrice,
  setSortPrice,
  setSortTitle,
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

  const handlerSortPrice = (e) => {
    dispatch(setSortPrice(e));
  };

  const handlerSortTitle = (e) => {
    dispatch(setSortTitle(e));
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
      <aside className="w-64 max-w-64 p-5 bg-zinc-700 flex flex-col gap-5">
        <div>
          <div className="text-lg font-bold flex">Categories</div>
          <div className="cursor-pointer">
            {data &&
              data?.map((el) => (
                <div
                  className="px-2 rounded hover:bg-zinc-600"
                  key={el.id}
                  onClick={() => handlerCategory(el.id)}
                >
                  {el.name}
                </div>
              ))}
          </div>
        </div>
        <div>
          <div className="text-lg font-bold flex">Filters</div>
          <div>
            <div>Price:</div>
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
          </div>
          <div>
            <div>Sort Price:</div>
            <div className="cursor-pointer">
              <div
                className="px-2 rounded hover:bg-zinc-600"
                onClick={() => handlerSortPrice('asc')}
              >
                Ascending
              </div>
              <div
                className="px-2 rounded hover:bg-zinc-600"
                onClick={() => handlerSortPrice('desc')}
              >
                Descending
              </div>
            </div>
          </div>
          <div>
            <div>Sort Title:</div>
            <div className="cursor-pointer">
              <div
                className="px-2 rounded hover:bg-zinc-600"
                onClick={() => handlerSortTitle('asc')}
              >
                Ascending
              </div>
              <div
                className="px-2 rounded hover:bg-zinc-600"
                onClick={() => handlerSortTitle('desc')}
              >
                Descending
              </div>
            </div>
          </div>
          <div>
            <div className="">Discount:</div>
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
          <div>
            <div>Condition:</div>
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

        <div className="flex justify-center">
          <div
            className="px-2 rounded bg-gray-600 hover:bg-red-600 cursor-pointer"
            onClick={handlerReset}
          >
            Reset
          </div>
        </div>
        <h4 className="">Vizta Copyrigth ©</h4>
      </aside>
    </>
  );
};
