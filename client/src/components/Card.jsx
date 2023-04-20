import imageError from '../assets/imageError.svg';
const FakeIMG = 'https://picsum.photos/200/300';
// Cambie imageError por FakeIMG

export const Card = ({ info }) => {
  const { image, title, price } = info;

  return (
    <div className="flex flex-col gap-1">
      {!image ? (
        <img className="w-56 h-56 rounded" src={image} alt="image" />
      ) : (
        <img
          className="w-56 h-56 rounded"
          src={image[0]}
          alt="image"
          onError={(e) => (e.target.src = `${FakeIMG}`)}
        />
      )}
      <div className=""></div>

      <div className="">{title}</div>

      <div className="">${price}</div>
    </div>
  );
};
