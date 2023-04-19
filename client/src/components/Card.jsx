import imageError from '../assets/imageError.svg';
const FakeIMG = 'https://picsum.photos/200/300';
// Cambie imageError por FakeIMG

export const Card = ({ info }) => {
  const { image, title, price } = info;

  return (
    <div className="flex justify-center items-center flex-col rounded-xl border border-1 p-5">
      {!image ? (
        <img className="w-20" src={FakeIMG} alt="image" />
      ) : (
        <img
          className="w-20"
          src={image[0]}
          alt="image"
          onError={(e) => (e.target.src = `${FakeIMG}`)}
        />
      )}

      <div className="text-lg text-white">{title}</div>
      <div className="text-lg font-bold text-white">${price}</div>
    </div>
  );
};
