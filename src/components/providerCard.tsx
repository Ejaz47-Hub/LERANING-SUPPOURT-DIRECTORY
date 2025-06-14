import { Link } from 'react-router-dom';
import Rating from './Rating';

interface CardProps {
  id: number;
  name: string;
  specialization: string;
  location: string;
  rating: number;
  shortDescription: string;
}

const ProviderCard = ({
  id,
  name,
  specialization,
  location,
  rating,
  shortDescription,
}: CardProps) => {
  return (
    <Link
      to={`/providers/${id}`}
      className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-lg hover:bg-indigo-50 transition-all duration-300 ease-in-out block group"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">
            {name}
          </h2>
          <span className="block text-sm text-indigo-600">{specialization}</span>
        </div>
        <Rating value={rating} />
      </div>

      <div className="text-sm space-y-2">
        <p className="text-gray-700">
          <strong className="text-gray-800">Location:</strong> {location}
        </p>
        <p className="text-gray-600 line-clamp-2">{shortDescription}</p>
      </div>
    </Link>
  );
};

export default ProviderCard;
