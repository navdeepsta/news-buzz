import React, { useState } from 'react';
import "./Search.css";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm('');
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
      <button className="search-button" onClick={handleSearch} aria-label="Submit search">
        Search
      </button>
    </>
  );
};

export default Search;
