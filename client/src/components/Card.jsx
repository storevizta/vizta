import imageError from '../assets/imageError.svg';

// Cambie imageError por FakeIMG

export const Card = ({ info }) => {
  const { image, title, price } = info;

  return (
    <div className="flex flex-col gap-1 bg-myBlue rounded-lg h-80">
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

      <div className="m-2">{title}</div>

      <div className="m-2">${price}</div>
    </div>
  );
};
