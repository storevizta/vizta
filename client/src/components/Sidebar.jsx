import { useState } from 'react';

import { useGetCategoryQuery } from '../features/slices/categorySlice';

export const Sidebar = () => {
  const [category, setCategory] = useState('');

  const { data, error, isLoading } = useGetCategoryQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <aside className="w-72 h-screen bg-gray-100">
      <div>
        <div>Categories</div>
        {data &&
          data?.map((el) => (
            <ul key={el.id}>
              <li
                className="px-4  hover:bg-gray-200"
                onClick={() => setCategory(el.id)}
              >
                {el.name}
              </li>
            </ul>
          ))}
      </div>
      <div>Filters</div>
      <ul>
        <li className="px-4  hover:bg-gray-200">Price</li>
        <li className="px-4  hover:bg-gray-200">Sort</li>
      </ul>
    </aside>
  );
};
