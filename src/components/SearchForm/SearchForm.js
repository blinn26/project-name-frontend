import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ handleSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchTerm) {
      setError('Please enter a keyword');
    } else {
      handleSearchSubmit(searchTerm);
      console.log(searchTerm);
      setSearchTerm('');
      setError('');
    }
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
        {error && <span className='search-form__error'>{error}</span>}
        <button type='submit' className='search-form__button'>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
