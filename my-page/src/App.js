import React, { useState } from 'react';
import SearchBar from './searchbar';


function App() {
  const [searchResults, setSearchResults] = useState([]);

  // Define the onSearch function here
  const handleSearch = (searchTerm) => {
    // Perform the search logic, update searchResults, and handle errors here
    // For simplicity, let's assume you set the search results in state
    setSearchResults([...searchResults, searchTerm]);
  };

  return (
    <div>
      <h1>Search App</h1>
      <SearchBar onSearch={handleSearch} />
      {/* Display search results or other components */}
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;