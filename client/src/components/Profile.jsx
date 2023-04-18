import { useAuth0 } from '@auth0/auth0-react';

import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useCreateUserMutation } from '../features/query/UserQuery';

export const Profile = () => {
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
        address: user.address,
        phone: user.phone,
      });
    }
  }, [isAuthenticated, user, createUser]);

  return (
    isAuthenticated && (
      <Link to="/profile">
        <div>
          <p>General Configuration</p>
          <p>Advertisements</p>
          <p>Favorites</p>
          <p>Subscriptcion</p>
          <p>Reputation</p>
        </div>
        <div className="p-2 flex gap-2 hover:bg-zinc-700">
          <img className="w-5" src={user.picture} alt={user.name} />
          <p className="text-slate-50">{user.name}</p>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <p>{user.phone}</p>
        </div>
      </Link>
    )
  );
};
