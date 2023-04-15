import { useDispatch } from 'react-redux';

import { useGetCategoryQuery } from '../features/slices/categorySlice';

import {
  setCategory,
  setMinPrice,
  setMaxPrice,
  setSort,
  setDiscount,
} from '../features/slices/filterSlice';

export const Sidebar = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetCategoryQuery();

  if (isLoading) return <div>Loading...</div>;

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

  return (
    <>
      <aside className="w-72 h-full bg-gray-100">
        <div>
          <div>Categories</div>
          {data &&
            data?.map((el) => (
              <ul key={el.id}>
                <li
                  className="px-4  hover:bg-gray-200"
                  onClick={() => handlerCategory(el.id)}
                >
                  {el.name}
                </li>
              </ul>
            ))}
        </div>
        <div>
          <div>Filters</div>
          <ul>
            <li>
              <div>Price</div>
              <form className="flex">
                <input
                  className="w-16"
                  type="text"
                  placeholder="minPrice"
                  onChange={handlerMinPrice}
                />
                <input
                  className="w-16"
                  type="text"
                  placeholder="maxPrice"
                  onChange={handlerMaxPrice}
                />
              </form>
            </li>
            <li>
              <div>
                <div>Sort</div>
                <ul>
                  <li
                    className="px-4  hover:bg-gray-200"
                    onClick={() => handlerSort('asc')}
                  >
                    Asd
                  </li>
                  <li
                    className="px-4  hover:bg-gray-200"
                    onClick={() => handlerSort('desc')}
                  >
                    Desc
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div>Discount</div>
              <select className="px-4" onChange={(e) => handlerDiscount(e)}>
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
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
