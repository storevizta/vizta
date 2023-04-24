import { useState, useEffect } from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { useNavigate } from 'react-router-dom';

import { useGetCategoryQuery } from '../features/query/CategoryQuery';

import { uploadBytes, ref, listAll, getDownloadURL } from 'firebase/storage';

import { storage } from '../firebase/config';

import { v4 } from 'uuid';

import { useCreateAdMutation } from '../features/query/AdsQuery.jsx';

import swal from 'sweetalert';

export const Post = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const navigate = useNavigate();

  const [data, setData] = useState({
    userId: user.sub,
    categoryId: '',
    title: '',
    description: '',
    price: '',
    condition: '',
    shipment: '',
    state: '',
  });

  const [imageUpload, setImageUpload] = useState(null);
  const [image, setImage] = useState([]);

  const [method, setMethod] = useState([]);

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

  const uploadImage = async (e) => {
    e.preventDefault();
    if (imageUpload === null) return;
    for (let i = 0; i < imageUpload.length; i++) {
      const imageRef = ref(storage, `posts/${imageUpload[i].name + v4()}`);
      await uploadBytes(imageRef, imageUpload[i]).then(async (snaphsot) => {
        await getDownloadURL(snaphsot.ref).then((url) => {
          setImage([...image, url]);
        });
      });
    }
  };

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors(validate({ ...data, [e.target.name]: e.target.value }));
  };

  const modifyMethod = (e) => {
    let newMethods = [...method];
    for (let i = 0; i < newMethods.length; i++) {
      if (e.target.value === newMethods[i]) {
        return swal('Already selected!');
      }
    }
    newMethods.push(e.target.value);
    setMethod(newMethods);
  };

  const deleteMethod = (value, index) => {
    const newMethod = method.filter(
      (element) => method.indexOf(element) !== index
    );
    setMethod(newMethod);
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
        method: method,
        shipment: data.shipment,
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

      navigate('/home');
      swal('Successful created!');
    }
  };

  return (
    <div>
      {!user ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="bg-zinc-800 basis-2/4 w-1/2 m-auto">
          <div>
            <h1 className="text-center text-white pt-5 text-3xl">
              Create your post
            </h1>
          </div>
          <form className="space-y-3 mt-5 pb-10" onSubmit={handleSubmit}>
            <div className="flex ml-52">
              <label className="basis-1/6 font-bold text-white mr-3">
                Title:{' '}
              </label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={data.title}
                onChange={handleInput}
                className="input w-full max-w-xs"
                required
                maxLength={70}
              />
            </div>

            {errors.title && (
              <div className="bg-red-600 w-96 m-auto p-1 rounded">
                <p className="text-center text-white font-bold capitalize">
                  {errors.title}
                </p>
              </div>
            )}

            <div className="flex ml-52">
              <label className="basis-1/6 font-bold text-white mr-3">
                Category:{' '}
              </label>
              <select
                className="select w-full max-w-xs"
                name="categoryId"
                defaultValue="default"
                onChange={handleInput}
                required
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

            <div className="flex ml-52">
              <label className="basis-1/6 font-bold text-white mr-3">
                Image:{' '}
              </label>
              <input
                type="file"
                name="image"
                className="file-input w-full max-w-xs"
                onChange={(e) => setImageUpload(e.target.files)}
                multiple
                required
              />
              <button onClick={uploadImage} className="btn ml-10">
                Upload Image
              </button>
            </div>

            <div className="flex gap-10 justify-center">
              {image ? (
                image.map((value) => (
                  <img className="w-40 h-40 object-cover" src={value}></img>
                ))
              ) : (
                <p>No funciona</p>
              )}
            </div>

            <div className="flex ml-52">
              <label className="basis-1/6 font-bold text-white mr-3">
                Description:{' '}
              </label>
              <textarea
                type="text"
                placeholder="Enter a description"
                name="description"
                value={data.description}
                onChange={handleInput}
                className="input w-full max-w-xs"
                required
              />
            </div>

            <div className="flex ml-52">
              <label className="basis-1/6 font-bold text-white mr-3">
                Price:{' '}
              </label>
              <input
                type="number"
                placeholder="Price"
                name="price"
                value={data.price}
                onChange={handleInput}
                className="input w-full max-w-xs"
                required
              />
            </div>

            {errors.price && (
              <div className="bg-red-600 w-96 m-auto p-1 rounded">
                <p className="text-center text-white font-bold capitalize">
                  {errors.price}
                </p>
              </div>
            )}

            <div className="flex ml-52">
              <label className="basis-1/6 font-bold text-white mr-3">
                Condition:{' '}
              </label>
              <select
                className="select w-full max-w-xs"
                name="condition"
                defaultValue="default"
                onChange={handleInput}
                required
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

            <div className="flex ml-52">
              <label className="basis-1/6 font-bold text-white mr-3">
                Pay method:{' '}
              </label>
              <select
                className="select w-full max-w-xs"
                onChange={modifyMethod}
                required
              >
                <option selected disabled>
                  Select a payment method
                </option>
                <option
                  value="Effective"
                  className="w-auto basis-5/6 p-1 rounded"
                >
                  Effective
                </option>
                <option
                  value="Debit card"
                  className="w-auto basis-5/6 p-1 rounded"
                >
                  Debit card
                </option>
                <option
                  value="Credit card"
                  className="w-auto basis-5/6 p-1 rounded"
                >
                  Credit card
                </option>
                <option value="Swap" className="w-auto basis-5/6 p-1 rounded">
                  Swap
                </option>
              </select>
            </div>
            <div className="flex ml-52 items-center gap-10">
              {method.map((value, index) => (
                <div className="flex items-center gap-5">
                  <p>{value}</p>
                  <button
                    className="btn"
                    type="button"
                    onClick={() => deleteMethod(value, index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>

            <div className="flex ml-52">
              <label className="basis-1/6 font-bold text-white mr-3">
                Shipment:{' '}
              </label>
              <select
                className="select w-full max-w-xs"
                onChange={handleInput}
                name="shipment"
                required
              >
                <option selected disabled>
                  Does this product include shipping?
                </option>
                <option value="Yes" className="w-auto basis-5/6 p-1 rounded">
                  Yes
                </option>
                <option value="No" className="w-auto basis-5/6 p-1 rounded">
                  No
                </option>
              </select>
            </div>
            <div className="flex flex-col items-center">
              <button
                className="btn "
                type="submit"
                disabled={
                  !data.title ||
                  !data.price ||
                  !data.categoryId ||
                  !data.condition
                }
              >
                <p className="font-bold hover:text-white">Submit</p>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
