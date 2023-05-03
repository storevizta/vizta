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
    <form onSubmit={onSubmit} className='w-full flex flex-col gap-4 items-center'>
      <h1>Create Category</h1>
      <input type="text" placeholder="Category Name" name='name' value={name.name} onChange={handleInput} className="input input-bordered w-full" />
      <button className='btn btn-info w-52' type='submit'>Create</button>
    </form>
  );
};