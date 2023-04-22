import { useState } from 'react';

import { useGetUserMessagesQuery } from '../features/query/UserQuery';

import { Loading } from './Loading';

import { Error } from './Error';

import question from '../assets/question.svg';

import { Response } from './Response';

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

  console.log(data);

  const mensajesSinResponder = data?.filter(
    (message) => message.response === null
  );

  return (
    <div className="p-2 flex flex-col gap-2 bg-zinc-700 rounded-2xl ml-3 w-150">
      {mensajesSinResponder.length ? (
        mensajesSinResponder.map((message) => (
          <div className="bg-gray-600 rounded-2xl p-10">
            <DetailsAdvertisement adId={message.AdId} />
            <p className="pt-3 text-lg">Messages: </p>
            <div className="flex pt-3">
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
        <p>You have no messages to reply to</p>
      )}
    </div>
  );
};
