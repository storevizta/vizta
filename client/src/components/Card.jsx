import imageError from '../assets/imageError.svg';

export const Card = ({ info }) => {
  const { image, title, price } = info;

  return (
    <>
      <div className="flex justify-center items-center flex-colo outline outline-black outline-1">
        <img
          className="w-20"
          src={image}
          alt="image"
          onError={(e) => (e.target.src = `${imageError}`)}
        />
        <div>{title}</div>
        <div>{price}</div>
      </div>
    </>
  );
};
