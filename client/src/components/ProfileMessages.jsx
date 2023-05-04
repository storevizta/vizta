import { useGetUserMessagesQuery } from '../features/query/UserQuery';

import { Loading } from './Loading';

import { Error } from './Error';

import { DetailsAdvertisement } from './DetailsAdvertisement';

export const ProfileMessages = ({ userId }) => {
  const { data, error, isLoading } = useGetUserMessagesQuery(userId);

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

  return (
    <div className="p-2 flex flex-col gap-2 bg-zinc-700 rounded-2xl ml-3 w-170 overflow-auto">
      {data.length ? (
        data.map((message) => (
          <div className="bg-gray-600 rounded-2xl p-5 px-8" key={message.id}>
            <DetailsAdvertisement adId={message.AdId} />
            <div className="rounded-2xl bg-cyan-600 p-5 mt-4">
              <p className="text-lg text-gray-950 font-bold">Message: </p>
              <div className="flex pt-2">
                <p className="inline pr-20 text-lg text-gray-950">
                  {message.createdAt
                    .slice(0, 10)
                    .replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1')}
                </p>

                <div className="flex flex-column">
                  <img
                    className="brightness-0 invert h-5"
                    src="https://www.svgrepo.com/show/376813/chats-2.svg"
                  ></img>
                  <p className="inline pl-3 text-lg text-gray-950">
                    {message.message}
                  </p>
                </div>
              </div>

              <div className="flex pt-2">
                <p className="inline pr-20 text-lg text-gray-950">
                  {message.updatedAt
                    .slice(0, 10)
                    .replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1')}
                </p>

                <p className="inline pl-3 text-lg text-gray-950">
                  {message.response === null
                    ? 'No answear now'
                    : message.response}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center mt-5 text-lg">
          You haven't sent any message yet
        </p>
      )}
    </div>
  );
};
