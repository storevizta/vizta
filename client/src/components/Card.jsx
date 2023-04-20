import imageError from '../assets/imageError.svg';
const FakeIMG = 'https://picsum.photos/200/300';
// Cambie imageError por FakeIMG

export const Card = ({ info }) => {
  const { image, title, price } = info;

  return (
    <div className="">
      {!image ? (
        <img className="" src={image} alt="image" />
      ) : (
        <img
          className=""
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
