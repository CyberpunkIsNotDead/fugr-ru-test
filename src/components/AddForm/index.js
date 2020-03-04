import React from 'react';
import CONFIG from '../../config';

export const AddForm = () => {

  // CONFIG.FORM_FIELDS
  // case add entry in reducer
  const addEntry = (e) => {
    e.preventDefault();
    console.log(e.target)
  };

  return (
    <form onSubmit={e => addEntry(e)}>
      {
        CONFIG.FORM_FIELDS.map((field, index) => (
          <p key={index}>{field}<input type='text' /></p>
        ))
      }
      <button>Add entry</button>
    </form>
  )
};
