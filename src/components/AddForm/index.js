import React, { useState, Fragment, useContext } from 'react';
import CONFIG from '../../config';
import { DataContext } from '../../Context/DataContextWrapper';
import { ADD_ENTRY } from '../../Context/DataContextWrapper/actionTypes';

export const AddForm = (props) => {

  const [showForm, setShowForm] = useState(false);
  const initialFormState = CONFIG.DATA_OBJECT;
  const [formState, setFormState] = useState(initialFormState);
  const [form, setForm] = useState()
  const [formIsValid, setFormIsValid] = useState(false);

  const {dispatch} = useContext(DataContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_ENTRY,
      item: formState,
    });
  };

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleChange = (type, field, value) => {
    switch (type) {
      case 'address':
        setFormState({...formState, address: {...formState.address, [field]: value}});
        break;
      default:
        setFormState({...formState, [field]: value});
    };
  };

  const formValidation = () => {
    // console.log(e.currentTarget.elements)
  }

  const formField = (key, index, type) => {
    return (
      <p key={index}>{key}<input type='text' name={key} onChange={e => handleChange(type, key, e.target.value)} /></p>
    );
  };

  const formFields = () => {
    const elements = [];

    Object.entries(CONFIG.DATA_OBJECT).map((item, index) => {
      const [key, value] = item;
      if (key === 'address') {
        Object.entries(value).map((item, index) => {
          const [key, value] = item
          elements.push(formField(key, key+index, 'address'));
        });
      } else {
        elements.push(formField(key, index, ''));
      };
    });
    return elements;
  };

  // arr.every(callback(currentValue[, index[, array]])[, thisArg])

  const renderIfPresent = () => (
    showForm
    ? (
      <Fragment>
        <button onClick={handleClick}>Hide</button>
        <form onSubmit={e => handleSubmit(e)}>
          { formFields() }
          <button disabled={formIsValid}>Add entry</button>
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
