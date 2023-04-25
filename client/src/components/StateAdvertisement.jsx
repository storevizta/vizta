import { useState } from 'react';
import { useUpdateAdMutation } from '../features/query/AdsQuery';

export const StateAdvertisement = ({ ad }) => {
  const { id, state } = ad;

  const [inputState, setInputState] = useState(state);

  const [uploadAd] = useUpdateAdMutation();

  const handleInput = (e) => {
    setInputState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadAd({
      adId: id,
      state: inputState,
    })
      .unwrap()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    swal('Successful updated!');
    window.location.reload();
  };

  return (
    <div className="my-auto">
      <form className="flex flex-row" onSubmit={handleSubmit}>
        <div className="flex ml-52">
          <label className="font-bold text-white mr-3 my-auto">State: </label>
          <select
            className="select w-full pr-8"
            name="inputState"
            defaultValue={state}
            onChange={handleInput}
            required
          >
            <option value="Active" className="w-auto p-1 rounded">
              Active
            </option>
            <option value="Sold" className="w-auto p-1 rounded">
              Sold
            </option>
            <option value="Paused" className="w-auto p-1 rounded">
              Paused
            </option>
          </select>
        </div>
        <button className="ml-16 btn " type="submit">
          <p className="font-bold hover:text-white">Change State</p>
        </button>
      </form>
    </div>
  );
};
