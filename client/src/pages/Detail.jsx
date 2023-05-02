import { Link, useParams } from 'react-router-dom';

import { useState } from 'react';

import { useGetAdByIdQuery } from '../features/query/AdsQuery';

import { useGetUserIdQuery } from "../features/query/UserQuery"

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

import { Cards } from '../components/Cards';

import { UserDetail } from '../components/UserDetail';

import { Messages } from '../components/Messages';

import rowLeft from '../assets/row-left.svg';

import rowRight from '../assets/row-right.svg';

import { useDispatch } from 'react-redux';

import { addToWishList } from '../features/slices/FavSlices';

import { useAuth0 } from '@auth0/auth0-react';

const FakeIMG = 'https://picsum.photos/200/300';
// Cambie image por FakeIMG para Mokup

export const Detail = () => {
  const { id } = useParams();
  
  const dispatch = useDispatch();
  
  const [currentImage, setCurrentImage] = useState(0);
  
  const { data, error, isLoading } = useGetAdByIdQuery(id);
  
  const user = useGetUserIdQuery(data?.UserId)

  const isUserBanned = useGetUserIdQuery(localStorage.getItem("id"))

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  

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

  if (user.isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  }

  if (user.isError) {
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

  
  const whatsapp = () => {
    window.location.href = `https://wa.me/${user.data.phone}`;
  };

  return (
    <div className="w-2/3 m-auto">
      <div>
        <div className="flex flex-row content-stretch" key={id}>
          <div className="flex justify-center items-center">
            <img
              className="w-16"
              src={rowLeft}
              alt="row-left"
              onClick={handlerNextImage}
            />
            {!image ? (
              <div className="h-100 w-150">
                <img
                  className="object-cover w-full h-full"
                  src={FakeIMG}
                  alt="image"
                />
              </div>
            ) : (
              image.map((image, index) => {
                return (
                  <div key={index}>
                    {currentImage === index && (
                      <div className="h-100 w-150">
                        <img
                          className="object-contain w-full h-full"
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
          <div className="w-100 h-120 break-words basis-1/3 pl-15 ml-3 bg-zinc-700 block ml-15 rounded-md">
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
                {method?.map((method, index) => {
                  return (
                    <li key={index} className="inline text-white pb-15 pl-5">
                      {method}
                    </li>
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

            <div className="flex justify-center">
            {user?.data?.phone && isUserBanned?.data?.access !== "Banned"?
              <div className="bg-whatsapp text-white flex w-28 justify-center rounded m-2 ml-5 h-8 items-center">
                <img
                  className="h-6"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png"
                />
                <button onClick={() => whatsapp()}>Whatsapp</button>
              </div>
            : null}

              {isAuthenticated && isUserBanned?.data?.access !== "Banned" ? (
                <div className="bg-myBlue text-white flex w-28 justify-center rounded m-2 ml-5 h-8 items-center">
                  <img
                    className="h-3"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png"
                  />
                  <button onClick={() => addToWishHandler(data)}>
                    Add favorite
                  </button>
                </div>
              ) : null}
            </div>

            <div className="block text-white mt-15">
              <UserDetail id={UserId} />
            </div>
          </div>
        </div>
        {isUserBanned?.data?.access !== "Banned" ? 
        <Link to={`/reportAd/${id}`}>
          <p className="font-bold border p-2 rounded w-fit">
            Report Advertisement
          </p>
        </Link>: null}
      </div>

      <Messages adId={id} userId={UserId} />
      <div className="mt-5 mb-5">
        <div className="bg-slate-700 pt-3 pb-3 text-lg">
          <h2 className="font-bold text-center">
            Other publications from this Seller
          </h2>
        </div>

        <Cards userId={UserId} />
      </div>
    </div>
  );
};
