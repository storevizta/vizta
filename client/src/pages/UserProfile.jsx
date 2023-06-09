import { useParams } from 'react-router-dom';

import { useGetUserIdQuery } from '../features/query/UserQuery';

import { useGetUserAdsQuery } from '../features/query/UserQuery';

import { useAuth0 } from '@auth0/auth0-react';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

import { Card } from '../components/Card';

import { Link } from 'react-router-dom';

export const UserProfile = () => {
  const { id } = useParams();

  const { user, isLoadingUser } = useAuth0();

  const { data, error, isLoading } = useGetUserIdQuery(id);

  const isUserBanned = useGetUserIdQuery(localStorage.getItem('id'));

  const { data: dataAds, isLoadingAds } = useGetUserAdsQuery(id);

  if (isLoadingUser) {
    return <div>Loading ...</div>;
  }

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

  if (isLoadingAds) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className='m-10'>
      {isUserBanned?.data?.access === "Banned" ?  <div className='flex flex-col items-center justify-center m-52'><h1 className='text-5xl font-bold'>You are banned</h1><p>You cant access here</p></div> :
      <div className="w-2/3 m-auto place-items-center">
      <div className=" p-2 flex flex-col items-center gap-2 bg-zinc-700 rounded-2xl ml-3 pb-10">
        <div className="flex gap-2 items-center mt-5">
          <img
            className="w-16 h-16 object-cover rounded-full"
            src={data?.picture}
            alt={data?.name}
          />
          <p className="text-slate-50 text-5xl">{data?.name}</p>
        </div>

        <div className="flex flex-row justify-between">
          <Link to={`/reportUser/${id}`}>
            <p className="mr-5 font-bold border mt-2 p-2 rounded w-fit bg-white text-sm text-right text-black">
              Report User
            </p>
          </Link>
          {data?.user?.sub !== id ? (
            <Link to={`/rating/${id}`}>
              <p className="font-bold border mt-2 p-2 rounded w-fit bg-white text-sm text-right text-black">
                To give a Rating
              </p>
            </Link>
          ) : null}
        </div>

        {data?.nickname && (
          <div className="flex w-150 pt-5">
            <label className="ml-5 w-full font-bold text-lg">Nickname:</label>
            <p className="w-full text-rigth mr-5 text-lg">{data?.nickname}</p>
          </div>
        )}

        <div className="divider"></div>

        <div className="flex w-150">
          <label className="ml-5 w-full font-bold text-lg">Email:</label>
          <p className="w-full text-rigth mr-5 text-lg">{data?.email}</p>
        </div>

        <div className="divider"></div>

        {data?.address && (
          <div className="flex w-150">
            <label className="ml-5 w-full font-bold text-lg">Address:</label>
            <p className="w-full text-rigth mr-5 text-lg">
              {data?.address[0]?.country}, {data?.address[0]?.province},{' '}
              {data?.address[0]?.municipality}
            </p>
          </div>
        )}

        <div className="divider"></div>

        <div className="flex w-150">
          <label className="ml-5 w-full font-bold text-lg">
            Joined Vizta
          </label>
          <p className="w-full text-rigth mr-5 text-lg">
            {data?.createdAt
              .slice(0, 10)
              .replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1')}
          </p>
        </div>

        <div className="divider"></div>

        <label className="text-xl font-bold">User Advertisements: </label>
        {dataAds && dataAds.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <div className="grid grid-cols-3">
            {dataAds &&
              dataAds.map((el) => (
                <div className="m-3">
                  <Card info={el} />
                </div>
              ))}
          </div>
        )}
      </div>
    </div> }
    </div>
  );
};
