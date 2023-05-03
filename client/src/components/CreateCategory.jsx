import { useState } from 'react';
import { useCreateCategoryMutation } from '../features/query/CategoryQuery';

export const CreateCategoryForm = () => {
  const [name, setName] = useState({
    name: ""
  });

  const [createCategory, { isLoading }] = useCreateCategoryMutation();

  const handleInput = (e) => {
    setName({...name,[e.target.name]: e.target.value})
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    if (name.name.trim() !== '') {
      await createCategory(name);
      setName('');
      alert('Category created!');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Create Category</h1>
      <input type="text" placeholder="Category Name" name='name' value={name.name} onChange={handleInput} className="input input-bordered w-full max-w-xs" />
      <button className='btn btn-info'type='submit'>Create</button>
    </form>
  );
};