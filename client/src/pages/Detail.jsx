import { useParams } from 'react-router-dom';

import { useGetAdByIdQuery } from '../features/slices/adsSlice';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

import { Navbar } from "../components/Navbar";

import { UserDetail } from '../components/UserDetail';

import { useGetUserByIdQuery } from '../features/slices/userSlice';

export const Detail = () => {
  const { id , userId } = useParams();

  const { data, error, isLoading } = useGetAdByIdQuery(id);

  const { dataUser, errorUser, isLoadingUser } = useGetUserByIdQuery(userId);

  if (isLoading || isLoadingUser)
    return (
      <div>
        <Loading />
      </div>
    );

  if (error || errorUser)
    return (
      <div>
        <Error />
      </div>
    );

  const { title, image, description, stock, price, oldPrice, discount, UserId} = data;

 

  return (

    <div>
      <Navbar />
      <div>
        <div key={id} className="bg-stone-300 p-15 w-9/12">

        <div className='grid grid-rows-2 gap-2'>
          <img src={image} alt="image not found" className="block w-1/2 px-10 item-center" />

          <div className='block w-1/2'>

            <h1 className='text-center text-4xl py-10 my-10 font-bold uppercase'>{title}</h1>

            <span className='p-15'>${price}</span>

             <div>
              <p>Description: </p>
              <p>{description}</p>
            </div>

            <div>
              <p className="inline">Stock: </p>
              <p className='inline'>{stock}</p>
            </div> 
    
            <div>
              <UserDetail id={userId} />
            </div>
          </div>
        </div>
        
      </div>
      </div>
      
  </div>
  );
};
