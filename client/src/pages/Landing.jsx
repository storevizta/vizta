import { Link } from 'react-router-dom';
import landing from '../assets/landing.png';

export const Landing = () => {
  return (
    <div className="relative top-36 flex flex-col">
      <div className="flex flex-grow justify-center items-center gap-24">
        <div className="flex flex-col gap-5">
          <div className="text-5xl">VIZTA</div>
          <div className="text-2xl">
            Discover new opportunities with our classified ads portal.
          </div>
          <Link to="/home">
            <button className="px-5 py-2 rounded text-xl text-black bg-zinc-50 hover:bg-zinc-300">
              Learn more
            </button>
          </Link>
        </div>
        <img className="lg:w-auto mt-12 lg:mt-0" src={landing} alt="image" />
      </div>
    </div>
  );
};
