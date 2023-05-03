import { useParams } from 'react-router-dom';
import { useCreateRatingMutation } from '../features/query/RatingQuery';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Rating = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [createRating] = useCreateRatingMutation();

  const [input, setInput] = useState({
    rating: null,
    comment: '',
  });

  const [errors, setErrors] = useState({});

  const handlerChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    if (input.comment === '') {
      setErrors({ ...errors, comment: 'The Comment is required' });
    } else if (input.comment.length < 10) {
      setErrors({
        ...errors,
        comment: 'The Comment must be more than 10 characters',
      });
    } else if (input.rating === null) {
      setErrors({
        ...errors,
        rating: 'You must enter a rating',
      });
    } else {
      setErrors('');
    }
  };

  const handleCheck = (e) => {
    setInput({ ...input, rating: parseInt(e.target.value) });
  };

  console.log(input);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.rating !== null && !input.rating !== '' && errors === '') {
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
      navigate('/home');
      swal('Rating sent!');
      setInput({ rating: null, comment: '' });
    }
  };

  return (
    <div className="bg-zinc-800 basis-2/4 w-1/2 m-auto">
      <form className="space-y-3 mt-5 pb-10" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="text-center text-white pt-5 text-3xl">
          Please rate the user
        </h2>
        <div className="flex flex-col items-center pr-5 pt-5">
          <div className="pb-5 flex flex-row items-center m-auto">
            <p className="pr-3 h-auto text-lg font-bold">Rating: </p>
            <div className="rating rating-lg">
              <input
                type="radio"
                name="rating-8"
                value={1}
                className="mask mask-star-2 bg-orange-400"
                onClick={(e) => handleCheck(e)}
              />
              <input
                type="radio"
                name="rating-8"
                value={2}
                className="mask mask-star-2 bg-orange-400"
                onClick={(e) => handleCheck(e)}
              />
              <input
                type="radio"
                name="rating-8"
                value={3}
                className="mask mask-star-2 bg-orange-400"
                onClick={(e) => handleCheck(e)}
              />
              <input
                type="radio"
                name="rating-8"
                value={4}
                className="mask mask-star-2 bg-orange-400"
                onClick={(e) => handleCheck(e)}
              />
              <input
                type="radio"
                name="rating-8"
                value={5}
                className="mask mask-star-2 bg-orange-400"
                onClick={(e) => handleCheck(e)}
              />
            </div>
          </div>

          {errors.rating && (
            <div className="bg-red-600 w-96 m-auto p-1 rounded">
              <p className="text-center text-white font-bold capitalize">
                {errors.rating}
              </p>
            </div>
          )}

          <label className="text-lg basis-1/6 font-bold text-white mr-3 pl-5 pb-3">
            Comment:{' '}
          </label>
          <textarea
            name="comment"
            className="input w-4/5 h-32"
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
          <button
            className="btn m-auto"
            type="submit"
            disabled={!input.rating || !input.comment}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
