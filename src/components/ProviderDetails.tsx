import Rating from './Rating';

interface ProviderDetailsProps {
  provider: {
    id: number;
    name: string;
    specialization: string;
    location: string;
    rating: number;
    longDescription: string;
    contactEmail: string;
    phoneNumber: string;
  };
}

const ProviderDetails = ({ provider }: ProviderDetailsProps) => {
  const {
    name,
    specialization,
    location,
    rating,
    longDescription,
    contactEmail,
    phoneNumber,
  } = provider;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      <div className="p-8 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start border-b pb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
            <p className="text-sm text-indigo-500 mt-1">{specialization}</p>
          </div>
          <Rating value={rating} />
        </div>

        {/* Location */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-1">📍 Location</h2>
          <p className="text-sm text-gray-700">{location}</p>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-1">📝 About</h2>
          <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">{longDescription}</p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-1">📞 Contact</h2>
          <div className="text-sm text-gray-700 space-y-1">
            <p>
              Email:{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-indigo-600 hover:text-indigo-800 underline"
              >
                {contactEmail}
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href={`tel:${phoneNumber}`}
                className="text-indigo-600 hover:text-indigo-800 underline"
              >
                {phoneNumber}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetails;
