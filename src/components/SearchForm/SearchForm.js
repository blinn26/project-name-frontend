import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ handleSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [searchDone, setSearchDone] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setSearchDone(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchTerm) {
      setError('Please enter a keyword');
    } else {
      handleSearchSubmit(searchTerm);
      setSearchTerm('');
      setError('');
      setSearchDone(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='search-form'>
      <div className='search-form__field'>
        <input
          type='text'
          value={searchTerm}
          onChange={handleChange}
          placeholder='Enter topic'
          className={`search-form__input ${searchTerm && 'typing'}`}
        />
        {error && <span className='search-form__error'>{error}</span>}
        <button
          type='submit'
          className={`search-form__button ${searchTerm && 'typing'} ${searchDone && 'done'}`}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
