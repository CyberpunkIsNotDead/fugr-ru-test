import React, { useState, Fragment } from 'react';

export const SearchForm = (props) => {

  const [inputValue, setInputValue] = useState('');

  const handleInput = (value) => {
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setFilterString(inputValue)
  };

  return (
    <Fragment>
      <form className='search-form' onSubmit={e => handleSubmit(e)}>
        <input type='text' value={inputValue} onChange={e => handleInput(e.target.value)} />
        <button>Search</button>
      </form>
    </Fragment>
  )
};
