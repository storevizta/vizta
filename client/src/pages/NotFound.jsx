import { useRouteError } from 'react-router-dom';

export const NotFound = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <>
      <div className="flex flex-grow">
        <div className="flex w-1/4">
          <Sidebar />
        </div>
        <div className="flex flex-col w-3/4">
          <Featured />
          <Pagination items={ads.length} />
          {ads.length ? <AdList ads={ads} /> : <p>No results found.</p>}
        </div>
      </div>
    </>
  );
};
