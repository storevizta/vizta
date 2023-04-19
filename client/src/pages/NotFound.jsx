import { useRouteError } from 'react-router-dom';

export const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-y-5">
      <h1 className='text-8xl font-bold'>Error 404</h1>
      <p className='text-4xl font-medium '>Page not found</p>
      <p className='text-3xl'>{error.statusText || error.message}</p>
    </div>
  );
};
