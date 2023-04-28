import { useAuth0 } from '@auth0/auth0-react';

import { useGetUserIdQuery } from '../features/query/UserQuery';

import { useGetAllReportsQuery } from "../features/query/ReportQuery"

import { useGetMetricsQuery } from "../features/query/AdminQuery"

import { LogOutButton } from '../components/LogOutButton';

import { ProfileAdvertisements } from '../components/ProfileAdvertisements';

import { ReportsCards } from "./reportsCards"

import { Error } from "./Error"

import { useEffect, useState } from 'react';




export const Admin = () => {
  const { user, isLoading } = useAuth0();

  const [activePanel, setActivePanel] = useState(null);

  const showDefaultPanel = activePanel === null;

  if (isLoading) return <div>Loading...</div>;

  const {
    data: dataUserId,
    error: errorUserId,
    isLoading: isLoadingUserId,
  } = useGetUserIdQuery(user.sub);

  if (isLoadingUserId) return <div>Loading...</div>;
  
  const metrics = useGetMetricsQuery()

  const {data: data1, isError: isError1, isLoading:isLoading1}  = useGetAllReportsQuery()

  if(isLoading1){
    return(
      <p>Loading...</p>
    )
  }

  if(isError1){
    <Error/>
  }
  console.log(metrics);


  const handlePanelClick = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  return (  
      <div className="flex m-5">
      { dataUserId.role === 'admin' ? (
      <aside className="h-screen rounded-xl w-80 bg-zinc-700 flex flex-col text-left gap-10">
        <h1 className="text-center mt-5 text-3xl">Dashboard Admin</h1>
        <div className="flex flex-col">
          
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
              onClick={() => handlePanelClick('Reports')}
            >
              Reports
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
              onClick={() => handlePanelClick('Admin Action')}
            >
              Admin Action
            </button>
          </div>
          
          <div className="bg-gray-600 m-2 rounded-2xl flex items-center p-2 gap-3 hover:bg-slate-700">
            <img
              className="brightness-0 invert h-5"
              src="https://www.svgrepo.com/show/376950/logout.svg"
            ></img>
            <LogOutButton />
          </div>
        </div>
        <h4 className="absolute bottom-3 ml-5">Vizta Copyrigth ©</h4>
      </aside>
) : <p>Access only for admin </p>}
      {showDefaultPanel && (
        <div className="p-2 flex flex-col items-center gap-2 bg-zinc-700 rounded-2xl ml-3">
          <div className="flex gap-2 items-center mt-5">
            <div className="stat">

                <div className="stat-figure text-secondary">
                  <img src="https://www.svgrepo.com/show/376754/analytics.svg" className="inline-block w-8 h-8 stroke-current brightness-0 invert"></img>
                </div>
                <div className="stat-title">Users</div>
                <div className="flex">
                  <div className="stat-figure text-secondary">
                    <img src="https://www.svgrepo.com/show/376754/analytics.svg" className="inline-block w-8 h-8 stroke-current brightness-0 invert"></img>
                  </div>
                  <div className="stat-value">{metrics?.data.usersAmount}</div>
                </div>
              </div>
  
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img src="https://www.svgrepo.com/show/376751/analytics-plus.svg" className="inline-block w-8 h-8 stroke-current brightness-0 invert"></img>
                </div>
                <div className="stat-title">New Users</div>
                <div className="stat-value">{metrics?.data.newUsers}</div>
              </div>
    
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img src="https://www.svgrepo.com/show/376871/dollar-circle.svg" className="inline-block w-8 h-8 stroke-current brightness-0 invert"></img>
                </div>
                <div className="stat-title">Suscribed</div>
                <div className="stat-value">{metrics?.data.subscribedAmount}</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img src="https://www.svgrepo.com/show/376830/clipboard.svg" className="inline-block w-8 h-8 stroke-current brightness-0 invert"></img>
                </div>
                <div className="stat-title">Reports</div>
                <div className="stat-value">{metrics?.data.reportsAmount}</div>
              </div>
          
          </div>

          
        </div>
      )}

      <div className="panel-container">
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
            
          </div>
        )}
        {activePanel === 'Admin Action' && (
          <div className="h-screen p-5 flex flex-col items-center gap-2 bg-zinc-700 rounded-2xl ml-3">
            <h2>Admin Action</h2>
            <div className="flex gap-2 mb-5">
              <div className="m-5">
                      <h3 className="text-center">Ban a user by Id</h3>
                      <form className="flex flex-col w-100 items-center gap-4">
                        <input type="text" placeholder="User id" className="input w-full" />
                        <input type="text" placeholder="Reason" className="input w-full" />
                        <button className="btn btn-error w-52">Ban</button>
                      </form>
                    </div>
                    <div className="m-5">
                      <h3 className="text-center">Delete an ad by Id</h3>
                      <form className="flex flex-col w-100 items-center gap-4">
                        <input type="text" placeholder="Ad Id" className="input w-full" />
                        <input type="text" placeholder="Reason" className="input w-full" />
                        <button className="btn btn-error w-52">Ban</button>
                      </form>
                    </div>
                    <div className="m-5">
                      <h3 className="text-center">Unban user</h3>
                      <form className="flex flex-col w-100 items-center gap-4">
                        <input type="text" placeholder="User Id" className="input w-full" />
                        <input type="text" placeholder="Reason" className="input w-full" />
                        <button className="btn btn-success w-52">Unban</button>
                      </form>
                    </div>
                    <div className="w-100 flex flex-col items-center gap-4 m-5">
                      <h3>Create Category</h3>
                      <input type="text" placeholder="Category name" className="input w-full" />
                      <button className="btn btn-info w-52">Unban</button>
                    </div>
            </div>
          </div>
        )}
        {activePanel === 'Reports' && (
          <div className="panel">
            <h2 className="text-4xl">Reports</h2>
            {data1.length !== 0 ? 
                  data1.map(value => <ReportsCards info={value}/>) 
                  : <p>No reports yet</p> 
                }
          </div>
        )}
        
          
        
      </div>
 
    </div>
  );
};