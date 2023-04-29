import imageError from '../assets/imageError.svg';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { addToWishList } from '../features/slices/FavSlices';

import { useAuth0 } from '@auth0/auth0-react';

import { useGetUserIdQuery } from '../features/query/UserQuery';

import { useDeleteUserMutation } from '../features/query/AdminQuery';

// Cambie imageError por FakeIMG

export const Card = ({ info }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const [deleteUser] = useDeleteUserMutation();

  const dispatch = useDispatch();

  const {
    data: dataUserId,
    error: errorUserId,
    isLoading: isLoadingUserId,
  } = useGetUserIdQuery(isAuthenticated.sub);

  const { image, title, price } = info;

  const deleteCardHandler = async (id) => {
  try {
    await deleteUser(id);
    // Aquí podrías actualizar tu lista de cards eliminando la que acaba de ser eliminada
  } catch (error) {
    console.error(error);
    // Manejo de errores aquí
  }
};

  const addToWishHandler = (info) => {
    dispatch(addToWishList(info));
  };

  return (
    <div className="flex flex-col gap-1 bg-myBlue rounded-lg h-85">
      <Link to={`/detail/${info.id}`} key={info.id}>
        {!image ? (
          <img
            className="w-56 h-56 rounded object-cover"
            src={image}
            alt="image"
          />
        ) : (
          <img
            className="w-full h-56 rounded object-cover"
            src={image[0]}
            alt="image"
            onError={(e) => (e.target.src = `${imageError}`)}
          />
        )}
      </Link>
      <div className="ml-4 mt-2 h-16 w-72 break-all">{title}</div>

      <div className="ml-4 text-lg">${price}</div>

      {isAuthenticated ? (
        <div className="bg-zinc-600 hover:bg-red-500/90 text-white flex w-28 justify-center rounded m-2 ml-5 h-8 items-center">
          <img
            className="h-3"
            src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png"
          />
          <button onClick={() => addToWishHandler(info)}>Add favorite</button>
        </div>
      ) : (
        <div className="bg-zinc-600 hover:bg-red-500/90 text-white flex w-28 justify-center rounded m-2 ml-5 h-8 items-center">
          <img
            className="h-3"
            src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png"
          />
          <button onClick={() => loginWithRedirect()}>Add favorite</button>
        </div>
      )}

{dataUserId.role === 'admin' ? (
  <div className="bg-red-500 text-white flex w-28 justify-center rounded m-2 ml-5 h-8 items-center">
    <button onClick={() => deleteCardHandler(info.id)}>X</button>
  </div>
   ) : null}
    </div>
  );
};
