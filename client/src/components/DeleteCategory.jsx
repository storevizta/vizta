import { useState } from 'react';
import { useDeleteCategoryMutation, useGetCategoryQuery } from '../features/query/CategoryQuery';

export const DeleteCategoryForm = () => {
  const [name, setName] = useState("");

    const [deleteCategory, { isLoading }] = useDeleteCategoryMutation();

    const allCategorys = useGetCategoryQuery()

    const handleInput = (e) => {
      setName(e.target.value)
    }
  
    const onSubmit = async (e) => {
      e.preventDefault()
      if (window.confirm(`Are you sure you want to delete ${name}?`)) {
        await deleteCategory(name);
        alert('Category deleted!');
      }
    };
  return (
    <div>
      <form onSubmit={onSubmit} className='w-full flex flex-col gap-4 items-center'>
        <h1>Delete Category</h1>
        <select className="select select-bordered w-52" name="name" value={name.name} onChange={handleInput}>
          <option disabled selected>Select a Category</option>
          {allCategorys?.data?.map(value => (<option>{value.name}</option>))}
        </select>
        <button type='submit' className='btn btn-error w-52'>Delete</button>
      </form>
      </div>
  );
};
