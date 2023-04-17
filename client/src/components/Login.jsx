import { useAuth0 } from '@auth0/auth0-react';

export const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};
