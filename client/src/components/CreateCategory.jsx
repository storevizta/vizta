import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useCreateCategoryMutation } from '../features/query/CategoryQuery';

export const CreateCategoryForm = () => {
  const [name, setName] = useState('');

  const queryClient = useQueryClient();

  const { mutate, isLoading, isSuccess } = useMutation(useCreateCategoryMutation, {
    onSuccess: () => {
      queryClient.invalidateQueries('getCategory');
      setName('');
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    mutate({ name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create Category'}
      </button>
      {isSuccess && <div>Category created!</div>}
    </form>
  );
};