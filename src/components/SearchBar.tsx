import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (newValue: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="🔍 Search for providers..."
        className="w-full rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm text-gray-800 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-200"
      />
    </div>
  );
};

export default SearchBar;
