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

  console.log(data);

  const handleInput = (e) => {
    setData({ ...data, message: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.message) {
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
    }
  };

  return (
    <div>
      <form className="flex flex-col w-2/3 m-auto items-center mt-5">
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
          onSubmit={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
