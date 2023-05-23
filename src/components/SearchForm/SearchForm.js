import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input
        className='search-form__input'
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Search for news'
      />
      <button className='search-form__button' type='submit'>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
