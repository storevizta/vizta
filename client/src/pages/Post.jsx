import { useState, useEffect } from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { useNavigate } from 'react-router-dom';

import { useGetCategoryQuery } from '../features/query/categoryQuery';

import {uploadBytes, ref, listAll, getDownloadURL } from "firebase/storage";

import { storage } from '../firebase/config';

import { v4 } from "uuid";

import { useCreateAdMutation } from '../features/query/adsQuery';

console.log("user");

import swal from 'sweetalert';

export const Post = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    userId: '',
    categoryId: '',
    title: '',
    description: '',
    image: '',
    price: '',
    condition: '',
    state: '',
  });

  const [imageUpload, setImageUpload] = useState(null);
  const [image, setImage] = useState([]);

  const [errors, setErrors] = useState({});

  const [createAd] = useCreateAdMutation();

  const { data: datacategory } = useGetCategoryQuery();


  function validate(input) {
    let errors = {};

    if (input.categoryId === '') {
      errors.categoryId = 'You must select a category';
    }

    if (input.title === '') {
      errors.title = 'Title is required';
    } else if (input.title.length < 10) {
      errors.title = 'The title must be more than 10 characters';
    }

    if (data.price === '') {
      errors.price = 'The Price is required';
    } else if (data.price <= 0) {
      errors.price = 'The price has to be equal to or greater than 0';
    }

    if (input.condition === '') {
      errors.condition = 'You must select a condition';
    }
    return errors;
  }

  const uploadImage = (e) => {
    e.preventDefault();
    if(imageUpload === null) return;
    const imageRef = ref(storage, `posts/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snaphsot) =>{
      getDownloadURL(snaphsot.ref).then((url) => {
        setImage(url);
      })
    }
    )
  }
  /*
  const handleInputImage = async (e) => {
    const file = e.target.files[0];
    const url = await uploadFile(file);
    setData({...data, image: url})
  }
  */
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors(validate({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !errors.title &&
      !errors.condition &&
      !errors.price &&
      !errors.categoryId
    ) {
      createAd({
        userId: data.userId,
        title: data.title,
        image: image,
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

          {errors.title && (
            <div className="bg-red-600 w-96 m-auto p-1 rounded">
              <p className="text-center text-white font-bold capitalize">
                {errors.title}
              </p>
            </div>
          )}

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

          {errors.categoryId && (
            <div className="bg-red-600 w-96 m-auto p-1 rounded">
              <p className="text-center text-white font-bold capitalize">
                {errors.categoryId}
              </p>
            </div>
          )}

          <div className="flex ml-36 mr-36">
            <label className="basis-1/6 font-bold text-white mr-3">
              Image:{' '}
            </label>
            <input
              type="file"
              name="image"
              onChange={(e) => setImageUpload(e.target.files[0])}
              className="w-auto basis-5/6 p-1 rounded"
            />
            <button onClick={uploadImage}>Upload Image</button>
          </div>

          {image ? <img src={image}/> : <p>No funciona</p>
          }

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

          {errors.price && (
            <div className="bg-red-600 w-96 m-auto p-1 rounded">
              <p className="text-center text-white font-bold capitalize">
                {errors.price}
              </p>
            </div>
          )}

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

          {errors.condition && (
            <div className="bg-red-600 w-96 m-auto p-1 rounded">
              <p className="text-center text-white font-bold capitalize">
                {errors.condition}
              </p>
            </div>
          )}

          <button
            className="block mx-auto bg-white hover:bg-zinc-600 px-8 py-2 rounded"
            type="submit"
            disabled={
              !data.title || !data.price || !data.categoryId || !data.condition
            }
          >
            <p className="font-bold hover:text-white">Submit</p>
          </button>
        </form>
      </div>
    </div>
  );
};
