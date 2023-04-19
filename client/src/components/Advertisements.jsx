import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { GeneralConfiguration } from '../components/GeneralConfiguration.jsx'
import { Subscription } from '../components/Subscription.jsx'
import { Reputation } from '../components/Reputation.jsx'

export const Advertisements = () => {
  
    return (
      <div className="flex">
        
  
        <aside className="w-64 max-w-64 mx-5 p-5 rounded-xl bg-zinc-700 flex flex-col gap-5">
          <div>
          <Link to="/generalconfig">
          <div>General Configuration</div>
          </Link>
          </div>
          <div>
          <Link to="/advertisements">
            <div>Advertisements</div>
          </Link>
          </div>
          <div>
          <Link to="/subscription">
            <p>Subscription</p>
          </Link>
            <div>
          <Link to="/reputation">
            <p>Reputation</p>
          </Link>
            </div>
          </div>
          <h4 className="">Vizta Copyrigth ©</h4>
        </aside>
  
        
      </div>
    );
  };