import { useDispatch } from 'react-redux';

import { useGetCategoryQuery } from '../features/slices/categorySlice';

import {
  setCategory,
  setMinPrice,
  setMaxPrice,
  setSort,
  setDiscount,
  setCondition,
  resetFilters,
} from '../features/slices/filterSlice';

export const Sidebar = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetCategoryQuery();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

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
    dispatch(setSort(e));
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
      <aside className="w-72 p-5 rounded bg-zinc-700">
        <div>
          <div>
            <div className="">Categories:</div>
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
          <div>
            <div className="">Filters:</div>
            <div className="">
              <h3 className="">Price:</h3>
              <form className="flex gap-5">
                <input
                  className="w-24 rounded"
                  type="text"
                  placeholder="Min."
                  onChange={handlerMinPrice}
                />
                <input
                  className="w-24 rounded"
                  type="text"
                  placeholder="Max."
                  onChange={handlerMaxPrice}
                />
              </form>
            </div>
            <div className="">
              <h3 className="">Sort:</h3>
              <div className="">
                <div
                  className="px-2 rounded hover:bg-zinc-600"
                  onClick={() => handlerSort('asc')}
                >
                  Ascending
                </div>
                <div
                  className="px-2 rounded hover:bg-zinc-600"
                  onClick={() => handlerSort('desc')}
                >
                  Descending
                </div>
              </div>
            </div>
            <div className="">
              <h3 className="">Discount:</h3>
              <select
                className="px-2 rounded hover:bg-zinc-600"
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
                <option value="90">100%</option>
              </select>
            </div>
          </div>
          <div>
            <h3>Condition:</h3>
            <div>
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
          <div>
            <div
              className="px-2 rounded hover:bg-red-600"
              onClick={handlerReset}
            >
              Reset
            </div>
          </div>
          <h4 className="">Vizta Copyrigth ©</h4>
        </div>
      </aside>
    </>
  );
};
