import { useParams } from 'react-router-dom';
import { useCreateRatingMutation } from '../features/query/RatingQuery';
import { useState } from 'react';
export const Rating = () => {
  const { id } = useParams();

  const [createRating] = useCreateRatingMutation();

  const [input, setInput] = useState({
    rating: 1,
    comment: '',
  });

  const [errors, setErrors] = useState({});

  console.log(errors);

  const handlerChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    if (input.comment === '') {
      setErrors({ ...errors, comment: 'The Comment is required' });
    } else if (input.comment.length < 10) {
      setErrors({
        ...errors,
        comment: 'The Comment must be more than 10 characters',
      });
    } else {
      setErrors('');
    }
  };

  console.log(input);

  const handleSubmit = (e) => {
    e.preventDefault();
    createRating({
      rating: input.rating,
      comment: input.comment,
      userId: id,
    })
      .unwrap()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    swal('Rating sent!');
  };

  return (
    <div className="bg-zinc-800 basis-2/4 w-1/2 m-auto">
      <form className="space-y-3 mt-5 pb-10" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="text-center text-white pt-5 text-3xl">
          Please rate the user
        </h2>
        <div className="flex pr-5 pt-8">
          <label>Rating</label>
          <input
            type="number"
            name="rating"
            value={input.rating}
            min="1"
            max="5"
            onChange={(e) => handlerChange(e)}
          ></input>
          <label className="text-lg basis-1/6 font-bold text-white mr-3 pl-5">
            Comment:{' '}
          </label>
          <textarea
            name="comment"
            className="input w-full"
            onChange={(e) => handlerChange(e)}
            value={input.comment}
            placeholder="Comment..."
          />
        </div>

        {errors.comment && (
          <div className="bg-red-600 w-96 m-auto p-1 rounded">
            <p className="text-center text-white font-bold capitalize">
              {errors.comment}
            </p>
          </div>
        )}
        <div className="flex items-center pt-5">
          <button className="btn m-auto" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
