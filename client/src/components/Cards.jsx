import React from 'react';
import { Link } from 'react-router-dom';

export const Cards = ({ info }) => {
  const { image, title, price, id } = info;

  return (
    <> 
    <div className="flex justify-center items-center flex-col  ">
      <div >{title}</div>
      <div>{image}</div>
      <div>{price}</div>
      <Link to={`/detail/${id}`} key={id}> 
      <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"> Details </button>
      </Link>
    </div>
    </>
  );
};



