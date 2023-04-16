import { useGetUserIdQuery } from "../features/slices/userSlice"

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

export const UserDetail = (userId) => {
    const {id} = userId;

    const {data, error, isLoading} = useGetUserIdQuery(id)

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

    const {name, address, createdAt} = data;

    const created = createdAt.slice(0,10);

    return (
        <div>
            <p className="font-bold mt-10 pl-5">Seller: </p>
            <p className="text-sm pl-8">{name}</p>
            <p className="text-sm pl-8">{address}</p>
            <p className="text-sm pl-8">{created}</p>
        </div>
    )
}