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
      setSearchTerm('');
      setError('');
    }
  };

  return (
    <div className='search-container'>
      <h1 className='search-title'>What's going on in the world?</h1>
      <p className='search-description'>Find the latest news on any topic and save them in your personal account.</p>
      <form
        onSubmit={handleSubmit}
        className='search-form'>
        <div className='search-form__field'>
          <input
            type='text'
            value={searchTerm}
            onChange={handleChange}
            placeholder='Enter topic'
            className='search-form__input'
          />
          {error && <span className='search-form__error'>{error}</span>}
          <button
            type='submit'
            className='search-form__button'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
