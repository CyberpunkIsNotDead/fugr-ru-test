import React, { useState, Fragment, useContext } from 'react';
import CONFIG from '../../config';
import { DataContext } from '../../Context/DataContextWrapper';
import { ADD_ENTRY } from '../../Context/DataContextWrapper/actionTypes';

export const AddForm = (props) => {

  const [showForm, setShowForm] = useState(false);
  const initialFormState = CONFIG.DATA_OBJECT;
  const [formState, setFormState] = useState(initialFormState);

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
      case 'data':
        setFormState({...formState, [field]: value});
        break;
      case 'address':
        setFormState({...formState, address: {...formState.address, [field]: value}});
        break;
      default:
        setFormState({...formState, [field]: value});
    };
  };

  const renderIfPresent = () => (
    showForm
    ? (
      <Fragment>
        <button onClick={handleClick}>Hide</button>
        <form onSubmit={e => handleSubmit(e)}>
          {
            CONFIG.DATA_FIELDS.map((field, index) => (
              <p key={index}>{field}<input type='text' onChange={e => handleChange('data', field, e.target.value)} /></p>
            ))
          }
          {
            CONFIG.ADDRESS_FIELDS.map((field, index) => (
              <p key={index+10}>{field}<input type='text' onChange={e => handleChange('address', field, e.target.value)} /></p>
            ))
          }
          {
            <p key={9000}>{CONFIG.DESCRIPTION_FIELD}<input type='text' onChange={e => handleChange('description', CONFIG.DESCRIPTION_FIELD, e.target.value)} /></p>
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
