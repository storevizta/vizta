import { Link } from 'react-router-dom';
import landing from '../assets/landing.png';

export const Landing = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-grow justify-center items-center gap-24">
        <div className="flex flex-col gap-5">
          <div className="text-5xl text-slate-50">VIZTA</div>
          <div className="text-2xl text-slate-50">
            Discover new opportunities with our classified ads portal.
          </div>
          <Link to="/home">
            <button className="px-5 py-2 rounded text-xl bg-zinc-50 hover:bg-zinc-300">
              Learn more
            </button>
          </Link>
        </div>
        <img className="lg:w-auto mt-12 lg:mt-0" src={landing} alt="image" />
      </div>
    </div>
  );
};
