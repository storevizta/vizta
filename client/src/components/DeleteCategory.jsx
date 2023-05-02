import { useState } from 'react';
import { useDeleteCategoryMutation } from '../features/query/CategoryQuery';

export const DeleteCategoryForm = () => {
  const [name, setName] = useState('');

    const [deleteCategory, { isLoading }] = useDeleteCategoryMutation();
  
    const handleDelete = async () => {
      if (window.confirm(`Are you sure you want to delete ${name}?`)) {
        await deleteCategory(name);
        alert('Category deleted!');
      }
    };
  return (
    <div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => handleDelete(e.target.value)}
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Deleting...' : 'Delete Category'}
      </button>
      </div>
  );
};
