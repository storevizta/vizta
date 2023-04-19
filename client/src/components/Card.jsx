import imageError from '../assets/imageError.svg';

export const Card = ({ info }) => {
  const { image, title, price } = info;

  return (
    <>
      <div className="">
        {!image ? (
          <img className="w-48" src={imageError} alt="image" />
        ) : (
          <img
            className="w-48"
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
