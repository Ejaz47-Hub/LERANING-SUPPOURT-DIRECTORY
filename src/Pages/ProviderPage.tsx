import { useParams, Link } from 'react-router-dom';
import { useProviders } from '../hooks/useProviders';
import ProviderDetails from '../components/ProviderDetails';
import LoadingSpinner from '../components/LoadingSpinner';

const ProviderPage = () => {
  const { id } = useParams<{ id: string }>();
  const { providers, loading, error } = useProviders();

  const providerId = Number(id);
  const provider = providers.find((p) => p.id === providerId);

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="text-center text-red-600 mt-10 font-medium">
        {error}
      </div>
    );
  }

  if (!provider) {
    return (
      <section className="max-w-2xl mx-auto py-10 px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Oops! Provider not found.
        </h2>
        <Link
          to="/"
          className="inline-block text-blue-600 hover:underline hover:text-blue-800 mt-2"
        >
          ← Back to all providers
        </Link>
      </section>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <Link
        to="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 19l-7-7 7-7"
          />
        </svg>
        Back to all providers
      </Link>

      <ProviderDetails provider={provider} />
    </main>
  );
};

export default ProviderPage;
