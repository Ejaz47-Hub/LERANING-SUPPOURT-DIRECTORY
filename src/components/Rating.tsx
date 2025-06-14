interface RatingProps {
  value: number;
}

// Modern star rating with better color, spacing, and subtle polish
const Rating = ({ value }: RatingProps) => {
  const filled = Math.floor(value);
  const showHalf = value % 1 >= 0.5;
  const empty = 5 - filled - (showHalf ? 1 : 0);

  return (
    <div className="flex items-center space-x-0.5">
      {/* Filled stars */}
      {Array.from({ length: filled }).map((_, index) => (
        <svg
          key={`star-full-${index}`}
          className="w-5 h-5 text-yellow-400 drop-shadow-sm"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}

      {/* Half star */}
      {showHalf && (
        <svg
          className="w-5 h-5 text-yellow-400 drop-shadow-sm"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <defs>
            <linearGradient id="half-fill" x1="0" x2="100%" y1="0" y2="0">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half-fill)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      )}

      {/* Empty stars */}
      {Array.from({ length: empty }).map((_, index) => (
        <svg
          key={`star-empty-${index}`}
          className="w-5 h-5 text-gray-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}

      {/* Rating Text */}
      <span className="ml-2 text-sm font-medium text-gray-700">{value.toFixed(1)}</span>
    </div>
  );
};

export default Rating;
