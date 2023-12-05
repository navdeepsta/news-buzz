import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <>
      <input
        type="text"
        id="searchInput"
        placeholder="Search keyword or phrase"
        value={searchTerm}
        onChange={handleInputChange}
        aria-label="Search keyword or phrase"
      />
      <button onClick={handleSearch} aria-label="Submit search">
        Search
      </button>
    </>
  );
};

export default Search;
