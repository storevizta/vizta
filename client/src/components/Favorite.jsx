import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeWishlist } from "../features/slices/FavSlices";


export const Favorite = ({wishlist}) => {

  const { id, image, title, price, category } = wishlist || {}


  const dispatch = useDispatch();
  const navigate = useNavigate();

  // remove wish item
  const removeWishlishHandler = (wishlist) => {
      dispatch(removeWishlist(wishlist));
  }



  return (
    <div class="flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-xl dark:bg-gray-900 ">
      <Link to={`/detail/${id}`}>
        <img
          class="object-cover w-full rounded-t-lg h-96 mx-2 my-1 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image}
          alt=""
          />
        </Link>
      <div class="flex flex-col justify-between p-4 leading-normal">
      <Link to={`/detail/${id}`}>
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h3>
        <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          $ {price}
        </h4>
        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">
          {category}
        </p>
        </Link>
        <div className="flex flex-row  items-center py-1">
          <button onClick={() => removeWishlishHandler(wishlist)}
            className="dark:text-rose-600"
          >  Remove
          </button>
        </div>
      </div>
    </div>
  );
};
