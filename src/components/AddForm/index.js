import React, { useState, Fragment } from 'react';
import CONFIG from '../../config';

export const AddForm = (props) => {

  const [showForm, setShowForm] = useState(false);

  // CONFIG.FORM_FIELDS
  // case add entry in reducer
  const addEntry = (e) => {
    e.preventDefault();
    console.log(e.target)

  };

  // handle multiple form fields in react (formData?)
  // Array.unshift() : Adding elements at the front of an Array

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const renderIfPresent = () => (
    showForm
    ? (
      <Fragment>
        <button onClick={handleClick}>Hide</button>
        <form onSubmit={e => addEntry(e)}>
          {
            CONFIG.FORM_FIELDS.map((field, index) => (
              <p key={index}>{field}<input type='text' /></p>
            ))
          }
          <button>Add entry</button>
        </form>
      </Fragment>
    ) : (
      <button onClick={handleClick}>Show</button>
    )
  );

  return (
    <div>
      { renderIfPresent() }
    </div>
  )
};
