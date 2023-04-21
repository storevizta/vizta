import { useAuth0 } from '@auth0/auth0-react';

export const LogOutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className='text-left'
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};
