import { useState } from 'react';

import { useResponseMessageMutation } from '../features/query/MessagesQuery';

import swal from 'sweetalert';

export const Response = ({ id }) => {
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
    setInput({ ...input, response: '' });
  };

  return (
    <div>
      <form
        className="pt-8 flex flex-col m-auto items-center"
        onSubmit={handleSubmit}
      >
        <p className="text-lg font-bold">Response: </p>
        <textarea
          className="text-white w-full mb-5 mt-5 border-slate-400 border-2 w-5/6 h-24 p-3 rounded"
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
    </div>
  );
};
