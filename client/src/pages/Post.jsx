import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useCreateAdMutation } from '../features/slices/adsSlice';

import swal from 'sweetalert';

export const Post = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    userId: 'cd7460f6-6032-4d43-929f-729f0095dbf5',
    categoryId: 1,
    title: '',
    price: '',
  });

  const [createAd] = useCreateAdMutation();

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAd({
      userId: data.userId,
      title: data.title,
      price: parseFloat(data.price),
      categoryId: 5,
    })
      .unwrap()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    swal('Successful created!');

    navigate('/home');
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={data.title}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Price"
          name="price"
          value={data.price}
          onChange={handleInput}
        />
        <button className="hover:bg-zinc-600" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

// {
//   "userId": "cd7460f6-6032-4d43-929f-729f0095dbf5",
//   "categoryId": 5,
//   "image": "https://example.com/image45.jpg",
//   "title": "Product COT",
//   "description": "This is a new product description.",
//   "price": 80,
//   "discount": 30,
//   "condition": "Used"
// }
