import { useDispatch } from 'react-redux';

import { useGetCategoryQuery } from '../features/query/categoryQuery';

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
      <aside className="w-96 flex flex-col gap-5">
        <div>
          <div className="flex flex-col gap-2">
            <div>Categories</div>
            {data &&
              data?.map((el) => (
                <div key={el.id} onClick={() => handlerCategory(el.id)}>
                  {el.name}
                </div>
              ))}
          </div>
        </div>
        <div>Filters</div>
        <div className="flex flex-col gap-2">
          <div>Price</div>
          <form className="flex justify-center items-center gap-5">
            <input
              className="w-24"
              type="text"
              placeholder="Min."
              onChange={handlerMinPrice}
            />
            <input
              className="w-24"
              type="text"
              placeholder="Max."
              onChange={handlerMaxPrice}
            />
          </form>
        </div>
        <div className="flex flex-col gap-2">
          <div>Sort</div>
          <div className="flex flex-col gap-2">
            <div onClick={() => handlerSort('asc')}>Ascending</div>
            <div onClick={() => handlerSort('desc')}>Descending</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>Discount</div>
          <select onChange={(e) => handlerDiscount(e)}>
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
        <div className="flex flex-col gap-2">
          <div>Condition</div>
          <div className="flex flex-col gap-2">
            <div onClick={() => handlerCondition('new')}>New</div>
            <div onClick={() => handlerCondition('used')}>Used</div>
          </div>
        </div>
        <div>
          <div onClick={handlerReset}>Reset</div>
        </div>
      </aside>
    </>
  );
};
