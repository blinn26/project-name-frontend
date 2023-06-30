import React, { useState, useEffect } from 'react';
import './SearchForm.css';

const SearchForm = ({ handleSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [searchDone, setSearchDone] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (searchTerm.length > 0) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setSearchDone(false);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchTerm) {
      setError('Please enter a keyword');
    } else {
      handleSearchSubmit(searchTerm);
      setSearchTerm('');
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
          placeholder='Text not entered'
          className={`search-form__input ${error && 'search-form__input--error'} ${isTyping && 'typing'}`}
        />
        {error && <span className='search-form__error'>{error}</span>}
        <button
          type='submit'
          className={`search-form__button ${searchDone && 'done'}`}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
