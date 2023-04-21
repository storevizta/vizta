import { useState } from 'react';

import { useGetUserMessagesQuery } from '../features/query/UserQuery';

import { Loading } from './Loading';

import { Error } from './Error';

import question from '../assets/question.svg';

import { Response } from './Response';

export const ProfileMessages = ({ userId }) => {
  const { data, error, isLoading } = useGetUserMessagesQuery(userId);

  console.log(data);

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
    <div>
      {mensajesSinResponder.length ? (
        mensajesSinResponder.map((message) => (
          <div
            className="border-b-4 border-slate-400 pt-3 pb-3 pr-4 pl-4"
            key={message.id}
          >
            <div className="flex justify-between">
              <p className="inline pr-20">
                {message.createdAt
                  .slice(0, 10)
                  .replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1')}
              </p>

              <div className="flex flex-column">
                <img
                  className="w-5 inline"
                  src={question}
                  alt="icon question"
                />
                <p className="inline pl-3">{message.message}</p>
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
