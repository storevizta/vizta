import { useAuth0 } from '@auth0/auth0-react';

export const LogOutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="duration-300 hover:scale-105 hover:border-b-4 border-white font-bold"
      onClick={() => {
        localStorage.clear();
        return logout({ logoutParams: { returnTo: window.location.origin } });
      }}
    >
      Log Out
    </button>
  );
};
