import { useGetMessageByAdIdQuery } from '../features/query/MessagesQuery';

import { useGetUserIdQuery } from '../features/query/UserQuery';

import { CreateMessage } from './CreateMessage';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

import question from '../assets/question.svg';

export const Messages = ({ adId, userId }) => {
  const { data, error, isLoading } = useGetMessageByAdIdQuery(adId);

  const isUserBanned = useGetUserIdQuery(localStorage.getItem('id'));

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
    <div className="mt-5">
      <div className="bg-slate-700 pt-3 pb-3 text-lg">
        <h2 className="font-bold text-center">Messages to the seller</h2>
      </div>
      {data?.map((message) => (
        <div
          className="border-b-4 border-slate-400 pt-3 pb-3 pr-4 pl-4"
          key={message.id}
        >
          <div className="flex justify-between" key={message.id}>
            <p className="inline">
              {message.createdAt
                .slice(0, 10)
                .replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1')}
            </p>

            <div>
              <img className="w-5 inline" src={question} alt="icon question" />
              <p className="inline pl-3">{message.message}</p>
            </div>

            <p></p>
          </div>
          {message.response ? (
            <div className="flex justify-between">
              <p className="inline">
                {message.updatedAt
                  .slice(0, 10)
                  .replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1')}
              </p>

              <p className="inline pl-3">{message.response}</p>
              <p></p>
            </div>
          ) : (
            <p className="text-center">No answer now</p>
          )}
        </div>
      ))}
      {isUserBanned?.data?.access !== 'Banned' ? (
        <CreateMessage userId={userId} adId={adId} />
      ) : (
        <p className="flex flex-col items-center m-5">
          You are banned, you cant send a message
        </p>
      )}
    </div>
  );
};
