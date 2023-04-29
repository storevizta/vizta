import { useGetSubscribeAdsQuery } from '../features/query/MercadoPagoQuery';

export const Featured = () => {
  const { data, error, isLoading } = useGetSubscribeAdsQuery();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  console.log(data);

  return (
    <>
      <div className="h-96">
        {data && data === 0 ? (
          <p>No results found.</p>
        ) : (
          <div className="grid grid-cols-5">
            {data && data.map((el) => <div key={el.id}>{el.title}</div>)}
          </div>
        )}
      </div>
    </>
  );
};
