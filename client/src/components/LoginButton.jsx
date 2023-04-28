import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <button class='duration-300 hover:scale-105 hover:border-b-4 border-white font-bold' onClick={() => loginWithRedirect()}>Log In</button>
    </>
  );
};
