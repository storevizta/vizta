import { useCreateMessageMutation } from '../features/query/MessagesQuery';

import { useAuth0 } from '@auth0/auth0-react';

import swal from 'sweetalert';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export const CreateMessage = (props) => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>isLoading</div>;
  }

  const navigate = useNavigate();

  const [createMessage] = useCreateMessageMutation();

  const { userId, adId } = props;

  const [data, setData] = useState({
    message: '',
    userId: user?.sub ? user.sub : null,
    adId: adId,
  });

  console.log(data);

  const [activeMessage, setActiveMessage] = useState(false);

  const handleActiveMessage = () => {
    if (data.userId === userId) {
      return swal("You can't send a message to your own advertisement");
    }

    if (data.userId === null) {
      return swal("To send a message, it's necessary for you to log in");
    }
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
    setData({ ...data, message: '' });
    navigate('/home');
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
              className="text-white w-full mb-5 mt-5 border-slate-400 border-2 rounded w-5/6 h-24 p-3"
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
