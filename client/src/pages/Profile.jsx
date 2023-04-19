import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { useGetUserIdQuery } from '../features/query/UserQuery.jsx';

export const Profile = () => {
  const { user, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log('SOY EL USER', user);
  const { data, error, isLoading: is } = useGetUserIdQuery(user.sub);

  if (is) {
    return <div>Loading...</div>;
  }
  console.log('SOY DATA', data);

  return (
    <div className="flex">
      <h1>Profile</h1>

      <aside className="w-64 max-w-64 mx-5 p-5 rounded-xl bg-zinc-700 flex flex-col gap-5">
        <div>
          <p>General Configuration</p>
        </div>
        <div>
          <p>Advertisements</p>
        </div>
        <div>
          <p>Favorites</p>
        </div>
        <div>
          <p>Subscriptcion</p>
          <div>
            <p>Reputation</p>
          </div>
        </div>
        <h4 className="">Vizta Copyrigth ©</h4>
      </aside>

      <div className="p-2 flex flex-col gap-2 hover:bg-zinc-700">
        <img className="w-5" src={data.picture} alt={data.name} />
        <p className="text-slate-50">Name:{data.name}</p>
        <p>Nickname:{data.nickname}</p>
        <p>Email:{data.email}</p>
        <p>Address:{data.address}</p>
        <p>Phone:{data.phone}</p>
        <p>Joined Vizta:{data.createdAt}</p>
      </div>
    </div>
  );
};
// {
// 	"id": "google-oauth2|111718121408151683854",
// 	"name": "Carolina Ríos",
// 	"nickname": "caritu_rios",
// 	"email": "caritu_rios@hotmail.com",
// 	"picture": "https://lh3.googleusercontent.com/a/AGNmyxYgXqTs7F8HsHdgiheXhukjv7OybXnrJognU3XU=s96-c",
// 	"address": null,
// 	"phone": null,
// 	"createdAt": "2023-04-18T16:13:07.869Z",
// 	"updatedAt": "2023-04-18T16:13:07.869Z"
// }
