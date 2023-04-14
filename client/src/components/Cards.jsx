import React from 'react';

export const Cards = ({ info }) => {
  const { image, title, price } = info;

  return (
    <>
      <div>{title}</div>
    </>
  );
};
