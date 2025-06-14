import { useState } from 'react';
import { useProviders } from '../hooks/useProviders';
import ProviderCard from '../components/providerCard';
import SearchBar from '../components/SearchBar';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const { providers, loading, error } = useProviders();
  const [query, setQuery] = useState('');

  const matchesSearch = (text: string) =>
    text.toLowerCase().includes(query.toLowerCase());

  const visibleProviders = providers.filter(
    (provider) => matchesSearch(provider.name) || matchesSearch(provider.specialization)
  );

  if (loading) return <LoadingSpinner />;
  if (error) {
    return (
      <div className="text-center mt-10 text-red-600 font-medium">
        {error}
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-800 font-serif mb-6">
        <u>Learning Support Providers</u>
      </h1>

      <SearchBar value={query} onChange={setQuery} />

      {visibleProviders.length === 0 ? (
        <p className="text-center text-gray-500 mt-12 text-lg">
          No providers found. Try adjusting your search.
        </p>
      ) : (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProviders.map((provider) => (
            <ProviderCard key={provider.id} {...provider} />
          ))}
        </section>
      )}
    </main>
  );
};

export default Home;