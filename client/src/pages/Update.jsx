import { useParams } from 'react-router-dom';

import { useGetAdByIdQuery } from '../features/query/AdsQuery.jsx';

import { UpdateAdvertisement } from '../components/UpdateAdvertisement.jsx';

export const Updata = () => {
  const { id } = useParams();

  const { data: dataAd, isLoading } = useGetAdByIdQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <UpdateAdvertisement ad={dataAd} />;
};
