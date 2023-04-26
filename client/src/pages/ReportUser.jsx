import { useParams } from 'react-router';
import { useState } from 'react';
import { useCreateReportMutation } from '../features/query/ReportQuery';
import swal from 'sweetalert';

export const ReportUser = () => {
  const { id } = useParams();

  const [createReport] = useCreateReportMutation();

  const [input, setInput] = useState('');

  const [errors, setErrors] = useState('');

  console.log(errors);

  const handlerChange = (e) => {
    setInput(e.target.value);
    if (input === '') {
      setErrors('The Report is required');
    } else if (input.length < 10) {
      setErrors('The Report must be more than 10 characters');
    } else {
      setErrors('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors === '') {
      createReport({
        type: 'User',
        reason: input,
        userId: id,
      })
        .unwrap()
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
      swal('Report sent!');
    }
  };

  return (
    <div className="bg-zinc-800 basis-2/4 w-1/2 m-auto">
      <form className="space-y-3 mt-5 pb-10" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="text-center text-white pt-5 text-3xl">
          Why do you want to report this User?
        </h2>
        <div className="flex pr-5 pt-8">
          <label className="text-lg basis-1/6 font-bold text-white mr-3 pl-5">
            Report:{' '}
          </label>
          <textarea
            className="input w-full"
            onChange={(e) => handlerChange(e)}
            value={input}
            placeholder="Report..."
          />
        </div>

        {errors && (
          <div className="bg-red-600 w-96 m-auto p-1 rounded">
            <p className="text-center text-white font-bold capitalize">
              {errors}
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
