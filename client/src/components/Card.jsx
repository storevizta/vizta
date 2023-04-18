import imageError from '../assets/imageError.svg';

export const Card = ({ info }) => {
  const { image, title, price } = info;

  return (
    <>
      <div className="flex justify-center items-center flex-col outline">
        {!image ? (
          <img className="w-20" src={imageError} alt="image" />
        ) : (
          <img
            className="w-20"
            src={image[0]}
            alt="image"
            onError={(e) => (e.target.src = `${imageError}`)}
          />
        )}

        <div className="text-lg text-white">{title}</div>
        <div className="text-lg font-bold text-white">${price}</div>
      </div>
    </>
  );
};
