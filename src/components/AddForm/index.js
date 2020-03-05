import React, { useState, Fragment, useContext, useEffect } from 'react';
import CONFIG from '../../config';
import { DataContext } from '../../Context/DataContextWrapper';
import { ADD_ENTRY } from '../../Context/DataContextWrapper/actionTypes';

export const AddForm = (props) => {

  const [showForm, setShowForm] = useState(false);
  const initialFormState = CONFIG.DATA_OBJECT;
  const [formState, setFormState] = useState(initialFormState);
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

  const formValidation = () => {
    console.log(formState)
    let valid = isObjValid(formState) && isObjValid(formState.address);
    setFormIsValid(valid);
  };

  const isObjValid = (obj) => {
    let valid = true
    for (const value of Object.values(obj))
      valid = valid && (value !== "");
    return valid;
  }
  
  useEffect(formValidation);


  const handleChange = (type, field, value) => {
    formValidation()

    switch (type) {
      case 'address':
        setFormState({...formState, address: {...formState.address, [field]: value}});
        break;
      default:
        setFormState({...formState, [field]: value});
    };
  };

  const formField = (key, index, type) => {
    return (
      <p key={index}>
        <span>{key}</span>
        <input
          type='text'
          name={key}
          onChange={e => handleChange(type, key, e.target.value)}
        />
        </p>
    );
  };

  const formFields = () => {
    const elements = [];
    // eslint-disable-next-line
    Object.entries(CONFIG.DATA_OBJECT).map((item, index) => {
      const [key, value] = item;
      if (key === 'address') {
        // eslint-disable-next-line
        Object.entries(value).map((item, index) => {
          const [key] = item
          elements.push(formField(key, key+index, 'address'));
        });
      } else {
        elements.push(formField(key, index, ''));
      };
    });
    return elements;
  };

  const renderIfPresent = () => (
    showForm
    ? (
      <Fragment>
        <button onClick={handleClick}>Hide</button>
        <form className='add-form' onSubmit={e => handleSubmit(e)}>
          { formFields() }
          <button disabled={!formIsValid}>Add entry</button>
        </form>
      </Fragment>
    ) : (
      <button onClick={handleClick}>Show</button>
    )
  );

  return (
    <div className='container'>
      { renderIfPresent() }
    </div>
  )
};
