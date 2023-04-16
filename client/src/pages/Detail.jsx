import { useParams } from 'react-router-dom';

import { useGetAdByIdQuery } from '../features/slices/adsSlice';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

import { Navbar } from "../components/Navbar";

import { UserDetail } from '../components/UserDetail';

export const Detail = () => {
  const { id , userId} = useParams();

  const { data, error, isLoading } = useGetAdByIdQuery(id);

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );

  if (error)
    return (
      <div>
        <Error />
      </div>
    );

  const { title, image, description, price, oldPrice, discount, condition, state } = data;

  return (
    <>
    <div>
      < Navbar />
      <div key={id}>
        <img src={image} alt="image not found" />
        <div>
          <h1>{title}</h1>

          <div>
            <h2>{price}</h2>
          </div>

          <div>
            <p>Description: </p>
            <h4>{description}</h4>
          </div>

          <div>
            <p>Condition: </p>
            <h3>{condition}</h3>
          </div>

          <div>
            <p>State: </p>
            <p>{state}</p>
          </div>
          
          <UserDetail id={userId}/>

        </div>
        
      </div>
    </div>
      
    </>
  );
};
