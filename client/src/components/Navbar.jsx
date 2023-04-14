import { useGetAdsQuery } from '../features/slices/adsSlice';
import { useState } from 'react';

export const Navbar = () => {

  console.log(localStorage.getItem("id"));

  const [title, setTitle] = useState('');
  const { data, error, isLoading } = useGetAdsQuery(title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSearch = () => {
    refetch();
  };

  return (
    <>
      <nav className="flex justify-between p-5 bg-gray-300">
        <div className="">VIZTA</div>
        <input
          className=""
          type="text"
          placeholder="Search..."
          value={title}
          name="title"
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
        {isLoading && <div>Cargando...</div>}
        {error && <div>{error.message}</div>}
        {data && (
          <ul>
            {data.map((ad) => {
              <li key={ad.id}>{ad.title}</li>;
            })}
          </ul>
        )}
        <div className="flex">
          <a href='/signin' ><div className="">Sign In</div></a>
          <a href='/signup' ><div className="">Sign Up</div></a>
        </div>
      </nav>
    </>
  );
};
