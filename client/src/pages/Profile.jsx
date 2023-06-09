import { useAuth0 } from '@auth0/auth0-react';

import { useGetUserIdQuery } from '../features/query/UserQuery';

import { LogOutButton } from '../components/LogOutButton';

import { Configuration } from '../components/generalConfiguration.jsx';

import { ProfileMessages } from '../components/ProfileMessages';

import { ProfileAdvertisements } from '../components/ProfileAdvertisements';

import { useEffect, useState } from 'react';

import { ProfileReports } from '../components/ProfileReports';

import { ProfileRating } from '../components/ProfileRating';

import { Link } from 'react-router-dom';

export const Profile = () => {
  const { user, isLoading } = useAuth0();

  const [activePanel, setActivePanel] = useState(null);

  const showDefaultPanel = activePanel === null;

  const {
    data: dataUserId,
    error: errorUserId,
    isLoading: isLoadingUserId,
  } = useGetUserIdQuery(user?.sub);
  // console.log("SOYUSERDATAID", dataUserId)
  if (isLoading) return <div>Loading...</div>;
  if (isLoadingUserId) return <div>Loading...</div>;

  const handlePanelClick = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  return (
    <div>
      {dataUserId?.access === 'Banned' ? (
        <div className="flex flex-col m-auto items-center justify-center w-screen">
          <h1 className="text-7xl">SORRY</h1>
          <p className="text-xl">
            we decided to ban your account, therefore you will not have access
            to your profile or other features.
          </p>
        </div>
      ) : (
        <div className="flex m-5 overflow-hidden">
          <aside className="h-screen rounded-xl w-80 bg-zinc-700 flex flex-col text-left gap-10">
            <h1 className="text-center mt-5 text-3xl">Profile</h1>
            <div className="flex flex-col">
              <div
                className="bg-gray-600 m-2 rounded-2xl flex items-center gap-2 p-2 gap-3 hover:bg-slate-700 cursor-pointer"
                onClick={() => handlePanelClick('General Configuration')}
              >
                <img
                  className="brightness-0 invert h-5"
                  src="https://www.svgrepo.com/show/377056/settings-cog.svg"
                ></img>
                <button className="text-left">General Configuration</button>
              </div>

              <div
                className="bg-gray-600 m-2 rounded-2xl flex items-center p-2 gap-3 hover:bg-slate-700 cursor-pointer"
                onClick={() => handlePanelClick('Advertisements')}
              >
                <img
                  className="brightness-0 invert h-5"
                  src="https://www.svgrepo.com/show/376891/folder.svg"
                ></img>
                <button className="text-left">Advertisements</button>
              </div>

              <div
                className="bg-gray-600 m-2 rounded-2xl flex items-center p-2 gap-3 hover:bg-slate-700 cursor-pointer"
                onClick={() => handlePanelClick('Messages')}
              >
                <img
                  className="brightness-0 invert h-5"
                  src="https://www.svgrepo.com/show/376813/chats-2.svg"
                ></img>
                <button className="text-left">Messages</button>
              </div>

              <div
                className="bg-gray-600 m-2 rounded-2xl flex items-center p-2 gap-3 hover:bg-slate-700 cursor-pointer"
                onClick={() => handlePanelClick('Reputation')}
              >
                <img
                  className="brightness-0 invert h-5"
                  src="https://www.svgrepo.com/show/377112/users.svg"
                ></img>
                <button className="text-left">Reputation</button>
              </div>

              <div
                className="bg-gray-600 m-2 rounded-2xl flex items-center p-2 gap-3 hover:bg-slate-700 cursor-pointer"
                onClick={() => handlePanelClick('Reports')}
              >
                <img
                  className="brightness-0 invert h-5"
                  src="https://www.svgrepo.com/show/340912/report.svg"
                />
                <button className="text-left">Reports</button>
              </div>

              {dataUserId.role === 'admin' ? (
                <Link to="/admin">
                  <div className="bg-gray-600 m-2 rounded-2xl flex items-center p-2 gap-3 hover:bg-slate-700 cursor-pointer">
                    <img
                      className="brightness-0 invert h-5"
                      src="https://www.svgrepo.com/show/376813/chats-2.svg"
                    ></img>
                    <button>Admin</button>
                  </div>
                </Link>
              ) : null}        
                <LogOutButton />
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

            {activePanel === 'Reputation' && (
              <div className="h-screen p-5 flex flex-col items-center gap-2 bg-zinc-700 rounded-2xl ml-3">
                <h2 className="text-4xl">Reputation</h2>
                <ProfileRating userId={user.sub} />
              </div>
            )}
            {activePanel === 'Reports' && (
              <div className="panel">
                <div className="h-screen p-5 flex flex-col items-center gap-2 bg-zinc-700 rounded-2xl ml-3">
                  <h2 className="text-4xl">Reports</h2>
                  <ProfileReports userId={user.sub} />
                </div>
              </div>
            )}
            {activePanel === 'Messages' && (
              <div className="panel">
                <div className="h-screen p-5 flex flex-col items-center gap-2 bg-zinc-700 rounded-2xl ml-3">
                  <h2 className="text-4xl">Messages</h2>
                  <ProfileMessages userId={user.sub} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
