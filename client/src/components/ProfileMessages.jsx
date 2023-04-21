import { useState } from 'react';

import { useGetMessageQuery } from '../features/query/MessagesQuery';

import { Loading } from './Loading';

import { Error } from './Error';

import question from '../assets/question.svg';

import { Response } from './Response';

export const ProfileMessages = ({ userId }) => {
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

  console.log(userId);

  const messages = data.filter((message) => message.UserId === userId);

  const mensajesSinResponder = messages?.filter(
    (message) => message.response === null
  );

  console.log(mensajesSinResponder);

  return (
    <div>
      {mensajesSinResponder.map((message) => {
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
              <img className="w-5 inline" src={question} alt="icon question" />
              <p className="inline pl-3">{message.message}</p>
            </div>
          </div>
        </div>;
      })}

      <Response id={messages[0].id} />
    </div>
  );
};
