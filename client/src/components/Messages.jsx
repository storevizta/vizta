import { useGetMessageQuery } from '../features/query/MessagesQuery';

import { CreateMessage } from './CreateMessage';

import { Response } from './Response';

import { Loading } from '../components/Loading';

import { Error } from '../components/Error';

export const Messages = ({ adId, userId }) => {
  const { data, error, isLoading } = useGetMessageQuery();

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

  const messages = data.filter((message) => message.AdId === adId);

  return (
    <div>
      <p>Messages to the seller</p>
      {messages?.map((message) => (
        <div key={message.id}>
          <p>{message.message}</p>
          <Response id={message.id} response={message.response} />
        </div>
      ))}
      <CreateMessage userId={userId} adId={adId} />
    </div>
  );
};
