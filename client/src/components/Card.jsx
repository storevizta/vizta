import imageError from '../assets/imageError.svg';

// Cambie imageError por FakeIMG

export const Card = ({ info }) => {
  const { image, title, price } = info;

  return (
    <div className="flex flex-col gap-1 bg-myBlue rounded-lg h-85">
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
      <div className=""></div>

      <div className="ml-4 mt-2 h-16 w-72 break-all">{title}</div>

      <div className="ml-4 text-lg">${price}</div>

    </div>
  );
};
