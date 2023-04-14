import styled from 'styled-components';
import { useState } from 'react';

export const Post = () => {
  const { input, setInput } = useState({
    title: '',
    description: '',
    price: '',
    stock: '',
    image: '',
  });

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
                <div>
                  {errors.name && (
                    <p className={s.TextContainer}>{errors.name}</p>
                  )}
                </div>

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
                <div>
                  {errors.description && (
                    <p className={s.TextContainer}>{errors.description}</p>
                  )}
                </div>

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
                <div>
                  {errors.released && (
                    <p className={s.TextContainer}>{errors.released}</p>
                  )}
                </div>

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
                <div>
                  {errors.rating && (
                    <p className={s.TextContainer}>{errors.rating}</p>
                  )}
                </div>

                <div>
                  <label className={s.Text}>Image:</label>
                  <input
                    type="text"
                    value={input.image}
                    name="image"
                    placeholder="Img URL"
                    onChange={(e) => handlerChange(e)}
                    required={true}
                  />
                </div>
                {errors.image && (
                  <p className={s.TextContainer}>{errors.image}</p>
                )}
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
