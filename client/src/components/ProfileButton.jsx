import { useAuth0 } from '@auth0/auth0-react';

import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useCreateUserMutation } from '../features/query/UserQuery';

export const ProfileButton = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [createUser] = useCreateUserMutation();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  useEffect(() => {
    if (isAuthenticated) {
      createUser({
        id: user.sub,
        name: user.name,
        nickname: user.nickname,
        email: user.email,
        picture: user.picture,
      });
    }
  }, [isAuthenticated, user, createUser]);

  return (
    isAuthenticated && (
      <>
        <Link to="/profile">
          <div>{user.name}</div>
        </Link>
      </>
    )
  );
};
