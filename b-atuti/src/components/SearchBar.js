import React from 'react';

const SearchBar = ({ handleSearch }) => {
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    handleSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Search by description"
      />
    </div>
  );
};

export default SearchBar;
