import { useAuth0 } from '@auth0/auth0-react';

import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useCreateUserMutation } from '../features/query/UserQuery';

import imageError from '../assets/imageError.svg';

export const Profile = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  if(isAuthenticated){
    localStorage.setItem("id", `${user.sub}`)
  }

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
        address: user.address,
        phone: user.phone,
      });
    }
  }, [isAuthenticated, user, createUser]);

  return (
    isAuthenticated && (
      <>
        <div>{user.name}</div>
      </>
    )
  );
};
