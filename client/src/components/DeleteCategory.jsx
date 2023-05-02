import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useDeleteCategoryMutation } from '../features/query/CategoryQuery';

export const DeleteCategoryForm = () => {
  const [name, setName] = useState('');

  const queryClient = useQueryClient();

  const { mutate, isLoading, isSuccess } = useMutation(useDeleteCategoryMutation, {
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
        {isLoading ? 'Deleting...' : 'Delete Category'}
      </button>
      {isSuccess && <div>Category deleted!</div>}
    </form>
  );
};