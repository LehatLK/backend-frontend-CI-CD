import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api-qakcvdkuua-uc.a.run.app/bilar');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch} disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Search'}
      </button>
      {error && <p>Error: {error.message}</p>}
      {searchResults.length > 0 && (
  <div>
    <h2>Search Results</h2>
    <ul>
      {searchResults.map((car, index) => (
        <li key={index}>
          <strong>Name:</strong> {car.name}, <strong>Model:</strong> {car.modell}, <strong>Color:</strong> {car.farg}
        </li>
      ))}
    </ul>
  </div>
)}

    </div>
  );
}

export default SearchBar;
