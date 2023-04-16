import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useCreateAdMutation } from '../features/slices/adsSlice';

import {Navbar} from '../components/Navbar';

import { useGetCategoryQuery } from "../features/slices/categorySlice";7

import swal from 'sweetalert';

export const Post = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    userId: '09168922-e71c-4416-8742-8ad6e284ca0a',
    categoryId: '',
    title: '',
    description: '',
    image: '',
    price: '',
    discount: '',
    condition: '',
    state: ''
  });

  const [createAd] = useCreateAdMutation();

  const {data: datacategory} = useGetCategoryQuery();

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  console.log(data)

  const handleSubmit = (e) => {
    e.preventDefault();
    createAd({
      userId: data.userId,
      title: data.title,
      image: data.image,
      price: parseFloat(data.price),
      description: data.description,
      categoryId: parseFloat(data.categoryId),
      state: data.state,
      condition: data.condition,
      discount: parseFloat(data.discount)
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
    <div>
      <Navbar />
      <div className='bg-zinc-700 w-3/4 m-auto'>
        <div>
          <h1 className='text-center text-white pt-5 text-3xl'>Creá tu Publicación</h1>
        </div>
        <form className="space-y-3 mt-5" onSubmit={handleSubmit}>
          
          <div className='flex ml-36 mr-36'>
            <label className='basis-1/6 font-bold text-white mr-3'>Titulo: </label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={data.title}
              onChange={handleInput}
              className='w-auto basis-5/6 p-1 rounded'
            />
          </div>
          
          <div className='flex ml-36 mr-36'>
            <label className='basis-1/6 font-bold text-white mr-3'>Category: </label>
            <select name='categoryId' onChange={handleInput} className='w-auto basis-5/6 p-1 rounded'> 
              <option value="select" disabled>Seleccione una categoria</option>
              {datacategory && datacategory.length > 0 &&
                datacategory.map(category => 
                  <option
                    key={category.id}
                    value={category.id}
                    className='w-auto basis-5/6 p-1 rounded'>
                    {category.name}
                  </option>)
              }
            </select>
          </div>
          
          <div className='flex ml-36 mr-36'>
            <label className='basis-1/6 font-bold text-white mr-3'>Image: </label>
            <input
              type="text"
              placeholder="Image"
              name="image"
              value={data.image}
              onChange={handleInput}
              className='w-auto basis-5/6 p-1 rounded'
            />
          </div>

          <div className='flex ml-36 mr-36'>
            <label className='basis-1/6 font-bold text-white mr-3'>Description: </label>
            <textarea
              type="text"
              placeholder="Enter a description"
              name="description"
              value={data.description}
              onChange={handleInput}
              className='basis-5/6 p-1 rounded h-28'
            />
          </div>

          <div className='flex ml-36 mr-36'>
            <label className='basis-1/6 font-bold text-white mr-3'>Price: </label>
            <input
              type="number"
              placeholder="Price"
              name="price"
              value={data.price}
              onChange={handleInput}
              className='w-auto basis-5/6 p-1 rounded'
            />
          </div>

          <div className='flex ml-36 mr-36'>
            <label className='basis-1/6 font-bold text-white mr-3'>Discount: </label>
            <input
              type="number"
              placeholder="Discount"
              name="discount"
              value={data.discount}
              onChange={handleInput}
              className='w-auto basis-5/6 p-1 rounded'
            />
          </div>
           
          <div className='flex ml-36 mr-36'>
            <label className='basis-1/6 font-bold text-white mr-3'>Condition: </label>
            <select name='condition' onChange={handleInput} className='w-auto basis-5/6 p-1 rounded'> 
              <option value="select" disabled>Seleccione una categoria</option>
      
              <option value="New" className='w-auto basis-5/6 p-1 rounded'>
                New
              </option>
              <option value="Used" className='w-auto basis-5/6 p-1 rounded'>
                Used
              </option>
            </select>
          </div>
        
        <button className="hover:bg-zinc-600" type="submit">
          Submit
        </button>
      </form>
      </div>
      </div>
)
};
{
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
}