import { Link, useParams } from 'react-router-dom';

import { useState } from 'react';

import { useGetAdByIdQuery } from '../features/query/AdsQuery';

import { useGetUserIdQuery } from '../features/query/UserQuery';

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

import { DeleteAdvertisement } from '../components/DeleteAdvertisement';

const FakeIMG = 'https://picsum.photos/200/300';
// Cambie image por FakeIMG para Mokup

export const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [currentImage, setCurrentImage] = useState(0);

  const { data, error, isLoading } = useGetAdByIdQuery(id);

  const user = useGetUserIdQuery(data?.UserId);

  const isUserBanned = useGetUserIdQuery(localStorage.getItem('id'));

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

  const sendEmail = () => {
    window.location.href = "mailto:storevizta@gmail.com"
  }

  const addToWishHandler = (info) => {
    dispatch(addToWishList(info));
  };


  return (
    <div className='flex flex-col justify-center items-center gap-5 my-5 w-full'>
      <div>
        <div className='w-200 flex flex-col justify-center'>
          <div className='flex m-5'>
          <div className="w-8/12 flex justify-center items-center">
          {image.length > 1 ? 
                <img
                  className="w-16 cursor-pointer"
                  src={rowLeft}
                  alt="row-left"
                  onClick={handlerNextImage}
                /> : null}
                {!image ? (
                  <div>
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
                          <div>
                            <img
                              className="h-100 w-150 object-cover"
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
                {image.length > 1 ? 
                <img
                  className="w-16 cursor-pointer"
                  src={rowRight}
                  alt="row-right"
                  onClick={handlerPreviousImage}
                /> : null}
              </div>
              <div className='bg-gray-600 w-6/12 p-5'>
                  <h1 className='text-4xl font-bold my-2 break-words'>{title}</h1>
                  <h1 className='text-3xl font-bold my-2'>${price}</h1>
                  <div className='my-7'>
                    <p>Product condition:</p>
                    <p className='ml-5'>{data?.condition === "New" ? <div className='flex items-center gap-2'><img className='brightness-0 invert h-5' src='https://www.svgrepo.com/show/376833/clipboard-plus.svg'></img><p>This product is NEW</p></div> : <div className='flex items-center gap-2'><img className='brightness-0 invert h-5' src='https://www.svgrepo.com/show/376832/clipboard-minus.svg'></img><p>This product is USED</p></div>}</p>
                  </div>
                  <div className='my-7'> 
                    <p>Pay methods:</p>
                    <div className='flex gap-2 ml-5'>{method.map(value => value === "Debit card" ? <div className="flex items-center"><img className='brightness-0 invert h-5' src='https://www.svgrepo.com/show/376855/creditcard.svg'/><p>{value}</p></div> : value === "Effective" ? <div className="flex items-center"><img className='brightness-0 invert h-5' src='https://www.svgrepo.com/show/376972/money-hand.svg'/><p>{value}</p></div> : value === "Credit card" ? <div className="flex items-center"><img className='brightness-0 invert h-5' src='https://www.svgrepo.com/show/376974/money.svg'/><p>{value}</p></div> : <div className="flex items-center"><img className='brightness-0 invert h-5' src='https://www.svgrepo.com/show/376969/minimize.svg'/><p>{value}</p></div>)}</div>
                  </div>
                  <div className='my-7'>
                    <p>Shipment:</p>
                    <div className='flex gap-2 ml-5'>{data?.shipment === "Yes" ? <div className='flex items-center gap-2 text-lime-600'><img className='brightness-0 invert h-5' src='https://www.svgrepo.com/show/377123/airplane.svg'/><p>The seller makes shipments</p></div> : <div className='flex items-center gap-2 text-red-800'><img className='brightness-0 invert h-5' src='https://www.svgrepo.com/show/377123/airplane.svg'/><p>The seller doesnt makes shipments</p></div>}</div>
                  </div>
                  {user?.data?.phone && isUserBanned?.data?.access !== 'Banned' && isAuthenticated ? (
                    <div>
                      <div className='flex items-center gap-5'>
                      <p className='w-36 my-5'>To buy contact for:</p>
                        <div onClick={() => whatsapp()} className="bg-whatsapp text-white flex w-28 justify-center rounded h-8 items-center gap-1">
                          <img
                            className="h-6"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png"
                          />
                          <button>Whatsapp</button>
                        </div>
                        <div className="bg-cyan-900 text-white flex w-28 justify-center items-center rounded h-8 gap-1" onClick={() => sendEmail()}>
                          <img className="brightness-0 invert h-5" src='https://www.svgrepo.com/show/376954/mail.svg'/>
                          <button>Email</button>
                        </div>
                      </div>
                      <div className='flex gap-5 items-center'>
                        <p className='w-36 my-5'>Options for user:</p>
                        <div className="bg-myBlue text-white flex w-28 justify-center items-center rounded h-8 items-center gap-1">
                          <img
                            className="h-3"
                            src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png"
                          />
                          <button onClick={() => addToWishHandler(data)}>
                            Add favorite
                          </button>
                        </div>
                        <Link to={`/reportAd/${id}`} className="bg-myBlue text-white flex w-28 justify-center rounded h-8 items-center gap-1">
                          <img className="brightness-0 invert h-5" src='https://www.svgrepo.com/show/376931/info-circle.svg'/>
                          <p>
                            Report
                          </p>
                        </Link>
                      </div>
                    </div>
              ) : 
              <div>
                      <div className='flex items-center gap-5'>
                      <p className='w-36 my-5'>To buy contact for:</p>
                        <div className="bg-cyan-900 text-white flex w-28 justify-center items-center rounded h-8 gap-1" onClick={() => sendEmail()}>
                          <img className="brightness-0 invert h-5" src='https://www.svgrepo.com/show/376954/mail.svg'/>
                          <button>Email</button>
                        </div>
                      </div>
                      <div className='flex gap-5 items-center'>
                        <p className='w-36 my-5'>Options for user:</p>
                        <div className="bg-myBlue text-white flex w-28 justify-center items-center rounded h-8 items-center gap-1">
                          <img
                            className="h-3"
                            src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png"
                          />
                          <button onClick={() => addToWishHandler(data)}>
                            Add favorite
                          </button>
                        </div>
                        <Link to={`/reportAd/${id}`} className="bg-myBlue text-white flex w-28 justify-center rounded h-8 items-center gap-1">
                          <img className="brightness-0 invert h-5" src='https://www.svgrepo.com/show/376931/info-circle.svg'/>
                          <p>
                            Report
                          </p>
                        </Link>
                      </div>
                    </div>
              }
                  {isAuthenticated && isUserBanned?.data?.role === 'admin' ? (
                <DeleteAdvertisement adId={id}/>
              ) : null}
              </div>
              </div>
              <div className='bg-gray-600 p-7'>
                <p className='text-2xl'>Description: </p>
                <p className='w-full h-auto'>{description}</p>
              </div>
              <div>
                <Messages adId={id} userId={UserId}></Messages>
              </div>
              <div className="block text-white mt-15">
                <UserDetail id={UserId} />
              </div>
              <div className='flex flex-col items-center'>
                <p className='bg-gray-600 w-full text-center m-5 h-10 text-2xl font-bold p-1'>More publications of this seller</p>
                <Cards userId={UserId}></Cards>
              </div>
            </div>
          </div>
    </div>
  );
};
