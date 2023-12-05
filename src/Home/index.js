import React from 'react';
import Search from '../Search';

export default function Home() {

  const handleSearch = (searchTerm) => {
    // Perform the search logic here
  };

  return <Search onSearch={handleSearch} />
}
