import { useAuth0 } from '@auth0/auth0-react';

import { useGetUserIdQuery } from '../features/query/UserQuery';

import { useGetUserAdsQuery } from '../features/query/UserQuery';

import {
  useGetRatingQuery,
  useGetRatingByIdQuery,
  useGetRatingByUserIdQuery,
  useCreateRatingMutation,
} from '../features/query/RatingQuery';

import { LogOutButton } from '../components/LogOutButton';

import { Configuration } from '../components/generalConfiguration.jsx';

import { Admin } from '../components/ProfileAdmin';

import { ProfileMessages } from '../components/ProfileMessages';

import { ProfileAdvertisements } from '../components/ProfileAdvertisements';

import { useEffect, useState } from 'react';
import { ProfileReports } from '../components/ProfileReports';

import { Link } from 'react-router-dom';

export const Profile = () => {
  const { user, isLoading } = useAuth0();

  const [activePanel, setActivePanel] = useState(null);

  const showDefaultPanel = activePanel === null;

  if (isLoading) return <div>Loading...</div>;

  const {
    data: dataUserId,
    error: errorUserId,
    isLoading: isLoadingUserId,
  } = useGetUserIdQuery(user.sub);
  // console.log("SOYUSERDATAID", dataUserId)
  if (isLoadingUserId) return <div>Loading...</div>;

  const handlePanelClick = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  return (
    <div className="flex m-5">
      <aside className="h-screen rounded-xl w-80 bg-zinc-700 flex flex-col text-left gap-10">
        <h1 className="text-center mt-5 text-3xl">Profile</h1>
        <div className="flex flex-col">
          <div className="bg-gray-600 m-2 rounded-2xl flex items-center gap-2 p-2 gap-3 hover:bg-slate-700">
            <img
              className="brightness-0 invert h-5"
              src="https://www.svgrepo.com/show/377056/settings-cog.svg"
            ></img>
            <button
              className="text-left"
              onClick={() => handlePanelClick('General Configuration')}
            >
              General Configuration
            </button>
          </div>

          <div className="bg-gray-600 m-2 rounded-2xl flex items-center p-2 gap-3 hover:bg-slate-700">
            <img
              className="brightness-0 invert h-5"
              src="https://www.svgrepo.com/show/376891/folder.svg"
            ></img>
            <button
              className="text-left"
              onClick={() => handlePanelClick('Advertisements')}
            >
              Advertisements
            </button>
          </div>

          <div className="bg-gray-600 m-2 rounded-2xl flex items-center p-2 gap-3 hover:bg-slate-700">
            <img
              className="brightness-0 invert h-5"
              src="https://www.svgrepo.com/show/376813/chats-2.svg"
            ></img>
            <button
              className="text-left"
              onClick={() => handlePanelClick('Messages')}
            >
              Messages
            </button>
          </div>

          <div className="bg-gray-600 m-2 rounded-2xl flex items-center p-2 gap-3 hover:bg-slate-700">
            <img
              className="brightness-0 invert h-5"
              src="https://www.svgrepo.com/show/376856/creditcard-hand.svg"
            ></img>
            <button
              className="text-left"
              onClick={() => handlePanelClick('Subscription')}
            >
              Subscription
            </button>
          </div>

          <div className="bg-gray-600 m-2 rounded-2xl flex items-center p-2 gap-3 hover:bg-slate-700">
            <img
              className="brightness-0 invert h-5"
              src="https://www.svgrepo.com/show/377112/users.svg"
            ></img>
            <button
              className="text-left"
              onClick={() => handlePanelClick('Reputation')}
            >
              Reputation
            </button>
          </div>
          { dataUserId.role === 'admin'?
            <div className="bg-gray-600 m-2 rounded-2xl flex items-center p-2 gap-3 hover:bg-slate-700">
              <img
                className="brightness-0 invert h-5"
                src="https://www.svgrepo.com/show/376813/chats-2.svg"
              ></img>
              <button>
              <Link to="/admin">Admin</Link>
              </button>
            </div>
            : null
            }
            <div className="bg-gray-600 m-2 rounded-2xl flex items-center p-2 gap-3 hover:bg-slate-700">
            <img
              className="brightness-0 invert h-5"
              src="https://www.svgrepo.com/show/376950/logout.svg"
            ></img>
            <LogOutButton />
          </div>
          {dataUserId.role === 'admin' ? (
            <button>
              <Link to="/admin">Admin</Link>
            </button>
          ) : null}
        </div>
        <h4 className="absolute bottom-3 ml-5">Vizta Copyrigth ©</h4>
      </aside>

      {showDefaultPanel && (
        <div className="p-2 flex flex-col items-center gap-2 bg-zinc-700 rounded-2xl ml-3">
          <div className="flex gap-2 items-center mt-5">
            <label className="swap swap-flip text-9xl">
              <input type="checkbox" />

              <div className="swap-on">
                <p className="text-6xl">😈</p>
              </div>
              <div className="swap-off">
                <img
                  className="w-16 h-16 object-cover rounded-full"
                  src={dataUserId.picture}
                  alt={dataUserId.name}
                />
              </div>
            </label>
            <p className="text-slate-50 text-5xl">{dataUserId.name}</p>
          </div>

          <div>
            <div className="flex w-150 mt-7">
              <label className="ml-5">Nickname</label>
              <p className="w-full text-right mr-5">
                {dataUserId.nickname
                  ? dataUserId.nickname
                  : 'You have not defined a Nickname'}
              </p>
            </div>
            <div className="divider"></div>
            <div className="flex w-150">
              <label className="ml-5">Email</label>
              <p className="w-full text-right mr-5">{dataUserId.email}</p>
            </div>
            <div className="divider"></div>
            <div className="flex w-150">
              <label className="ml-5">Address</label>
              <p className="w-full text-right mr-5">
                {dataUserId.address
                  ? dataUserId.address.map((address) => (
                      <p>
                        {address.street} {address.number}
                      </p>
                    ))
                  : 'You have not defined an address'}
              </p>
            </div>
            <div className="divider"></div>
            <div className="flex w-150">
              <label className="ml-5">Phone</label>
              <p className="w-full text-right mr-5">
                {dataUserId.phone
                  ? dataUserId.phone
                  : 'You have not defined a phone number'}
              </p>
            </div>
            <div className="divider"></div>
            <div className="flex w-150">
              <label className="ml-5 w-full">Joined Vizta</label>
              <p className="w-full text-right mr-5">
                {dataUserId.createdAt
                  .slice(0, 10)
                  .replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1')}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="panel-container">
        {activePanel === 'General Configuration' && (
          <div className="panel">
            <div className="h-screen p-5 flex flex-col items-center gap-2 bg-zinc-700 rounded-2xl ml-3">
              <h2 className="text-2xl">General Configuration</h2>
              <Configuration info={user} />
            </div>
          </div>
        )}
        {activePanel === 'Advertisements' && (
          <div className="panel">
            <div className="h-screen p-5 flex flex-col items-center gap-2 bg-zinc-700 rounded-2xl ml-3">
              <h2 className="text-4xl">Advertisements</h2>
              <ProfileAdvertisements userId={user.sub} />
            </div>
          </div>
        )}
        {activePanel === 'Subscription' && (
          <div className="h-screen p-2 flex flex-col gap-2 bg-zinc-700 rounded-2xl ml-3">
            <h2 className="text-center mb-10 mt-5">Subscription</h2>
            <div className="m-10">
              <div className="flex">
                <h3 className="w-48">Current Plan:</h3>
                <p>Basic Plan</p>
              </div>
              <div className="divider"></div>
              <div className="flex">
                <h3 className="w-48">Next Billing Date:</h3>
                <p>May 12th, 2023</p>
              </div>
              <div className="divider"></div>
              <div className="flex">
                <h3 className="w-48">Payment Method:</h3>
                <p>Credit Card ending in 1234</p>
              </div>
              <div className="divider"></div>
              <div className="flex">
                <h3 className="w-48">Billing History:</h3>
                <ul>
                  <li>April 12th, 2023 - $9.99</li>
                  <li>March 12th, 2023 - $9.99</li>
                  <li>February 12th, 2023 - $9.99</li>
                </ul>
              </div>
              <div className="divider"></div>
              <div className="flex">
                <h3 className="w-48">Upgrade Plan:</h3>
                <p>
                  <a href="#">Upgrade to Premium</a>
                </p>
              </div>
              <div className="divider"></div>
            </div>
          </div>
        )}
        {activePanel === 'Reputation' && (
          <div className="h-screen p-5 flex flex-col items-center gap-2 bg-zinc-700 rounded-2xl ml-3">
            <h2>Reputation</h2>
            <div className="flex gap-2 mb-5">
              <p>Rating Average:</p>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked={false}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked={true}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked={false}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked={false}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked={false}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 mb-5">
              <p>Number of Ratings:</p>
              <input
                type="text"
                placeholder="Null"
                className="input w-28 h-8"
              />
            </div>
            {dataRating3.map((rating) => (
              <div key={rating.id}>
                <div>Comment: {rating.comment}</div>
                <div>Rating: {rating.rating}</div>
                <div>Comment date:{rating.createdAt}</div>
              </div>
            ))}
          </div>
        )}
        {activePanel === 'Messages' && (
          <div className="panel">
            <div className="h-screen p-5 flex flex-col items-center gap-2 bg-zinc-700 rounded-2xl ml-3">
              <h2 className="text-4xl">Messages</h2>
              <ProfileMessages userId={user.sub} />
            </div>
            <h2 className="text-4xl">Reports</h2>
            <div>
              <ProfileReports userId={user.sub} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
