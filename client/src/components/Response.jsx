import { useState } from 'react';

import { useResponseMessageMutation } from '../features/query/MessagesQuery';

import swal from 'sweetalert';

export const Response = ({ id, response, updatedAt }) => {
  const [responseMessage] = useResponseMessageMutation();

  const [input, setInput] = useState({
    response: '',
    messageId: id,
  });

  const handleInput = (e) => {
    setInput({ ...input, response: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    responseMessage({
      response: input.response,
      messageId: input.messageId,
    })
      .unwrap()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    swal('Response sent');
  };

  return (
    <div>
      {!response ? (
        <form
          className="pt-8 flex flex-col m-auto items-center"
          onSubmit={handleSubmit}
        >
          <p className="text-lg font-bold">Response: </p>
          <textarea
            className="text-black w-full mb-5 mt-5 border-slate-400 border-2 w-5/6 h-24 p-3 rounded"
            onChange={handleInput}
            value={input.response}
            placeholder="Response..."
          />
          <button
            className="p-3 rounded bg-zinc-700 text-white w-40"
            type="submit"
          >
            Send
          </button>
        </form>
      ) : (
        <div className="flex justify-between border-solid">
          <p className="inline">
            {updatedAt
              .slice(0, 10)
              .replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1')}
          </p>
          <p className="inline">{response}</p>
          <p className="inline">Denunciar</p>
        </div>
      )}
    </div>
  );
};
