import styled from 'styled-components';

import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { usePostAdMutation } from '../features/slices/adsSlice.jsx';


export default function CreateVideogame (){
const navigate = useNavigate();
const dispatch = useDispatch();
const allAds = useSelector((state) => state.usePostAdMutation);

const [input, setInput] = useState({
    title: '',
    description: '',
    price: '',
    stock: '',
    image: '',
  });

  const [errors, setErrors] = useState({
    title: '',
    description: '',
    price: '',
    stock: '',
    image: '',
  });

  function validate() {
    const inputValues = Object.entries(input); //genera un arreglo de tuplas de un objeto que vos le pases. Las tuplas son mini arreglos donde vos guardas el key por un lado y el valor por el otro.
    const objectError = {};
    const errorsMessages = {
      title: 'title is required',
      description: 'description is required',
      image: 'image is required',
      price: 'price is required',
      stock: 'stock is required',
    };

    inputValues.forEach(([key, value]) => {
      if (value === '' || value.length === 0) {
        return Object.assign(objectError, {
          [key]: errorsMessages[key],
        });
      }
    });
    return setErrors(objectError)
  }

  useEffect(() => {
    validate()
  }, [input]);

  function handlerSubmit(e) {
    e.preventDefault();
    if (allAds.some((e) => e.title === input.title)) {
      //OJO CON ESTO PORQUE SI EL TITULO YA EXISTE VA A TIRAR ERROR

      return alert('This ad already exists');
    } else {
    usePostAdMutation(input); // REVISA EL adPostMutation PARA VER SI SE IMPORTÓ CORRECTAMENTE
      alert('This ad has been created successfully');
      setInput({
        title: '',
        description: '',
        price: '',
        stock: '',
        image: '',
      });
      navigate.push('/home');
    }
  }

  return (
    <div>
      <div>
        <div>
          <div>
            <h1>Creá tu Publicación</h1>
          </div>
          <form onSubmit={(e) => handlerSubmit(e)}>
            <div>
              <div>
                <div>
                  <label className={s.Text}> Título:</label>
                  <input
                    type="text"
                    value={input.name}
                    name="name"
                    placeholder="Auto"
                    onChange={(e) => handlerChange(e)}
                    required={true}
                  />
                </div>
                <div>{errors.name && <p>{errors.name}</p>}</div>

                <div>
                  <label>Description:</label>
                  <input
                    type="text"
                    value={input.description}
                    name="description"
                    placeholder="Enter a description"
                    onChange={(e) => handlerChange(e)}
                    required={true}
                  />
                </div>
                <div>{errors.description && <p>{errors.description}</p>}</div>

                <div>
                  <label>Price:</label>
                  <input
                    type="number"
                    value={input.released}
                    name="price"
                    onChange={(e) => handlerChange(e)}
                    required={true}
                  />
                </div>
                <div>{errors.released && <p>{errors.released}</p>}</div>

                <div>
                  <label>Stock:</label>
                  <input
                    type="number"
                    value={input.rating}
                    name="stock"
                    placeholder="0.00 - 5.00"
                    min={0.0}
                    max={50000}
                    step={0.01}
                    onChange={(e) => handlerChange(e)}
                    required={true}
                  />
                </div>
                <div>{errors.rating && <p>{errors.rating}</p>}</div>

                <div>
                  <label>Image:</label>
                  <input
                    type="text"
                    value={input.image}
                    name="image"
                    placeholder="Img URL"
                    onChange={(e) => handlerChange(e)}
                    required={true}
                  />
                </div>
                {errors.image && <p>{errors.image}</p>}
              </div>
            </div>
            <Link to="/home">
              <button>Volver</button>
            </Link>
            <button
              type="submit"
              disabled={
                !input.title ||
                !input.description ||
                !input.price ||
                !input.stock ||
                !input.image
              }
            >
              Crear Publicación
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
