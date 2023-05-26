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
      <div className='search-form__field'>
        <input
          type='text'
          value={searchTerm}
          onChange={handleChange}
          placeholder='Enter topic'
          className='search-form__input'
        />
        <button type='submit' className='search-form__button'>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
