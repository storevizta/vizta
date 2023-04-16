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
            src={image}
            alt="image"
            onError={(e) => (e.target.src = `${imageError}`)}
          />
        )}

        <div>{title}</div>
        <div>{price}</div>
      </div>
    </>
  );
};
