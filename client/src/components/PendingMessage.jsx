import { useGetMessageByAdIdQuery } from '../features/query/MessagesQuery';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { Response } from './Response';

export const PendingMessage = ({ adId }) => {
  const { data, error, isLoading } = useGetMessageByAdIdQuery(adId);

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

  const mensajesSinResponder = data?.filter(
    (message) => message.response === null
  );

  return (
    <div className="p-2 mt-4 flex flex-col gap-2 bg-zinc-700 rounded-2xl w-170">
      {mensajesSinResponder.length ? (
        mensajesSinResponder.map((message) => (
          <div className="bg-gray-600 rounded-2xl px-10 overflow-auto">
            <p className="pt-2 text-lg mt-4">Messages: </p>
            <div className="flex pt-2">
              <p className="inline pr-20 text-lg">
                {message.createdAt
                  .slice(0, 10)
                  .replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1')}
              </p>

              <div className="flex flex-column">
                <img
                  className="brightness-0 invert h-5"
                  src="https://www.svgrepo.com/show/376813/chats-2.svg"
                ></img>
                <p className="inline pl-3 text-lg">{message.message}</p>
              </div>
            </div>
            <Response id={message.id} />
          </div>
        ))
      ) : (
        <p className="text-center mt-5">You have no messages to reply to</p>
      )}
    </div>
  );
};
