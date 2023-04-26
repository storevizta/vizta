import { useParams } from 'react-router';
import { useState } from 'react';
import { useCreateReportMutation } from '../features/query/ReportQuery';
import swal from 'sweetalert';

export const ReportAd = () => {
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
        type: 'Advertisement',
        reason: input,
        adId: id,
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
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Why do you want to report the Advertisement?</h2>
        <textarea
          onChange={(e) => handlerChange(e)}
          value={input}
          placeholder="Report..."
        />
        {errors && <p>{errors}</p>}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
