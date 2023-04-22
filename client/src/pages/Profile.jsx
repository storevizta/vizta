import { useAuth0 } from '@auth0/auth0-react';
import { useGetUserIdQuery } from '../features/query/UserQuery';
// import { useGetReportByIdQuery, useGetReportByUserIdQuery, useReportAdAdIdQuery } from '../features/query/ReportQuery';
import { useGetRatingQuery, useGetRatingByIdQuery, useGetRatingByUserIdQuery } from '../features/query/RatingQuery';
import { LogOutButton } from '../components/LogOutButton';
import { ProfileMessages } from '../components/ProfileMessages';
import { useEffect, useState } from 'react';

export const Profile = () => {
  const { user, isLoading } = useAuth0();
  const [activePanel, setActivePanel] = useState(null);
  const showDefaultPanel = activePanel === null;
  // const { data: dataReport, error: errorReport, isLoading: isReport} = useGetReportByIdQuery();
  // const { data: dataReport1, error: errorReport1, isLoading: isReport1} = useGetReportByUserIdQuery();
  // const { data: dataReport2, error: errorReport2, isLoading: isReport2} = useReportAdAdIdQuery();
  
  
  // const { data: dataRating, error: errorRating, isLoading: isRating} = useGetRatingQuery();
  // const { data: dataRating1, error: errorRating1, isLoading: isRating1} = useGetRatingByIdQuery();
  const { data: dataRating3, error: errorRating3, isLoading: isRating3} = useGetRatingByUserIdQuery(user.sub);

  if(isRating3) {
    return <div>Loading...</div>
}

if(errorRating3) {
  return <div>Error...</div>
}




  const handlePanelClick = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const { data, error, isLoading: is } = useGetUserIdQuery(user.sub);

  if (is) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex m-5">
      <aside className="h-screen rounded-xl w-80 bg-zinc-700 flex flex-col text-left gap-10">
        <h1 className='text-center mt-5 text-3xl'>Profile</h1>
        <div className='flex flex-col'>

          <div className='bg-gray-600 m-2 rounded-2xl flex items-center gap-2 p-2 gap-3 hover:bg-slate-700'>  
            <img className='brightness-0 invert h-5' src='https://www.svgrepo.com/show/377056/settings-cog.svg'></img>
            <button className='text-left' onClick={() => handlePanelClick('General Configuration')}>
              General Configuration
            </button>
          </div>

          <div className='bg-gray-600 m-2 rounded-2xl flex items-center p-2 gap-3 hover:bg-slate-700'>
            <img className='brightness-0 invert h-5' src='https://www.svgrepo.com/show/376891/folder.svg'></img>
            <button className='text-left' onClick={() => handlePanelClick('Advertisements')}>
              Advertisements
            </button>
          </div>

          <div className='bg-gray-600 m-2 rounded-2xl flex items-center p-2 gap-3 hover:bg-slate-700'>
          <img className='brightness-0 invert h-5' src='https://www.svgrepo.com/show/376813/chats-2.svg'></img>
            <button className='text-left' onClick={() => handlePanelClick('Messages')}>Messages</button>
          </div>

          <div className='bg-gray-600 m-2 rounded-2xl flex items-center p-2 gap-3 hover:bg-slate-700'>
          <img className='brightness-0 invert h-5' src='https://www.svgrepo.com/show/376856/creditcard-hand.svg'></img>
            <button className='text-left' onClick={() => handlePanelClick('Subscription')}>
              Subscription
            </button>
          </div>

          <div className='bg-gray-600 m-2 rounded-2xl flex items-center p-2 gap-3 hover:bg-slate-700'>
          <img className='brightness-0 invert h-5' src='https://www.svgrepo.com/show/377112/users.svg'></img>
            <button className='text-left' onClick={() => handlePanelClick('Reputation')}>
              Reputation
            </button>
          </div>

          <div className='bg-gray-600 m-2 rounded-2xl flex items-center p-2 gap-3 hover:bg-slate-700'>
            <img className='brightness-0 invert h-5' src='https://www.svgrepo.com/show/376950/logout.svg'></img>
            <LogOutButton />
          </div>

        </div>
        <h4 className="absolute bottom-3 ml-5">Vizta Copyrigth ©</h4>
      </aside>

      {showDefaultPanel && (
        <div className="p-2 flex flex-col items-center gap-2 bg-zinc-700 rounded-2xl ml-3">
          <div className='flex gap-2 items-center mt-5'>
            <label className="swap swap-flip text-9xl">
              <input type="checkbox" />
    
              <div className="swap-on"><p className='text-6xl'>😈</p></div>
              <div className="swap-off"><img className="w-16 h-16 object-cover rounded-full" src={data.picture} alt={data.name} /></div>
            </label>
              <p className="text-slate-50 text-5xl">{data.name}</p>
          </div>

          <div>
            <div className='flex w-150 mt-7'>
              <label className='ml-5'>Nickname</label>
              <p className='w-full text-right mr-5'>{data.nickname ? data.nickname : "You have not defined a Nickname"}</p>
            </div>
            <div className="divider"></div> 
            <div className='flex w-150'>
              <label className='ml-5'>Email</label>
              <p className='w-full text-right mr-5'>{data.email}</p>
            </div>
            <div className="divider"></div> 
            <div className='flex w-150'>
              <label className='ml-5'>Address</label>
              <p className='w-full text-right mr-5'>{data.address ? data.address : "You have not defined an address"}</p>
            </div>
            <div className="divider"></div> 
            <div className='flex w-150'>
              <label className='ml-5'>Phone</label>
              <p className='w-full text-right mr-5'>{data.phone ? data.phone : "You have not defined a phone number"}</p>
            </div>
            <div className="divider"></div> 
            <div className='flex w-150'>
              <label className='ml-5 w-full'>Joined Vizta</label>
              <p className='w-full text-right mr-5'>{data.createdAt}</p>
            </div>
          </div>
        </div>
      )}
      <div className="panel-container">
        {activePanel === 'General Configuration' && (
          <div className="panel">
            <h2>General Configuration</h2>
            <p>Here's some information about General Configuration.</p>
          </div>
        )}
        {activePanel === 'Advertisements' && (
          <div className="panel">
            <h2>Advertisements</h2>
            <div className="active-ads">
              <h3>Active Advertisements</h3>
              <ul>
                <li>Ad Title 1</li>
                <li>Ad Title 2</li>
                <li>Ad Title 3</li>
                <li>Ad Title 4</li>
                <li>Ad Title 5</li>
              </ul>
            </div>
            <div className="paused-ads">
              <h3>Paused Advertisements</h3>
              <ul>
                <li>Ad Title 6</li>
                <li>Ad Title 7</li>
                <li>Ad Title 8</li>
                <li>Ad Title 9</li>
                <li>Ad Title 10</li>
              </ul>
            </div>
          </div>
        )}
        {activePanel === 'Subscription' && (
          <div className="panel">
            <h2>Subscription</h2>
            <div className="subscription-details">
              <div className="subscription-item">
                <h3>Current Plan:</h3>
                <p>Basic Plan</p>
              </div>
              <div className="subscription-item">
                <h3>Next Billing Date:</h3>
                <p>May 12th, 2023</p>
              </div>
              <div className="subscription-item">
                <h3>Payment Method:</h3>
                <p>Credit Card ending in 1234</p>
              </div>
              <div className="subscription-item">
                <h3>Billing History:</h3>
                <ul>
                  <li>April 12th, 2023 - $9.99</li>
                  <li>March 12th, 2023 - $9.99</li>
                  <li>February 12th, 2023 - $9.99</li>
                </ul>
              </div>
              <div className="subscription-item">
                <h3>Upgrade Plan:</h3>
                <p>
                  <a href="#">Upgrade to Premium</a>
                </p>
              </div>
            </div>
          </div>
        )}
        {activePanel === 'Reputation' && (
          <div className="panel">
            <h2>Reputation</h2>
            <div>
              <p>Rating Average:</p>
              <p>Number of Ratings:</p>
            </div>
            <div>
              <h3>Your Ratings: {dataRating3}</h3>

              <div>
                <p>Rating Description:</p>
                <p>Rating:</p>
              </div>
            </div>
          </div>
        )}

        {activePanel === 'Messages' && (
          <div>
            <h2>Messages</h2>
            <ProfileMessages userId={user.sub} />
          </div>
        )}
      </div>
    </div>
  );
};
