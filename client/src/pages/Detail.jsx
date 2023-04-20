import { useParams } from 'react-router-dom';

import { useState } from 'react';

import { Link } from 'react-router-dom';

import { useGetAdByIdQuery } from '../features/query/AdsQuery';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

import { Cards } from '../components/Cards';

import { UserDetail } from '../components/UserDetail';

import { Messages } from '../components/Messages';

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
      <div className="flex flex-row content-stretch w-2/3 m-auto" key={id}>
        <div className="flex justify-center items-center">
          <img
            className="w-16"
            src={rowLeft}
            alt="row-left"
            onClick={handlerNextImage}
          />
          {!image ? (
            <div className='object-cover h-100 w-150'>
              <img className="w-full h-full" src={FakeIMG} alt="image" />
            </div>
          ) : (
            image.map((image, index) => {
              return (
                <div key={index}>
                  {currentImage === index && (
                    <div className='object-cover h-100 w-150'>
                      <img
                        className="w-full h-full"
                        src={image}
                        key={index}
                        alt="image"
                      />
                    </div>
                  )}
                </div>
              );
            })
          )}
          <img
            className="w-16"
            src={rowRight}
            alt="row-right"
            onClick={handlerPreviousImage}
          />
        </div>

        <div className="basis-1/3 pl-15 ml-3 bg-zinc-700 block ml-15 rounded-md">
          <h1 className="font-bold text-white pl-5 text-3xl pt-3 pr-3">
            {title}
          </h1>

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
      <Messages adId={id} userId={UserId} />
      <div className="w-2/3 m-auto mt-5 mb-5">
        <div className="bg-slate-400 pt-3 pb-3 text-lg">
          <h2 className="font-bold text-center">
            Other publications from this Seller
          </h2>
        </div>

        <Cards userId={UserId} />
      </div>
    </div>
  );
};
