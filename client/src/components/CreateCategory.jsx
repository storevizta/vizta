import { useState } from 'react';
import { useCreateCategoryMutation } from '../features/query/CategoryQuery';

export const CreateCategoryForm = () => {
  const [name, setName] = useState(''); 

  const [createCategory, { isLoading }] = useCreateCategoryMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name.trim() !== '') {
      await createCategory(name);
      setName('');
      alert('Category created!');
    }
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
    </form>
  );
};