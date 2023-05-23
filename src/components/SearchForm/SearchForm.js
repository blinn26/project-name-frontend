import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search with searchTerm
  };

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input type='text' value={searchTerm} onChange={handleChange} className='search-form__input' />
      <button type='submit' className='search-form__button'>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
