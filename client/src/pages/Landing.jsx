import { Link } from 'react-router-dom';

import landing from '../assets/landing.png';

export const Landing = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={landing} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">VIZTA</h1>
            <p className="py-6">
              Discover new opportunities with our classified ads portal.
            </p>
            <Link to="/home">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
