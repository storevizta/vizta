import { useDispatch } from 'react-redux';

import { useGetCategoryQuery } from '../features/slices/categorySlice';

import { setCategory } from '../features/slices/filterSlice';

export const Sidebar = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetCategoryQuery();

  if (isLoading) return <div>Loading...</div>;

  const handlerChange = (id) => {
    dispatch(setCategory(id));
  };

  return (
    <aside className="w-72 h-screen bg-gray-100">
      <div>
        <div>Categories</div>
        {data &&
          data?.map((el) => (
            <ul key={el.id}>
              <li
                className="px-4  hover:bg-gray-200"
                onClick={() => handlerChange(el.id)}
              >
                {el.name}
              </li>
            </ul>
          ))}
      </div>
      <div>
        <div>Filters</div>
        <ul>
          <li>Price</li>
          <li>Sort</li>
          <li>Discount</li>
        </ul>
      </div>
    </aside>
  );
};
