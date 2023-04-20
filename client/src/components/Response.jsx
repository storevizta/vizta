import { useState } from 'react';

import { useResponseMessageMutation } from '../features/query/MessagesQuery';

import { useNavigate } from 'react-router-dom';

import swal from 'sweetalert';

export const Response = ({ id, response }) => {
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
        <form onSubmit={handleSubmit}>
          <p>Response: </p>
          <textarea
            onChange={handleInput}
            value={input.response}
            placeholder="Response..."
          />
          <button type="submit">Send</button>
        </form>
      ) : (
        <p>{response}</p>
      )}
    </div>
  );
};
