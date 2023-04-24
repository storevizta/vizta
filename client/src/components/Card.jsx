import imageError from '../assets/imageError.svg';
import { Link } from 'react-router-dom';

// Cambie imageError por FakeIMG

export const Card = ({ info }) => {
  const { image, title, price } = info;

  return (
    <div className="flex flex-col gap-1 bg-myBlue rounded-lg h-85">
        <Link to={`/detail/${info.id}`} key={info.id}>
      {!image ? (
        <img className="w-56 h-56 rounded object-cover" src={image} alt="image" />
      ) : (
        <img
          className="w-full h-56 rounded object-cover"
          src={image[0]}
          alt="image"
          onError={(e) => (e.target.src = `${imageError}`)}
        />
      )}  
        </Link> 
      <div className=""></div>

      <div className="ml-4 mt-2 h-16 w-72 break-all">{title}</div>

      <div className="ml-4 text-lg">${price}</div>

      <div className='bg-whatsapp text-white flex w-28 justify-center rounded m-2 ml-5 h-8 items-center'>
        <img className='h-3' src='https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png'/>
          <button >
            Add fav
          </button>
      </div>

    </div>
  );
};
