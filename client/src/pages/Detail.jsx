import { useParams } from 'react-router-dom';

import { Link } from "react-router-dom"

import { useGetAdByIdQuery } from '../features/slices/adsSlice';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

import { Navbar } from '../components/Navbar';

import { UserDetail } from '../components/UserDetail';

import imageError from '../assets/imageError.svg';

import atras from "../assets/row-left.svg";

export const Detail = () => {
  const { id , userId} = useParams();

  const { data, error, isLoading } = useGetAdByIdQuery(id);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  const { title, image, description, price, oldPrice, discount, condition, state } = data;

  return (
    <div>
      <Navbar />
      <Link to="/home">
          <img src={atras} alt="atras" className='pl-5 w-12'/>
      </Link>
      
      <div className="flex items-stretch w-4/5 m-auto" key={id}>
        <img src={image || imageError} className="basis-2/3 rounded-md"alt="image not found" />
        <div className='basis-1/3 pl-15 ml-3 bg-zinc-700 block ml-15 rounded-md'>
          <h1 className='font-bold text-white pl-5 text-3xl pt-3'>{title}</h1>

          <div>
            <p className='pl-5 text-white'>$ {price}</p>
          </div>

          <div>
            <p className='pl-5 text-white font-bold pt-5'>Description: </p>
            <p className='pl-8 text-white pb-3'>{description}</p>
          </div>

          <div>
            <p className='font-bold text-white pl-5 inline'>Condition: </p>
            <p className='inline text-white'> {condition}</p>
          </div>

          <div>
            <p className='inline text-white font-bold pl-5'>State: </p>
            <p className='inline text-white pb-15'>{state}</p>
          </div>
          
          <div className='block text-white mt-15'>
              <UserDetail id={userId}/>
          </div>
        </div>
        
      </div>

    </div>
  );
};
