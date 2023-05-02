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

  const handleCheck = (e) => {
    setInput({ ...input, rating: parseInt(e.target.value) });
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
        <div className="flex flex-col items-center pr-5 pt-8">
          <div className="pb-5">
            <div className="rating">
              <label className="pr-3">Rating: </label>
              <input
                type="radio"
                name="rating-2"
                value={1}
                className="mask mask-star-2 bg-orange-400"
                onClick={(e) => handleCheck(e)}
              />
              <input
                type="radio"
                name="rating-2"
                value={2}
                className="mask mask-star-2 bg-orange-400"
                onClick={(e) => handleCheck(e)}
              />
              <input
                type="radio"
                name="rating-2"
                value={3}
                className="mask mask-star-2 bg-orange-400"
                onClick={(e) => handleCheck(e)}
              />
              <input
                type="radio"
                name="rating-2"
                value={4}
                className="mask mask-star-2 bg-orange-400"
                onClick={(e) => handleCheck(e)}
              />
              <input
                type="radio"
                name="rating-2"
                value={5}
                className="mask mask-star-2 bg-orange-400"
                onClick={(e) => handleCheck(e)}
              />
            </div>
          </div>

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
          <button className="btn m-auto" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
