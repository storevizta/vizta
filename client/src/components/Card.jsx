import imageError from '../assets/imageError.svg';
const FakeIMG = 'https://picsum.photos/200/300';
// Cambie imageError por FakeIMG

export const Card = ({ info }) => {
  const { image, title, price } = info;

  return (
    <div className="flex justify-center items-center flex-col rounded-xl border border-1 border-gray-700 p-5 shadow shadow-gray-900 shadow-lg bg-slate-700">
      {!image ? (
        <img className="w-20 rounded-sm" src={FakeIMG} alt="image" />
      ) : (
        <img
          className="w-20 rounded-sm"
          src={image[0]}
          alt="image"
          onError={(e) => (e.target.src = `${FakeIMG}`)}
        />
      )}

      <div className="border-b border-gray-500 w-3/4 mt-6"></div>

      <div className="text-center text-lg text-white mt-1">{title}</div>

      <div className="text-center text-lg font-bold text-white mt-2">
        ${price}
      </div>
    </div>
  );
};
