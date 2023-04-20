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
        <div className="border-slate-400 border-2 pb-5">
          <button
            className="bg-red-600 mt-3 ml-3 py-1 px-2 rounded text-white"
            onClick={handleClose}
          >
            X
          </button>
          <form
            className="flex flex-col m-auto items-center mt-5 "
            onSubmit={handleSubmit}
          >
            <label className="font-bold text-lg">Message: </label>
            <textarea
              className="text-black w-full mb-5 mt-5 border-slate-400 border-2 rounded w-5/6 h-24 p-3"
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
        <button
          className="bg-zinc-700 text-white w-40 p-3 rounded m-auto block mt-5"
          onClick={handleActiveMessage}
        >
          To send a message
        </button>
      )}
    </div>
  );
};
