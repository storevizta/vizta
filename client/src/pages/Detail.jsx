import { useParams } from 'react-router-dom';

import { useState } from 'react';

import { Link } from 'react-router-dom';

import { useGetAdByIdQuery } from '../features/query/AdsQuery';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

import { UserDetail } from '../components/UserDetail';

import { CreateMessage } from '../components/CreateMessage';

import imageError from '../assets/imageError.svg';

import rowLeft from '../assets/row-left.svg';

import rowRight from '../assets/row-right.svg';

const FakeIMG = 'https://picsum.photos/200/300';
// Cambie image por FakeIMG para Mokup

export const Detail = () => {
  const { id } = useParams();

  const [currentImage, setCurrentImage] = useState(0);

  const { data, error, isLoading } = useGetAdByIdQuery(id);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Error />
      </div>
    );
  }

  const {
    title,
    image,
    description,
    price,
    oldPrice,
    discount,
    condition,
    state,
    method,
    shipment,
    UserId,
  } = data;

  const numberImage = image?.length;

  const handlerNextImage = (e) => {
    setCurrentImage(currentImage === numberImage - 1 ? 0 : currentImage + 1);
  };

  const handlerPreviousImage = (e) => {
    setCurrentImage(currentImage === 0 ? numberImage - 1 : currentImage - 1);
  };

  return (
    <div>
      <Link to="/home">
        <img src={rowLeft} alt="atras" className="pl-5 w-12" />
      </Link>

      <div className="flex flex-row content-stretch w-2/3 m-auto" key={id}>
        <div className="flex items-stretch basis-2/3">
          <img
            className="w-12"
            src={rowLeft}
            alt="row-left"
            onClick={handlerNextImage}
          />
          {!image ? (
            <img src={FakeIMG} alt="image" />
          ) : (
            image.map((image, index) => {
              return (
                <div key={index}>
                  {currentImage === index && (
                    <img src={image} key={index} alt="image" />
                  )}
                </div>
              );
            })
          )}
          <img
            className="w-12"
            src={rowRight}
            alt="row-right"
            onClick={handlerPreviousImage}
          />
        </div>

        <div className="basis-1/3 pl-15 ml-3 bg-zinc-700 block ml-15 rounded-md">
          <h1 className="font-bold text-white pl-5 text-3xl pt-3">{title}</h1>

          <div>
            <p className="pl-5 text-white">$ {price}</p>
          </div>

          <div className="pb-4 pr-5">
            <p className="pl-5 text-white font-bold pt-5">Description: </p>
            <p className="pl-8 text-white pb-3">{description}</p>
          </div>

          <div className="pb-4">
            <p className="font-bold text-white pl-5 inline">Condition: </p>
            <p className="inline text-white"> {condition}</p>
          </div>

          <div className="pb-4">
            <p className="inline text-white font-bold pl-5">State: </p>
            <p className="inline text-white">{state}</p>
          </div>

          <div className="pb-4">
            <p className="inline text-white font-bold pl-5">
              Payment Methods:{' '}
            </p>
            <ul>
              {method?.map((method) => {
                return (
                  <li className="inline text-white pb-15 pl-5">{method}</li>
                );
              })}
            </ul>
          </div>

          <div className="pb-4">
            <p className="inline text-white font-bold pl-5">
              Make home deliveries:{' '}
            </p>
            <p className="inline text-white pb-15">{shipment}</p>
          </div>

          <div className="block text-white mt-15">
            <UserDetail id={UserId} />
          </div>
        </div>
      </div>

      <CreateMessage userId={UserId} adId={id} />
    </div>
  );
};
