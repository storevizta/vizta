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
      <div className="m-5">
        <label className="flex flex-col w-100 items-center gap-4" htmlFor="name">Name:</label>
        <input className="input w-full"
          type="text"
          id="name"
          value={name}
          onChange={(e) => handleDelete(e.target.value)}
        />
      </div>
      <button className="btn btn-success w-52" type="submit" disabled={isLoading}>
        {isLoading ? 'Deleting...' : 'Delete Category'}
      </button>
      </div>
  );
};
