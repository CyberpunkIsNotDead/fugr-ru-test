import React from 'react';
import CONFIG from '../../config';

export const AddForm = (props) => {

  // CONFIG.FORM_FIELDS
  // case add entry in reducer
  const addEntry = (e) => {
    e.preventDefault();
    console.log(e.target)

  };

  // handle multiple form fields in react (formData?)
  // Array.unshift() : Adding elements at the front of an Array

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
