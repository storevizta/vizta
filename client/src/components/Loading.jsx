export const Loading = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-72 h-72 relative flex items-center justify-center">
          <div className="absolute w-full h-full rounded-3xl animate-pulse"></div>
          <div className="absolute w-full h-full rounded-3xl border-2 border-white border-opacity-30 animate-spin"></div>
          <div className="absolute w-full h-full rounded-3xl blur-md bg-gradient-to-br from-teal-500 to-purple-600 animate-loadtwo"></div>
        </div>
      </div>
    </>
  );
};
