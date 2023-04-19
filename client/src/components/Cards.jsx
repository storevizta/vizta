import { Link } from 'react-router-dom';

import { Card } from './Card';

export const Cards = ({ ads }) => (
  <div className="grid grid-cols-5 gap-5">
    {ads.map((el) => (
      <Link to={`/detail/${el.id}`} key={el.id}>
        <Card info={el} />
      </Link>
    ))}
  </div>
);
