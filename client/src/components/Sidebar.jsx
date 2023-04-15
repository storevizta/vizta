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

  const handlerReset = (e) => {
    dispatch(resetFilters(e));
  };

  return (
    <>
      <aside className="w-72 h-screen bg-zinc-800 p-4">
        <div className="categorys">
          <h2 className="font-bold text-xl mb-2 text-slate-50">Categories:</h2>
          {data &&
            data?.map((el) => (
              <div
                className="px-2 py-2 rounded-lg hover:bg-zinc-900 text-slate-50"
                key={el.id}
                onClick={() => handlerCategory(el.id)}
              >
                {el.name}
              </div>
            ))}
        </div>
        <div className="filters mt-8">
          <h2 className="font-bold text-xl mb-2 text-slate-50">Filters:</h2>
          <div className="filterPrice">
            <h3 className="font-bold text-lg text-slate-50 pl-2 mb-2">
              Price:
            </h3>
            <form className="flex w-auto justify-center gap-5">
              <input
                className="w-24 rounded-md pl-2 bg-zinc-900 text-slate-50"
                type="text"
                placeholder="Min"
                onChange={handlerMinPrice}
              />
              <input
                className="w-24 rounded-md pl-2 bg-zinc-900 text-slate-50"
                type="text"
                placeholder="Max"
                onChange={handlerMaxPrice}
              />
            </form>
          </div>
          <div className="filterSort">
            <h3 className="font-bold text-lg text-slate-50 pl-2 mb-2 mt-2">
              Sort:
            </h3>
            <div className="filterSortButtons h-12 aling content-between">
              <div
                className="px-2 hover:bg-zinc-900 text-slate-50 text-center h-8 rounded-md"
                onClick={() => handlerSort('asc')}
              >
                Ascending
              </div>
              <div
                className="px-2 hover:bg-zinc-900 text-slate-50 text-center h-8 rounded-md"
                onClick={() => handlerSort('desc')}
              >
                Descending
              </div>
            </div>
          </div>
          <div className="filterDiscount">
            <h3 className="font-bold text-lg text-slate-50 pl-2 mb-2 mt-2">
              Discount:
            </h3>
            <select
              className="w-48 rounded-md ml-2 px-2 py-1 bg-zinc-900 text-slate-50"
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
              className="px-2 hover:bg-zinc-900"
              onClick={() => handlerCondition('new')}
            >
              New
            </div>
            <div
              className="px-2 hover:bg-zinc-900"
              onClick={() => handlerCondition('used')}
            >
              Used
            </div>
          </div>
        </div>
        <div>
          <div onClick={() => handlerReset(e)}>Reset</div>
        </div>
        <h4 className="font-thin text-slate-50 text-sm mt-8 ml-2 ">
          Vizta Copyrigth ©
        </h4>
      </aside>
    </>
  );
};
