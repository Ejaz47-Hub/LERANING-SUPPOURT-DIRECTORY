import { useState, useEffect } from 'react';
import providersData from '../data/providers.json';

interface Provider {
  id: number;
  name: string;
  specialization: string;
  location: string;
  rating: number;
  shortDescription: string;
  longDescription: string;
  contactEmail: string;
  phoneNumber: string;
}

export const useProviders = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call with delay
    const fetchProviders = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        setProviders(providersData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch providers');
        setLoading(false);
      }
    };

    fetchProviders();
  }, []);

  return { providers, loading, error };
};