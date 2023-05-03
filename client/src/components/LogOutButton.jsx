import { useAuth0 } from '@auth0/auth0-react';

export const LogOutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className="bg-gray-600 m-2 rounded-2xl flex items-center p-2 gap-3 hover:bg-slate-700 cursor-pointer" onClick={() => {
      localStorage.clear();
      return logout({ logoutParams: { returnTo: window.location.origin } });
    }}>
            <img
              className="brightness-0 invert h-5"
              src="https://www.svgrepo.com/show/376950/logout.svg"
            ></img>
    <button
      className="duration-300 hover:scale-105 hover:border-b-4 border-white font-bold"
    >
      Log Out
    </button>
    </div>
  );
};
