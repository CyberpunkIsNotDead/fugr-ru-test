import React, { useState, useContext } from 'react';
import { DataContext } from '../../DataContextWrapper';

export const SearchField = () => {

  // const [inputValue, setInputValue] = useState('');

  const {
    dataState: {data},
    filterData,
  } = useContext(DataContext);

  const handleInput = (value) => {
    console.log(filterData(data, value))
  };

  return (
    <div>
      <input type='text' onChange={e => handleInput(e.target.value)} />
      <button >Search</button>
    </div>
  )
};
