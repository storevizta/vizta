import { useCreateMessageMutation } from '../features/query/MessagesQuery';

import swal from 'sweetalert';

import { useState } from 'react';

export const CreateMessage = (props) => {
  const [createMessage] = useCreateMessageMutation();

  const { userId, adId } = props;

  const [data, setData] = useState({
    message: '',
    userId: userId,
    adId: adId,
  });

  const [activeMessage, setActiveMessage] = useState(false);

  const handleActiveMessage = () => {
    setActiveMessage(true);
  };

  const handleInput = (e) => {
    setData({ ...data, message: e.target.value });
  };

  const handleClose = () => {
    setActiveMessage(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMessage({
      userId: data.userId,
      adId: data.adId,
      message: data.message,
    })
      .unwrap()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    swal('Message sent');
  };

  return (
    <div>
      {activeMessage === true ? (
        <div>
          <button onClick={handleClose}>X</button>
          <form
            className="flex flex-col w-2/3 m-auto items-center mt-5"
            onSubmit={handleSubmit}
          >
            <label>Message: </label>
            <textarea
              className="text-black w-full mb-5 mt-5"
              value={data.message}
              onChange={handleInput}
              placeholder="Message..."
            ></textarea>
            <button
              type="submit"
              className="p-3 rounded bg-zinc-700 text-white w-40"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <button onClick={handleActiveMessage}>To send a message</button>
      )}
    </div>
  );
};
