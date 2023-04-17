import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useCreateAdMutation } from '../features/slices/adsSlice';

import { Navbar } from '../components/Navbar';

import { useGetCategoryQuery } from '../features/slices/categorySlice';

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
    condition: '',
    state: '',
  });

  console.log(data);

  const [errors, setErrors] = useState({});

  const [createAd] = useCreateAdMutation();

  const { data: datacategory } = useGetCategoryQuery();

  function validate(input){
    let errors = {};

    if(data.categoryId === ""){
      errors.categoryId = "You must select a category"
    }

    if(data.title === ""){
      errors.title = "Title is required" 
    } else if(data.title.length < 10){
      errors.title = "The title must be more than 10 characters"
    }

    if(data.price === ""){
      errors.price = "The Price is required"
    }

    if(data.condition === ""){
      errors.condition = "You must select a condition"
    };
    return errors;
  };

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors(validate({...data, [e.target.name]: e.target.value }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!errors.title && !errors.condition && !errors.price && !errors.categoryId){
      createAd({
      userId: data.userId,
      title: data.title,
      image: data.image,
      price: parseFloat(data.price),
      description: data.description,
      categoryId: parseFloat(data.categoryId),
      state: data.state,
      condition: data.condition,
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
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-zinc-700 basis-2/4 w-1/2 m-auto">
        <div>
          <h1 className="text-center text-white pt-5 text-3xl">
            Create your post
          </h1>
        </div>
        <form className="space-y-3 mt-5 pb-10" onSubmit={handleSubmit}>
          <div className="flex ml-36 mr-36">
            <label className="basis-1/6 font-bold text-white mr-3">
              Title:{' '}
            </label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={data.title}
              onChange={handleInput}
              className="w-auto basis-5/6 p-1 rounded"
            />
          </div>

          {errors.title && <div className='bg-red-600 w-96 m-auto p-1 rounded'>
                              <p className='text-center text-white font-bold capitalize'>{errors.title}</p>
                            </div>}

          <div className="flex ml-36 mr-36">
            <label className="basis-1/6 font-bold text-white mr-3">
              Category:{' '}
            </label>
            <select
              className="w-auto basis-5/6 p-1 rounded"
              name="categoryId"
              defaultValue="default"
              onChange={handleInput}
            >
              <option value="default" disabled>
                Select a category
              </option>
              {datacategory &&
                datacategory.length > 0 &&
                datacategory.map((category) => (
                  <option
                    key={category.id}
                    value={category.id}
                    className="w-auto basis-5/6 p-1 rounded"
                  >
                    {category.name}
                  </option>
                ))}
            </select>
          </div>

          {errors.categoryId && <div className='bg-red-600 w-96 m-auto p-1 rounded'>
                              <p className='text-center text-white font-bold capitalize'>{errors.categoryId}</p>
                            </div>}

          <div className="flex ml-36 mr-36">
            <label className="basis-1/6 font-bold text-white mr-3">
              Image:{' '}
            </label>
            <input
              type="text"
              placeholder="Image"
              name="image"
              value={data.image}
              onChange={handleInput}
              className="w-auto basis-5/6 p-1 rounded"
            />
          </div>

          <div className="flex ml-36 mr-36">
            <label className="basis-1/6 font-bold text-white mr-3">
              Description:{' '}
            </label>
            <textarea
              type="text"
              placeholder="Enter a description"
              name="description"
              value={data.description}
              onChange={handleInput}
              className="basis-5/6 p-1 rounded h-28"
            />
          </div>

          <div className="flex ml-36 mr-36">
            <label className="basis-1/6 font-bold text-white mr-3">
              Price:{' '}
            </label>
            <input
              type="number"
              placeholder="Price"
              name="price"
              value={data.price}
              onChange={handleInput}
              className="w-auto basis-5/6 p-1 rounded"
            />
          </div>

          {errors.price && <div className='bg-red-600 w-96 m-auto p-1 rounded'>
                              <p className='text-center text-white font-bold capitalize'>{errors.price}</p>
                            </div>}

          <div className="flex ml-36 mr-36">
            <label className="basis-1/6 font-bold text-white mr-3">
              Condition:{' '}
            </label>
            <select
              className="w-auto basis-5/6 p-1 rounded mb-8"
              name="condition"
              defaultValue="default"
              onChange={handleInput}
            >
              <option value="default" disabled>
                Select a condition
              </option>

              <option value="New" className="w-auto basis-5/6 p-1 rounded">
                New
              </option>
              <option value="Used" className="w-auto basis-5/6 p-1 rounded">
                Used
              </option>
            </select>
          </div>

          {errors.condition && <div className='bg-red-600 w-96 m-auto p-1 rounded'>
                              <p className='text-center text-white font-bold capitalize'>{errors.condition}</p>
                            </div>}

          <button
            className="block mx-auto bg-white hover:bg-zinc-600 px-8 py-2 rounded"
            type="submit"
          >
            <p className="font-bold hover:text-white">Submit</p>
          </button>
        </form>
      </div>
    </div>
  );
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
