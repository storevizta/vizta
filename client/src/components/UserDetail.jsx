import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

import { useGetUserIdQuery } from '../features/slices/userSlice';

export const UserDetail = (userId) => {
    const {id} = userId;

    const { data, error, isLoading } = useGetUserIdQuery(id);

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

     const {name, address, createdAt} = data;

     const date = createdAt.slice(0,10)

    return (
        <div>
            <p className='pl-5 pt-10 font-bold'>Seller:</p>
            <p className='pl-5 text-sm'>{name}</p>
            <p className='pl-5 text-sm'>{address}</p>
            <p className='pl-5 text-sm'>Joined in {date}</p>
        </div>
    )
}