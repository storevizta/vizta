import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { useGetUserIdQuery } from '../features/query/UserQuery';

export const Layout = () => {
  const user = useGetUserIdQuery(localStorage.getItem('id'));

  return (
    <div className="h-screen">
      <div>{/* <Navbar/> */}</div>
      {user?.data?.access === 'Banned' ? (
        <div
          className="alert alert-error shadow-lg h-13 z-10 fixed bottom-2 flex justify-center items-center
      rounded-none"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              You are BANNED. Reason:{' '}
              {user?.data?.reason && user?.data?.reason !== ''
                ? user?.data?.reason
                : 'not specified'}
            </span>
          </div>
        </div>
      ) : null}
      <div>
        <Outlet />
      </div>
    </div>
  );
};
