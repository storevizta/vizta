import imageError from '../assets/imageError.svg';

export const Card = ({ info }) => {
  const { image, title, price } = info;

  return (
    <>
      <div className="flex flex-col gap-1">
        {!image ? (
          <img className="w-48 h-48 rounded-3xl" src={imageError} alt="image" />
        ) : (
          <img
            className="w-48 h-48 rounded-3xl"
            src={image[0]}
            alt="image"
            onError={(e) => (e.target.src = `${imageError}`)}
          />
        )}
        <div>{title}</div>
        <div>${price}</div>
      </div>
    </>
  );
};
