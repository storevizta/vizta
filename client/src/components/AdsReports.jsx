import { useGetReportAdAdIdQuery } from '../features/query/ReportQuery';

export const AdsReports = ({ adId }) => {
  const { data, error, isLoading } = useGetReportAdAdIdQuery(adId);

  if (isLoading) {
    return <p>isLoading</p>;
  }

  return (
    <div>
      {data ? (
        data.map((report) => (
          <div
            className="w-140 p-2 mt-5 flex flex-col gap-2 bg-blue-700 rounded-2xl ml-3 p-4"
            key={report.id}
          >
            <p className="text-lg text-bold text-white">
              Report: {report.reason}
            </p>
            <p>
              Date:{' '}
              {report.createdAt
                .slice(0, 10)
                .replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1')}
            </p>
          </div>
        ))
      ) : (
        <p>You don't have any reports in this Advertisement</p>
      )}
    </div>
  );
};
