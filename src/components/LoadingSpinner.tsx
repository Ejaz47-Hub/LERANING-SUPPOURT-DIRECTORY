// A simple centered loading spinner used while data is fetching
const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-60">
      <div className="h-10 w-10 border-4 border-gray-300 border-t-indigo-500 rounded-full animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
