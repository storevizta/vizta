import { useAuth0 } from '@auth0/auth0-react';
import { useGetUserIdQuery } from '../features/query/UserQuery.jsx';
import { LogOutButton } from '../components/LogOutButton';
import { useState } from 'react';

export const Profile = () => {
  const { user, isLoading } = useAuth0();
  const [activePanel, setActivePanel] = useState(null);
  const showDefaultPanel = activePanel === null;

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
    <div className="flex">
      <aside className="w-64 max-w-64 mx-5 p-5 rounded-xl bg-zinc-700 flex flex-col gap-5">
        <h1>Profile</h1>
        <button onClick={() => handlePanelClick('General Configuration')}>
          General Configuration
        </button>
        <button onClick={() => handlePanelClick('Advertisements')}>
          Advertisements
        </button>
        <button onClick={() => handlePanelClick('Subscription')}>
          Subscription
        </button>
        <button onClick={() => handlePanelClick('Reputation')}>
          Reputation
        </button>
        <LogOutButton />
        <h4 className="">Vizta Copyrigth ©</h4>
      </aside>

      {showDefaultPanel && (
        <div className="p-2 flex flex-col gap-2 hover:bg-zinc-700">
          <img className="w-5" src={data.picture} alt={data.name} />
          <p className="text-slate-50">Name:{data.name}</p>
          <p>Nickname:{data.nickname}</p>
          <p>Email:{data.email}</p>
          <p>Address:{data.address}</p>
          <p>Phone:{data.phone}</p>
          <p>Joined Vizta:{data.createdAt}</p>
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
      <h3>Your Ratings:</h3>
      
        <div>
          <p>Rating Description:{rating.description}</p>
          <p>Rating:</p>
        </div>
      
    </div>
  </div>
)}
      </div>
    </div>
  );
};
