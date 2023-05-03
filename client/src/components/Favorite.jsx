import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { removeWishlist } from '../features/slices/FavSlices';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Favorite = ({ wishlist }) => {
  const dispatch = useDispatch();

  const { id, image, title, price } = wishlist || {};

  const removeWishlishHandler = (wishlist) => {
    dispatch(removeWishlist(wishlist));
  };

  return (
    <div class="flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-xl dark:bg-myBlue ">
      <Link to={`/detail/${id}`}>
        <img
          class="object-cover w-full rounded-t-lg h-96 mx-2 my-1 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image}
          alt=""
        />
      </Link>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <Link to={`/detail/${id}`}>
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h3>
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            $ {price}
          </h4>
        </Link>
        <div className="flex flex-row  items-center py-1">
          <button
            onClick={() => removeWishlishHandler(wishlist)}
            className="dark:text-rose-600"
          >
            <FontAwesomeIcon className="text-red-600" icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};
